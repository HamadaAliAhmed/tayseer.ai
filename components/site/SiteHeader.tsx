import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TayseerLogo } from "@/components/brand/TayseerLogo";
import { navigation, solutions } from "@/lib/brand";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--brand-border)] bg-[rgba(9,11,14,.82)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-12">
        <TayseerLogo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-signal)]">
              Solutions
              <ChevronDown aria-hidden="true" size={14} className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute left-1/2 top-full w-[430px] -translate-x-1/2 pt-5">
              <div className="grid gap-1 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-panel)] p-2 shadow-2xl shadow-black/40">
                {solutions.map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="group/link flex items-center justify-between rounded-md px-4 py-3 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-signal)]"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-[var(--brand-text)]">{solution.label}</span>
                      <span className="mt-1 block text-[11px] text-[var(--brand-faint)]">{solution.description}</span>
                    </span>
                    <ArrowRight aria-hidden="true" size={14} className="text-[var(--brand-signal)] opacity-0 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </details>

          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-signal)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/connect"
            className="inline-flex min-h-11 items-center gap-2 bg-[var(--brand-signal)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-bg)]"
          >
            Connect <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-[var(--brand-border)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-text)]">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 w-[min(88vw,340px)] border border-[var(--brand-border)] bg-[var(--brand-panel)] p-3 shadow-2xl">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block border-b border-[var(--brand-border)] px-3 py-3 text-sm text-[var(--brand-text)]">
                {item.label}
              </Link>
            ))}
            <Link href="/connect" className="mt-3 block bg-[var(--brand-signal)] px-4 py-3 text-center text-sm font-semibold text-[var(--brand-bg)]">
              Connect
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
