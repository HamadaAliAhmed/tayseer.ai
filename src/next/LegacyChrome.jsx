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
