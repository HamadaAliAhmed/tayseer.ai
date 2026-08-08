import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Network } from "lucide-react";
import { LineReveal } from "@/site/motion";
import { T } from "@/site/theme";

const CAPABILITIES = [
  "Core Banking",
  "Digital Banking",
  "Fahim AI",
  "Payments",
  "Integration",
  "Managed Services",
];

export default function CinematicHero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden border-b px-6 pb-20 pt-32 md:px-12" style={{ borderColor: T.border }} aria-labelledby="phase7-hero-title">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 78% 30%, rgba(13,90,140,.15), transparent 30%), linear-gradient(180deg, rgba(13,90,140,.04), transparent 58%)" }} />
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-45" style={{ "--hl": T.hl, backgroundSize: "8.33% 6rem" }} />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="mb-7 flex items-center gap-3 font-jbmono text-[11px] uppercase tracking-[0.28em]" style={{ color: T.signal }}>
            <span className="h-1.5 w-1.5" style={{ background: T.green }} /> Enterprise banking technology
          </div>

          <h1 id="phase7-hero-title" className="max-w-[760px] text-[15vw] font-extrabold uppercase leading-[.84] tracking-[-.045em] sm:text-7xl lg:text-[6.2rem] xl:text-[6.8rem]">
            <LineReveal lines={["Banking.", <span key="reinvented" style={{ color: T.signal }}>Reinvented.</span>]} />
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: T.muted }}>
            AI, digital banking and enterprise technology working together to help financial institutions modernize with confidence.
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
            <span className="inline-flex items-center gap-2"><Sparkles size={14} aria-hidden="true" style={{ color: T.signal }} /> AI-enabled transformation</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] lg:col-span-5 lg:max-w-[450px]">
          <div className="absolute -inset-8 rounded-full blur-3xl" style={{ background: "rgba(13,90,140,.10)" }} />
          <div className="relative overflow-hidden rounded-2xl border shadow-xl" style={{ borderColor: T.border, background: T.panel }}>
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                src="/tayseer-banking-hero.svg"
                alt="Tayseer banking technology ecosystem connecting digital banking, core banking, payments, AI, integration and managed services"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(180deg, transparent, rgba(7,21,42,.9))" }} />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border p-4 backdrop-blur-md" style={{ borderColor: "rgba(255,255,255,.16)", background: "rgba(7,21,42,.72)" }}>
                <div className="flex items-center gap-2 font-jbmono text-[10px] uppercase tracking-[0.2em] text-white/80">
                  <Network size={13} aria-hidden="true" /> Tayseer banking ecosystem
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CAPABILITIES.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
