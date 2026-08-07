"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SOLUTIONS, T } from "./theme";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [mSol, setMSol] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const solutionsGroupRef = useRef(null);
  const mobileToggleRef = useRef(null);

  const warmRoute = (href) => router.prefetch(href);

  useEffect(() => {
    setOpen(false);
    setMSol(false);
    setSolOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setMSol(false);
      mobileToggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleSolutionsBlur = (event) => {
    if (!solutionsGroupRef.current?.contains(event.relatedTarget)) {
      setSolOpen(false);
    }
  };

  const handleSolutionsKeyDown = (event) => {
    if (event.key === "Escape") {
      setSolOpen(false);
      event.currentTarget.querySelector("a")?.focus();
    }
  };

  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b font-archivo backdrop-blur-xl"
      style={{ background: "rgba(247,246,242,0.82)", borderColor: T.border, color: T.text }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" data-testid="desktop-nav" aria-label="Primary navigation">
          <div
            ref={solutionsGroupRef}
            className="relative"
            onMouseEnter={() => { setSolOpen(true); warmRoute("/solutions"); }}
            onMouseLeave={() => setSolOpen(false)}
            onFocusCapture={() => setSolOpen(true)}
            onBlurCapture={handleSolutionsBlur}
            onKeyDown={handleSolutionsKeyDown}
          >
            <Link
              href="/solutions"
              prefetch
              onFocus={() => warmRoute("/solutions")}
              data-testid="nav-solutions"
              aria-haspopup="true"
              aria-expanded={solOpen}
              aria-controls="desktop-solutions-menu"
              className="flex min-h-11 items-center gap-1.5 rounded-sm text-[13px] uppercase tracking-widest transition-colors"
              style={{ color: pathname.startsWith("/solutions") ? T.signal : T.muted }}
            >
              Solutions <ChevronDown aria-hidden="true" size={14} className="transition-transform duration-200" style={{ transform: solOpen ? "rotate(180deg)" : "none" }} />
            </Link>
            {solOpen && (
              <div id="desktop-solutions-menu" data-testid="solutions-dropdown" className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-1 gap-1 rounded-lg border p-2 shadow-xl" style={{ background: T.panel, borderColor: T.border }}>
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.to}
                      href={s.to}
                      prefetch
                      data-testid={`nav-sol-${s.to.split("/").pop()}`}
                      onMouseEnter={() => warmRoute(s.to)}
                      onFocus={() => warmRoute(s.to)}
                      className="group flex min-h-11 items-center justify-between rounded-md px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <div>
                        <div className="text-sm font-medium" style={{ color: T.text }}>{s.label}</div>
                        <div className="text-[11px]" style={{ color: T.faint }}>{s.desc}</div>
                      </div>
                      <ArrowRight aria-hidden="true" size={14} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100" style={{ color: T.signal }} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV.filter((n) => !n.children).map((n) => (
            <Link
              key={n.to}
              href={n.to}
              prefetch
              data-testid={`nav-${n.label.toLowerCase()}`}
              onMouseEnter={() => warmRoute(n.to)}
              onFocus={() => warmRoute(n.to)}
              aria-current={pathname === n.to ? "page" : undefined}
              className="flex min-h-11 items-center rounded-sm text-[13px] uppercase tracking-widest transition-colors"
              style={{ color: pathname === n.to ? T.signal : T.muted }}
            >
              {n.label}
            </Link>
          ))}

          <Link
            href="/connect"
            prefetch
            data-testid="nav-connect"
            onMouseEnter={() => warmRoute("/connect")}
            onFocus={() => warmRoute("/connect")}
            aria-current={pathname === "/connect" ? "page" : undefined}
            className="inline-flex min-h-11 items-center gap-2 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
            style={{ background: T.signal, color: T.bg }}
          >
            Connect
          </Link>
        </nav>

        <button
          ref={mobileToggleRef}
          type="button"
          data-testid="mobile-menu-toggle"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ color: T.text }}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" data-testid="mobile-menu" aria-label="Mobile navigation" className="overflow-hidden border-t md:hidden" style={{ borderColor: T.border, background: T.panel }}>
          <div className="px-6 py-4">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between rounded-sm py-3 text-sm uppercase tracking-widest"
              style={{ color: T.text }}
              onClick={() => setMSol((v) => !v)}
              data-testid="mobile-solutions-toggle"
              aria-expanded={mSol}
              aria-controls="mobile-solutions-menu"
            >
              Solutions <ChevronDown aria-hidden="true" size={16} className="transition-transform duration-200" style={{ transform: mSol ? "rotate(180deg)" : "none" }} />
            </button>
            {mSol && (
              <div id="mobile-solutions-menu" className="overflow-hidden pl-4">
                <Link href="/solutions" prefetch onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-sm py-2 text-sm" style={{ color: T.signal }}>All solutions</Link>
                {SOLUTIONS.map((s) => (
                  <Link key={s.to} href={s.to} prefetch onClick={() => setOpen(false)} data-testid={`m-nav-sol-${s.to.split("/").pop()}`} className="flex min-h-11 items-center rounded-sm py-2 text-sm" style={{ color: T.muted }}>{s.label}</Link>
                ))}
              </div>
            )}
            {NAV.filter((n) => !n.children).map((n) => (
              <Link key={n.to} href={n.to} prefetch onClick={() => setOpen(false)} aria-current={pathname === n.to ? "page" : undefined} data-testid={`m-nav-${n.label.toLowerCase()}`} className="flex min-h-11 items-center rounded-sm border-t py-3 text-sm uppercase tracking-widest" style={{ color: T.text, borderColor: T.border }}>{n.label}</Link>
            ))}
            <Link href="/connect" prefetch onClick={() => setOpen(false)} aria-current={pathname === "/connect" ? "page" : undefined} data-testid="m-nav-connect" className="mt-4 flex min-h-11 items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-widest" style={{ background: T.signal, color: T.bg }}>Connect</Link>
          </div>
        </nav>
      )}
    </header>
  );
};
