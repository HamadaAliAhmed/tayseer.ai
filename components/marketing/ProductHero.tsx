import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProductHero({
  index,
  title,
  tagline,
  lead,
}: {
  index: string;
  title: string;
  tagline: string;
  lead: string;
}) {
  return (
    <section className="brand-grid relative overflow-hidden border-b border-[var(--brand-border)] px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute right-[-12rem] top-12 h-[420px] w-[420px] rounded-full bg-[var(--brand-signal)] opacity-[0.06] blur-[170px]" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--brand-border)] pb-6">
          <Link href="/solutions" className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-signal)]">
            <ArrowLeft aria-hidden="true" size={13} /> Solutions
          </Link>
          <span className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--brand-faint)]">{index}</span>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="brand-eyebrow">Tayseer solutions</p>
            <h1 className="mt-6 text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              {title}
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--brand-text)] md:text-3xl">{tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--brand-muted)] md:text-lg">{lead}</p>
            <Link href="/connect" className="group mt-8 inline-flex items-center gap-2 bg-[var(--brand-signal)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--brand-bg)]">
              Talk to our team <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
