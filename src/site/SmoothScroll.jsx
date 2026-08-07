"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let cancelIdle;
    let raf;
    let lenis;

    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (disposed) return;

      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 1200 });
      cancelIdle = () => window.cancelIdleCallback(idleId);
    } else {
      const timeoutId = window.setTimeout(start, 350);
      cancelIdle = () => window.clearTimeout(timeoutId);
    }

    return () => {
      disposed = true;
      cancelIdle?.();
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return children;
}
