"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightStage({ children, className = "" }) {
  const ref = useRef(null);
  const [point, setPoint] = useState({ x: 50, y: 40 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  const onMove = (event) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPoint({ x, y });
  };

  return <div ref={ref} onMouseMove={onMove} className={`relative ${className}`} style={{ backgroundImage: reduced ? undefined : `radial-gradient(circle at ${point.x}% ${point.y}%, rgba(13,90,140,.055), transparent 26%)` }}>{children}</div>;
}

export function DepthCard({ children, className = "" }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  const onMove = (event) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - .5;
    const py = (event.clientY - rect.top) / rect.height - .5;
    setTransform(`perspective(900px) rotateX(${(-py * 3).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateZ(0)`);
  };

  const reset = () => setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");

  return <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={className} style={{ transform: reduced ? undefined : transform, transition: reduced ? "none" : "transform .22s cubic-bezier(.2,.8,.2,1)", transformStyle: "preserve-3d" }}>{children}</div>;
}

export function MotionSignal({ className = "" }) {
  return <span className={`relative inline-flex h-2 w-2 ${className}`} aria-hidden="true"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-30 motion-reduce:animate-none" /><span className="relative inline-flex h-2 w-2 rounded-full bg-current" /></span>;
}
