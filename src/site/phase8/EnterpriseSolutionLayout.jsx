import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/site/motion";
import { ContactSection } from "@/site/ContactSection";
import { T } from "@/site/theme";

export function SolutionHero({ eyebrow, title, tagline, lead, visual, primaryHref = "/connect", secondaryHref = "/solutions" }) {
  return (
    <section className="relative overflow-hidden border-b px-6 pb-20 pt-32 md:px-12" style={{ borderColor: T.border }}>
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 78% 30%, rgba(13,90,140,.14), transparent 34%)" }} />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="font-jbmono text-[11px] uppercase tracking-[0.28em]" style={{ color: T.signal }}>{eyebrow}</div>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold uppercase leading-[.92] tracking-[-.045em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium" style={{ color: T.text }}>{tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: T.muted }}>{lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryHref} className="group inline-flex min-h-12 items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider" style={{ background: T.signal, color: T.bg }}>
              Talk to our experts <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={secondaryHref} className="group inline-flex min-h-12 items-center gap-2 border px-6 py-3 text-sm font-semibold uppercase tracking-wider" style={{ borderColor: T.border }}>
              Explore solutions <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">{visual}</div>
      </div>
    </section>
  );
}

export function ChallengeOutcome({ challenges = [], outcomes = [] }) {
  return (
    <section className="border-b px-6 py-24 md:px-12" style={{ borderColor: T.border }}>
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
        <div>
          <div className="font-jbmono text-[11px] uppercase tracking-[0.24em]" style={{ color: T.signal }}>Business challenge</div>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">What financial institutions need to solve</h2>
          <div className="mt-8 space-y-4">
            {challenges.map((item) => <div key={item} className="border-l-2 pl-4 text-sm leading-relaxed" style={{ borderColor: T.signal, color: T.muted }}>{item}</div>)}
          </div>
        </div>
        <div>
          <div className="font-jbmono text-[11px] uppercase tracking-[0.24em]" style={{ color: T.green }}>Business outcomes</div>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">What the platform enables</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => <div key={item} className="flex gap-3 border p-4 text-sm" style={{ borderColor: T.border, background: T.panel }}><CheckCircle2 size={18} aria-hidden="true" style={{ color: T.green }} /><span>{item}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityGrid({ title = "Capabilities", intro, items = [] }) {
  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <div className="font-jbmono text-[11px] uppercase tracking-[0.24em]" style={{ color: T.signal }}>Platform capabilities</div>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 leading-relaxed" style={{ color: T.muted }}>{intro}</p> : null}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.h} delay={(index % 3) * 0.05}>
              <article className="group h-full border p-6 transition-colors hover:border-[#0D5A8C]" style={{ borderColor: T.border, background: T.panel }}>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center" style={{ background: "rgba(13,90,140,.10)", color: T.signal }}>{item.icon ? <item.icon size={21} aria-hidden="true" /> : null}</div>
                  <span className="font-jbmono text-[10px]" style={{ color: T.faint }}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.h}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: T.muted }}>{item.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchitectureFlow({ title, steps = [] }) {
  return (
    <section className="border-y px-6 py-24 md:px-12" style={{ borderColor: T.border, background: T.panel }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="font-jbmono text-[11px] uppercase tracking-[0.24em]" style={{ color: T.signal }}>Architecture</div>
        <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => <div key={step} className="relative border p-5 text-sm font-medium" style={{ borderColor: T.border, background: T.bg }}><span className="mb-3 block font-jbmono text-[10px]" style={{ color: T.faint }}>{String(index + 1).padStart(2, "0")}</span>{step}{index < steps.length - 1 ? <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 md:block" style={{ color: T.signal }}>→</span> : null}</div>)}
        </div>
      </div>
    </section>
  );
}

export function RelatedSolutions({ items = [] }) {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><div className="font-jbmono text-[11px] uppercase tracking-[0.24em]" style={{ color: T.signal }}>Continue exploring</div><h2 className="mt-3 text-3xl font-bold uppercase tracking-tight">Related solutions</h2></div>
          <Link href="/solutions" className="text-sm font-semibold" style={{ color: T.signal }}>View all solutions →</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => <Link key={item.href} href={item.href} className="group border p-6 transition-colors hover:border-[#0D5A8C]" style={{ borderColor: T.border, background: T.panel }}><div className="text-lg font-semibold">{item.title}</div><p className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{item.description}</p><span className="mt-5 inline-flex text-sm font-semibold" style={{ color: T.signal }}>Explore <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>)}
        </div>
      </div>
    </section>
  );
}

export function EnterpriseSolutionPage({ hero, challenges, outcomes, capabilityTitle, capabilityIntro, capabilities, architecture, related }) {
  return (
    <div className="font-archivo" style={{ background: T.bg, color: T.text }}>
      <SolutionHero {...hero} />
      <ChallengeOutcome challenges={challenges} outcomes={outcomes} />
      <CapabilityGrid title={capabilityTitle} intro={capabilityIntro} items={capabilities} />
      <ArchitectureFlow {...architecture} />
      <RelatedSolutions items={related} />
      <ContactSection />
    </div>
  );
}
