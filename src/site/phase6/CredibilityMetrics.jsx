import { BadgeCheck, Eye, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/site/motion";
import { CountUp } from "@/site/ui";
import { DataGridArt } from "@/site/DecorativeArt";
import { T } from "@/site/theme";

const STATS = [
  { n: 100, suffix: "+", label: "Satisfied Clients", context: "Relationships built around technology delivery and ongoing value." },
  { n: 15, suffix: "+", label: "Countries", context: "Regional and international exposure across diverse operating environments." },
  { n: 600, suffix: "+", label: "Finished Products", context: "A broad delivery footprint across software and banking technology initiatives." },
  { n: 100, suffix: "+", label: "Skilled Experts", context: "Specialists working across engineering, banking technology and delivery." },
];

const PRINCIPLES = [
  { title: "One Project, One Team", copy: "Focused delivery ownership around each engagement.", icon: Users },
  { title: "Transparent Collaboration", copy: "Direct communication and visible progress throughout delivery.", icon: Eye },
  { title: "Consistent Quality", copy: "Business-ready execution shaped around the institution’s needs.", icon: BadgeCheck },
  { title: "Banking-Critical Mindset", copy: "Technology decisions grounded in reliability, trust and operational continuity.", icon: ShieldCheck },
];

export default function CredibilityMetrics() {
  return (
    <section className="relative overflow-hidden border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }} aria-labelledby="credibility-heading">
      <DataGridArt className="pointer-events-none absolute right-8 top-8 hidden h-44 w-64 opacity-50 lg:block" />
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.signal }}>Enterprise credibility</div>
          <h2 id="credibility-heading" className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-5xl">
            Delivery scale backed by a partnership mindset
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: T.border, background: T.border }}>
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <div className="h-full p-7 sm:p-8" style={{ background: T.panel }}>
                <div className="text-5xl font-extrabold tracking-tight" style={{ color: T.signal }}>
                  <CountUp to={stat.n} suffix={stat.suffix} />
                </div>
                <div className="mt-3 font-jbmono text-[11px] uppercase tracking-[0.18em]">{stat.label}</div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: T.muted }}>{stat.context}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="h-full border-t pt-5" style={{ borderColor: "rgba(13,90,140,.35)" }}>
                <item.icon aria-hidden="true" size={20} style={{ color: T.signal }} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
