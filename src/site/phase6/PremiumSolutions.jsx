import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Landmark, Layers3, ServerCog, Smartphone, Wrench } from "lucide-react";
import { Reveal } from "@/site/motion";
import { T } from "@/site/theme";

const SOLUTIONS = [
  {
    name: "Core Banking",
    label: "Modernize the core",
    copy: "Build a future-ready banking foundation designed to support growth, integration and continuous evolution.",
    outcome: "Modernization · Scalability · Integration",
    to: "/solutions/core-banking",
    icon: Landmark,
  },
  {
    name: "Fahim AI",
    label: "Operationalize intelligence",
    copy: "Bring AI into decision-making, automation and customer-focused banking workflows with a practical enterprise lens.",
    outcome: "Insights · Automation · Intelligence",
    to: "/solutions/fahim-ai",
    icon: BrainCircuit,
  },
  {
    name: "MBuke",
    label: "Accelerate digital banking",
    copy: "Launch a flexible white-label mobile banking experience that helps institutions move faster across digital journeys.",
    outcome: "Mobile · Experience · Speed to market",
    to: "/solutions/mbuke",
    icon: Smartphone,
  },
  {
    name: "Software Management Systems",
    label: "Simplify business operations",
    copy: "Shape tailored systems around real operational needs while keeping the experience structured, connected and maintainable.",
    outcome: "Workflow · Control · Efficiency",
    to: "/solutions/software-management-systems",
    icon: Layers3,
  },
  {
    name: "Managed Services",
    label: "Extend your technology capability",
    copy: "Combine specialized expertise and operating support to keep critical platforms reliable, responsive and aligned with business needs.",
    outcome: "Expertise · Reliability · Continuity",
    to: "/solutions/managed-services",
    icon: Wrench,
  },
  {
    name: "Banking Systems",
    label: "Strengthen the banking estate",
    copy: "Connect banking infrastructure and systems with an implementation partner focused on integration and long-term operational value.",
    outcome: "Infrastructure · Integration · Operations",
    to: "/solutions/banking-systems",
    icon: ServerCog,
  },
];

export default function PremiumSolutions() {
  return (
    <section className="relative border-t px-6 py-24 md:px-12" style={{ borderColor: T.border, background: T.panel }} aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <Reveal>
            <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.signal }}>Solutions portfolio</div>
            <h2 id="portfolio-heading" className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-5xl">
              Technology built around banking outcomes, not isolated products
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/solutions" className="inline-flex min-h-11 items-center gap-2 font-jbmono text-[11px] uppercase tracking-widest" style={{ color: T.signal }}>
              View all solutions <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border md:grid-cols-2 xl:grid-cols-3" style={{ borderColor: T.border, background: T.border }}>
          {SOLUTIONS.map((solution, index) => (
            <Reveal key={solution.name} delay={index * 0.04}>
              <Link href={solution.to} className="group flex h-full min-h-[310px] flex-col p-7 sm:p-8" style={{ background: T.bg }}>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md" style={{ background: "rgba(13,90,140,.10)", color: T.signal }}>
                    <solution.icon aria-hidden="true" size={20} />
                  </div>
                  <span className="font-jbmono text-[10px] tracking-[0.2em]" style={{ color: T.faint }}>0{index + 1}</span>
                </div>
                <div className="mt-10 font-jbmono text-[10px] uppercase tracking-[0.2em]" style={{ color: T.green }}>{solution.label}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em]">{solution.name}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: T.muted }}>{solution.copy}</p>
                <div className="mt-auto flex items-end justify-between gap-6 pt-8">
                  <span className="text-[11px] leading-relaxed" style={{ color: T.faint }}>{solution.outcome}</span>
                  <ArrowUpRight aria-hidden="true" size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: T.signal }} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
