import Link from "next/link";
import { ArrowRight, ArrowUpRight, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { LineReveal } from "@/site/motion";
import { T } from "@/site/theme";

const KPI = [
  ["Active customers", "128.4K"],
  ["Transaction value", "$2.45B"],
  ["Net profit", "$24.8M"],
];

export default function CinematicHero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden border-b px-6 pb-20 pt-32 md:px-12" style={{ borderColor: T.border }} aria-labelledby="phase7-hero-title">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 72% 32%, rgba(13,90,140,.18), transparent 34%), linear-gradient(180deg, rgba(13,90,140,.05), transparent 58%)" }} />
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-50" style={{ "--hl": T.hl, backgroundSize: "8.33% 6rem" }} />
      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="mb-7 flex items-center gap-3 font-jbmono text-[11px] uppercase tracking-[0.28em]" style={{ color: T.signal }}>
            <span className="h-1.5 w-1.5" style={{ background: T.green }} /> Enterprise banking technology
          </div>
          <h1 id="phase7-hero-title" className="text-[15vw] font-extrabold uppercase leading-[.84] tracking-[-.045em] sm:text-7xl lg:text-[6.4rem]">
            <LineReveal lines={["Banking.", <span key="reinvented" style={{ color: T.signal }}>Reinvented.</span>]} />
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: T.muted }}>
            AI-powered banking platforms, digital channels and enterprise technology built to help financial institutions modernize with confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/connect" className="group inline-flex min-h-12 items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider" style={{ background: T.signal, color: T.bg }}>
              Schedule consultation <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/solutions" className="group inline-flex min-h-12 items-center gap-2 border px-7 py-3.5 text-sm font-semibold uppercase tracking-wider" style={{ borderColor: T.border }}>
              Explore solutions <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs" style={{ color: T.faint }}>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={14} aria-hidden="true" style={{ color: T.signal }} /> Banking-critical delivery</span>
            <span className="inline-flex items-center gap-2"><Sparkles size={14} aria-hidden="true" style={{ color: T.signal }} /> AI-enabled workflows</span>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="absolute -inset-10 rounded-full blur-3xl" style={{ background: "rgba(13,90,140,.08)" }} />
          <div className="relative overflow-hidden rounded-2xl border p-3 shadow-2xl" style={{ borderColor: T.border, background: T.panel }}>
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: T.border }}>
              <div><div className="text-sm font-semibold">MBuke Command Center</div><div className="mt-1 text-[10px] font-jbmono uppercase tracking-widest" style={{ color: T.faint }}>Digital banking overview</div></div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px]" style={{ borderColor: T.border, color: T.green }}><Activity size={13} aria-hidden="true" /> Live</div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {KPI.map(([label, value]) => <div key={label} className="rounded-xl border p-4" style={{ borderColor: T.border, background: T.bg }}><div className="text-[10px] uppercase tracking-wider" style={{ color: T.faint }}>{label}</div><div className="mt-3 text-2xl font-semibold">{value}</div><div className="mt-2 h-1.5 overflow-hidden rounded-full" style={{ background: T.border }}><div className="h-full w-2/3 rounded-full" style={{ background: T.signal }} /></div></div>)}
            </div>
            <div className="grid gap-3 px-4 pb-4 md:grid-cols-[1.55fr_.85fr]">
              <div className="rounded-xl border p-5" style={{ borderColor: T.border, background: T.bg }}>
                <div className="flex items-center justify-between"><span className="text-xs font-medium">Transaction volume</span><span className="text-[10px]" style={{ color: T.faint }}>Last 7 months</span></div>
                <svg viewBox="0 0 560 180" className="mt-5 w-full" role="img" aria-label="Illustrative transaction volume trend">
                  <defs><linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0D5A8C" stopOpacity=".28"/><stop offset="1" stopColor="#0D5A8C" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0 150 C60 138 74 98 130 110 C180 121 207 75 260 88 C310 99 337 52 391 66 C450 80 473 36 560 49 L560 180 L0 180 Z" fill="url(#heroArea)"/>
                  <path d="M0 150 C60 138 74 98 130 110 C180 121 207 75 260 88 C310 99 337 52 391 66 C450 80 473 36 560 49" fill="none" stroke="#0D5A8C" strokeWidth="4" strokeLinecap="round"/>
                  {[40,90,140].map((y) => <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="currentColor" opacity=".08" />)}
                </svg>
              </div>
              <div className="rounded-xl border p-5" style={{ borderColor: T.border, background: T.bg }}>
                <div className="text-xs font-medium">Channel mix</div>
                <div className="mx-auto mt-6 h-36 w-36 rounded-full p-5" style={{ background: "conic-gradient(#0D5A8C 0 44%, #68A63C 44% 68%, rgba(13,90,140,.28) 68% 84%, rgba(13,90,140,.1) 84%)" }}><div className="flex h-full w-full items-center justify-center rounded-full text-center" style={{ background: T.bg }}><span className="text-xs" style={{ color: T.muted }}>Digital<br/><strong style={{ color: T.text }}>68%</strong></span></div></div>
                <div className="mt-5 space-y-2 text-[10px]" style={{ color: T.faint }}><div className="flex justify-between"><span>Mobile</span><span>44%</span></div><div className="flex justify-between"><span>Internet</span><span>24%</span></div><div className="flex justify-between"><span>Other</span><span>32%</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
