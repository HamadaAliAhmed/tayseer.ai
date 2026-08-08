"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientRuntime() {
  const pathname = usePathname();
  const isInitialRoute = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (isInitialRoute.current) {
      isInitialRoute.current = false;
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
