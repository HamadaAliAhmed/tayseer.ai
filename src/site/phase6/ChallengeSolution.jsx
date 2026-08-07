import Link from "next/link";
import { ArrowRight, BrainCircuit, Landmark, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/site/motion";
import { T } from "@/site/theme";

const CHALLENGES = [
  { title: "Legacy Core Constraints", copy: "Modernization pressure without disrupting critical banking operations.", icon: Landmark },
  { title: "Fragmented Digital Journeys", copy: "Customers expect connected, intuitive experiences across every channel.", icon: Layers3 },
  { title: "AI Adoption at Scale", copy: "Turning AI ambition into practical intelligence, automation and decision support.", icon: BrainCircuit },
  { title: "Operational Complexity", copy: "Reducing friction while improving reliability, transparency and execution speed.", icon: Workflow },
  { title: "Customer Personalization", copy: "Using data and technology to create more relevant banking experiences.", icon: Sparkles },
  { title: "Security & Resilience", copy: "Protecting trust while building platforms designed for continuous change.", icon: ShieldCheck },
];

const SOLUTION_MAP = [
  ["Core modernization", "Core Banking"],
  ["AI enablement", "Fahim AI"],
  ["Digital channels", "MBuke"],
  ["Operational platforms", "Software Management Systems"],
  ["Technology operations", "Managed Services"],
  ["Banking infrastructure", "Banking Systems"],
];

export default function ChallengeSolution() {
  return (
    <section className="relative border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }} aria-labelledby="challenges-heading">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.signal }}>Transformation starts with the problem</div>
            <h2 id="challenges-heading" className="mt-5 max-w-xl text-4xl font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-5xl">
              Banking transformation is bigger than a technology upgrade
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: T.muted }}>
              Financial institutions need technology that connects modernization, customer experience, intelligence and operational resilience into one coherent transformation journey.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2 lg:col-span-7" style={{ borderColor: T.border, background: T.border }}>
            {CHALLENGES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full p-6" style={{ background: T.panel }}>
                  <item.icon aria-hidden="true" size={20} style={{ color: T.signal }} />
                  <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08} className="mt-14 rounded-lg border p-6 sm:p-8" style={{ borderColor: T.border, background: T.panel }}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-jbmono text-[11px] uppercase tracking-[0.25em]" style={{ color: T.green }}>How Tayseer responds</div>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-3xl">One connected portfolio for the banking transformation lifecycle.</h3>
            </div>
            <Link href="/solutions" className="inline-flex min-h-11 items-center gap-2 font-jbmono text-[11px] uppercase tracking-widest" style={{ color: T.signal }}>
              Explore the portfolio <ArrowRight aria-hidden="true" size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_MAP.map(([need, solution]) => (
              <div key={solution} className="flex items-center justify-between gap-4 border-t pt-3 text-sm" style={{ borderColor: T.border }}>
                <span style={{ color: T.faint }}>{need}</span>
                <span className="font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
