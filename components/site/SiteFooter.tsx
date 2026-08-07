import Link from "next/link";
import { TayseerLogo } from "@/components/brand/TayseerLogo";
import { solutions } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <TayseerLogo />
          <p className="mt-6 max-w-md text-sm leading-6 text-[var(--brand-muted)]">
            Tayseer is a fintech company serving Saudi Arabia and the UAE, focused on AI, digital banking, core banking, payments and financial technology modernization.
          </p>
        </div>

        <div>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--brand-signal)]">Solutions</p>
          <div className="mt-5 grid gap-3">
            {solutions.slice(0, 5).map((solution) => (
              <Link key={solution.href} href={solution.href} className="text-sm text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-text)]">
                {solution.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--brand-signal)]">Contact</p>
          <div className="mt-5 space-y-3 text-sm text-[var(--brand-muted)]">
            <p>Dubai, UAE</p>
            <p>Riyadh, Saudi Arabia</p>
            <a href="mailto:info@tayseer.me" className="block transition-colors hover:text-[var(--brand-text)]">info@tayseer.me</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col gap-4 border-t border-[var(--brand-border)] pt-6 text-xs text-[var(--brand-faint)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tayseer Innovations. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
