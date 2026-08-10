import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { T } from "@/site/theme";

const PROOF = [
  ["15+", "Countries"],
  ["100+", "Satisfied clients"],
  ["100+", "Skilled experts"],
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1743696398209-6b693d480862?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600";

export default function CinematicHero() {
  return (
    <section className="relative isolate overflow-hidden border-b px-6 pb-14 pt-24 md:min-h-[92vh] md:px-12 md:pb-20 md:pt-32" style={{ borderColor: T.border }} aria-labelledby="phase7-hero-title">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 78% 30%, rgba(13,90,140,.15), transparent 30%), linear-gradient(180deg, rgba(13,90,140,.04), transparent 58%)" }} />
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-45" style={{ "--hl": T.hl, backgroundSize: "8.33% 6rem" }} />

      <div className="relative mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-12 lg:items-center xl:gap-10">
        <div className="lg:col-span-6">
          <div className="mb-5 flex items-center gap-3 font-jbmono text-xs uppercase tracking-[0.24em] md:mb-7" style={{ color: T.signal }}>
            <span className="h-1.5 w-1.5" style={{ background: T.green }} /> Enterprise banking technology
          </div>

          <h1 id="phase7-hero-title" className="max-w-[690px] text-[15vw] font-extrabold leading-[.84] tracking-[-.045em] sm:text-7xl lg:text-[5.8rem] xl:text-[6.4rem]">
            <span className="block overflow-hidden"><span className="motion-line-reveal block" style={{ animationDelay: ".15s" }}>Banking.</span></span>
            <span className="block overflow-hidden"><span className="motion-line-reveal block" style={{ color: T.signal, animationDelay: ".26s" }}>Reinvented.</span></span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg md:mt-7" style={{ color: T.muted }}>
            AI, digital banking and enterprise technology working together to help financial institutions modernize with confidence.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
            <Link href="/connect" className="group inline-flex min-h-12 items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide" style={{ background: T.signal, color: T.bg }}>
              Schedule consultation <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/solutions" className="group inline-flex min-h-12 items-center gap-2 border px-7 py-3.5 text-sm font-semibold tracking-wide" style={{ borderColor: T.border }}>
              Explore solutions <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3 border-t pt-5 md:mt-8" style={{ borderColor: T.border }} aria-label="Published Tayseer company figures">
            {PROOF.map(([value, label]) => <div key={label}><div className="text-lg font-semibold sm:text-xl">{value}</div><div className="mt-1 text-xs leading-tight" style={{ color: T.muted }}>{label}</div></div>)}
          </div>
        </div>

        <div className="relative mx-auto w-full lg:col-span-6">
          <div className="absolute inset-6 rounded-full blur-3xl" style={{ background: "rgba(13,90,140,.18)" }} />
          <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[30px] border" style={{ borderColor: T.border, background: T.panel }}>
            <img
              src={HERO_IMAGE}
              alt="Real contactless digital payment experience representing Tayseer digital banking and payment technology"
              width="720"
              height="540"
              className="aspect-[4/3] h-auto w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(4,17,29,.64) 0%, rgba(4,17,29,.12) 46%, rgba(13,90,140,.18) 100%)" }} />
            <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.12) 1px, transparent 1px)", backgroundSize: "58px 58px" }} />
            <div className="absolute left-5 top-5 rounded-full border px-3 py-2 font-jbmono text-[10px] uppercase tracking-[.18em] backdrop-blur-md" style={{ borderColor: "rgba(255,255,255,.25)", background: "rgba(4,17,29,.42)", color: "white" }}>Real banking experience · Tayseer intelligence layer</div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Digital banking", "Payments", "AI", "Integration"].map((label) => <div key={label} className="rounded-xl border px-3 py-2 text-[10px] font-medium backdrop-blur-md" style={{ borderColor: "rgba(255,255,255,.2)", background: "rgba(4,17,29,.5)", color: "white" }}>{label}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
