import Link from "next/link";
import { ArrowRight, BrainCircuit, Gauge, Network, Sparkles } from "lucide-react";
import { Reveal } from "@/site/motion";
import { T } from "@/site/theme";

const FLOW = [
  { title: "Signals", copy: "Bring operational and customer context into one intelligence layer.", icon: Network },
  { title: "Insights", copy: "Surface patterns and decision-ready information for teams and workflows.", icon: BrainCircuit },
  { title: "Automation", copy: "Turn repeatable intelligence into faster, more consistent execution.", icon: Gauge },
  { title: "Experience", copy: "Use AI to support more relevant and responsive customer journeys.", icon: Sparkles },
];

export default function FahimShowcase() {
  return (
    <section className="relative overflow-hidden border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }} aria-labelledby="fahim-showcase-heading">
      <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full" style={{ background: T.signal, filter: "blur(220px)", opacity: 0.06 }} />
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.green }}>Fahim AI</div>
          <h2 id="fahim-showcase-heading" className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
            An intelligence layer for modern banking operations
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: T.muted }}>
            Fahim AI brings practical intelligence into the banking technology landscape—helping teams connect signals, improve decisions and automate selected workflows without turning AI into a disconnected experiment.
          </p>
          <Link href="/solutions/fahim-ai" className="mt-8 inline-flex min-h-11 items-center gap-2 font-jbmono text-[11px] uppercase tracking-widest" style={{ color: T.signal }}>
            Explore Fahim AI <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </Reveal>

        <div className="relative lg:col-span-7">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: T.border }} />
          <div className="grid gap-4 sm:grid-cols-2">
            {FLOW.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="relative h-full rounded-xl border p-6 sm:p-7" style={{ borderColor: T.border, background: T.panel }}>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border" style={{ borderColor: T.border, color: T.signal, background: T.bg }}>
                      <item.icon aria-hidden="true" size={19} />
                    </div>
                    <span className="font-jbmono text-[10px] uppercase tracking-[0.2em]" style={{ color: T.faint }}>0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: T.muted }}>{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border px-4 py-2 font-jbmono text-[10px] uppercase tracking-[0.18em]" style={{ borderColor: T.border, color: T.signal, background: T.bg }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: T.green }} />
            Human-led · AI-enabled
          </div>
        </div>
      </div>
    </section>
  );
}
