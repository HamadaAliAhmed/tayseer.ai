"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

// Progressive reveal using the platform IntersectionObserver instead of an
// animation runtime. Content is visible in SSR/first paint; below-fold content
// is only hidden after hydration and then revealed once when it approaches the viewport.
export const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    const alreadyNearViewport = rect.top <= window.innerHeight + 80;
    if (alreadyNearViewport) return;

    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px 80px 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : y}px)`,
        transition: `opacity .8s ${visible ? delay : 0}s cubic-bezier(.16,1,.3,1), transform .8s ${visible ? delay : 0}s cubic-bezier(.16,1,.3,1)`,
      }}
    >
      {children}
    </Tag>
  );
};

// CSS owns the hero-line entrance, so text animates even before the main
// application JavaScript becomes interactive.
export const LineReveal = ({ lines, className = "", stagger = 0.11 }) => (
  <span className={className}>
    {lines.map((t, i) => (
      <span key={i} className="block overflow-hidden">
        <span
          className="motion-line-reveal block"
          style={{ animationDelay: `${0.15 + i * stagger}s` }}
        >
          {t}
        </span>
      </span>
    ))}
  </span>
);

// Infinite marquee uses a compositor-friendly CSS transform animation rather
// than running a JavaScript animation loop.
export const Marquee = ({ items, speed = 40, className = "", sep = "/" }) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className="motion-marquee flex w-max whitespace-nowrap"
      style={{ animationDuration: `${speed}s` }}
      aria-hidden="true"
    >
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0 items-center">
          {items.map((it, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6">{it}</span>
              <span className="opacity-30">{sep}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);