import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CloudCog,
  CreditCard,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wrench,
} from "lucide-react";
import { LineReveal } from "@/site/motion";
import { T } from "@/site/theme";

const ECOSYSTEM = [
  { label: "Core Banking", icon: Landmark, x: 50, y: 9 },
  { label: "Digital Banking", icon: Smartphone, x: 82, y: 27 },
  { label: "Payments", icon: CreditCard, x: 87, y: 63 },
  { label: "Managed Services", icon: Wrench, x: 68, y: 88 },
  { label: "Banking Systems", icon: Building2, x: 31, y: 88 },
  { label: "Integration", icon: Network, x: 12, y: 63 },
  { label: "Fahim AI", icon: BrainCircuit, x: 17, y: 27 },
];

export default function CinematicHero() {
  return (
    <section
      className="relative isolate min-h-[92vh] overflow-hidden border-b px-6 pb-20 pt-32 md:px-12"
      style={{ borderColor: T.border }}
      aria-labelledby="phase7-hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 32%, rgba(13,90,140,.18), transparent 34%), linear-gradient(180deg, rgba(13,90,140,.05), transparent 58%)",
        }}
      />
      <div
        className="hairline-grid pointer-events-none absolute inset-0 opacity-50"
        style={{ "--hl": T.hl, backgroundSize: "8.33% 6rem" }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div
            className="mb-7 flex items-center gap-3 font-jbmono text-[11px] uppercase tracking-[0.28em]"
            style={{ color: T.signal }}
          >
            <span className="h-1.5 w-1.5" style={{ background: T.green }} />
            Enterprise banking technology
          </div>

          <h1
            id="phase7-hero-title"
            className="text-[15vw] font-extrabold uppercase leading-[.84] tracking-[-.045em] sm:text-7xl lg:text-[6.4rem]"
          >
            <LineReveal
              lines={[
                "Banking.",
                <span key="reinvented" style={{ color: T.signal }}>
                  Reinvented.
                </span>,
              ]}
            />
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: T.muted }}>
            AI-powered banking platforms, digital channels and enterprise technology built to help financial institutions modernize with confidence.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/connect"
              className="group inline-flex min-h-12 items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
              style={{ background: T.signal, color: T.bg }}
            >
              Schedule consultation
              <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex min-h-12 items-center gap-2 border px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
              style={{ borderColor: T.border }}
            >
              Explore solutions
              <ArrowUpRight
                aria-hidden="true"
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs" style={{ color: T.faint }}>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} aria-hidden="true" style={{ color: T.signal }} />
              Banking-critical delivery
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles size={14} aria-hidden="true" style={{ color: T.signal }} />
              AI-enabled workflows
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div
            className="absolute -inset-10 rounded-full blur-3xl"
            style={{ background: "rgba(13,90,140,.08)" }}
          />

          <div
            className="relative overflow-hidden rounded-[2rem] border p-5 shadow-2xl sm:p-7"
            style={{ borderColor: T.border, background: T.panel }}
          >
            <div className="flex items-center justify-between border-b pb-5" style={{ borderColor: T.border }}>
              <div>
                <div className="font-jbmono text-[10px] uppercase tracking-[0.24em]" style={{ color: T.signal }}>
                  Tayseer Innovations
                </div>
                <div className="mt-2 text-lg font-semibold">Enterprise Technology Ecosystem</div>
              </div>
              <div
                className="hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] sm:inline-flex"
                style={{ borderColor: T.border, color: T.green }}
              >
                <CloudCog size={13} aria-hidden="true" /> Connected
              </div>
            </div>

            <div className="relative mt-5 aspect-[1.2/1] min-h-[390px] overflow-hidden rounded-2xl border" style={{ borderColor: T.border, background: T.bg }}>
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(13,90,140,.13), transparent 29%), linear-gradient(rgba(13,90,140,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,90,140,.04) 1px, transparent 1px)",
                  backgroundSize: "auto, 40px 40px, 40px 40px",
                }}
              />

              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" opacity=".08" strokeWidth=".4" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" opacity=".05" strokeWidth=".35" />
                {ECOSYSTEM.map((item) => (
                  <line
                    key={item.label}
                    x1="50"
                    y1="50"
                    x2={item.x}
                    y2={item.y}
                    stroke="#0D5A8C"
                    strokeWidth=".42"
                    strokeDasharray="1.7 1.8"
                    opacity=".5"
                  />
                ))}
              </svg>

              <div
                className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center shadow-xl sm:h-36 sm:w-36"
                style={{ borderColor: "rgba(13,90,140,.35)", background: T.panel }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: "rgba(13,90,140,.12)", color: T.signal }}
                >
                  <Sparkles size={21} aria-hidden="true" />
                </div>
                <div className="mt-3 text-sm font-semibold">Tayseer</div>
                <div className="mt-1 font-jbmono text-[8px] uppercase tracking-[0.2em]" style={{ color: T.faint }}>
                  Banking Technology
                </div>
              </div>

              {ECOSYSTEM.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border px-3 py-2 shadow-sm backdrop-blur-sm"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      borderColor: T.border,
                      background: "rgba(247,246,242,.93)",
                    }}
                  >
                    <Icon size={15} aria-hidden="true" style={{ color: T.signal }} />
                    <span className="whitespace-nowrap text-[9px] font-medium sm:text-[10px]">{item.label}</span>
                  </div>
                );
              })}

              <div
                className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 rounded-xl border p-3 backdrop-blur-sm"
                style={{ borderColor: T.border, background: "rgba(247,246,242,.9)" }}
              >
                {["Platforms", "Intelligence", "Operations"].map((label) => (
                  <div key={label} className="text-center">
                    <div className="mx-auto h-1 w-8 rounded-full" style={{ background: label === "Intelligence" ? T.green : T.signal }} />
                    <div className="mt-2 font-jbmono text-[8px] uppercase tracking-[0.16em]" style={{ color: T.faint }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px]" style={{ color: T.faint }}>
              <span>One technology partner across the banking transformation lifecycle</span>
              <span className="font-jbmono uppercase tracking-[0.18em]" style={{ color: T.signal }}>
                Digital · AI · Core · Operations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
