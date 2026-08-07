"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SmoothScroll from "@/site/SmoothScroll";
import { Header } from "@/site/Header";
import { Footer } from "@/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { T } from "@/site/theme";

export default function LegacyChrome({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.scrollTo(0, 0);
  }, [mounted, pathname]);

  // The legacy Vite UI was written as a purely client-rendered application.
  // Rendering the interactive shell only after mount keeps its first client
  // render identical to the server output and prevents hydration drift while
  // Phase 1 preserves the existing design unchanged.
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="min-h-screen"
        style={{ background: T.bg, color: T.text }}
      />
    );
  }

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
