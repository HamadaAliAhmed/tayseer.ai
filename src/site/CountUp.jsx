"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setValue(to);
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 60) {
      setValue(to);
      return;
    }

    let frame;
    let start;
    let started = false;
    setValue(0);

    const animate = () => {
      if (started) return;
      started = true;
      const duration = 1600;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min(1, (timestamp - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(to * eased));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        animate();
      },
      { rootMargin: "0px 0px 60px 0px", threshold: 0.01 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}
