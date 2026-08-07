"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SmoothScroll from "@/site/SmoothScroll";
import { Header } from "@/site/Header";
import { Footer } from "@/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { T } from "@/site/theme";

export default function LegacyChrome({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // The original Vite design relies heavily on IntersectionObserver-based
    // Framer Motion effects. Under App Router, fonts/images can settle after
    // hydration and change geometry before those observers get their first
    // useful measurement. Force a layout/viewport refresh on initial load so
    // reveals and legacy counters do not wait for the first user interaction.
    let cancelled = false;
    const refresh = () => {
      if (cancelled) return;
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    };

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(refresh);
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    window.addEventListener("load", refresh, { once: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <SmoothScroll>
      <div style={{ background: T.bg, color: T.text }} className="min-h-screen font-archivo antialiased">
        <Header />
        <main id="main-content" data-testid="page-main">{children}</main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" richColors />
      </div>
    </SmoothScroll>
  );
}
