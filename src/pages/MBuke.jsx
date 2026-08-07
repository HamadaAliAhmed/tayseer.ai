import { Reveal } from "@/site/motion";
import { InnerHero, SectionLabel, CountUp } from "@/site/ui";
import { ContactSection } from "@/site/ContactSection";
import { T } from "@/site/theme";
import { Landmark, ArrowLeftRight, Building2, Radio, CreditCard, CheckCircle2, Layers, Puzzle, Plug, ShieldCheck, Palette } from "lucide-react";

// ALL copy SOURCED from mbuke.html. Case-study numbers from data-count (real).
const WHAT = ["Onboarding", "Transfers & payments", "Advanced analytics & insights", "Agent banking support", "USSD/Offline capability"];
const USERS = [
  { icon: Landmark, h: "Banks" }, { icon: ArrowLeftRight, h: "Exchange Houses" }, { icon: Building2, h: "Governments" }, { icon: Radio, h: "Telecom" }, { icon: CreditCard, h: "Payment Gateways" },
];
const ADVANTAGE = [
  { icon: Layers, h: "Unified Platform", p: "Onboarding, payments, transfers, analytics, all in one." },
  { icon: Puzzle, h: "Modular & Scalable", p: "Deploy what you need now; add more as you grow." },
  { icon: Plug, h: "Seamless Integration", p: "Works with existing systems and third-party services." },
  { icon: ShieldCheck, h: "Enterprise-Grade Security", p: "Microservices, real-time events, observability, and strong security controls." },
  { icon: Palette, h: "White-Label Ready", p: "Fully customizable to match your brand and business requirements." },
];
const CAPABILITIES = [
  { h: "User Features", items: ["Onboarding", "P2P Transfers", "Bill Payments & E-Commerce", "Remittance Support", "User Dashboards", "USSD/Offline Functionality"] },
  { h: "Operator Features", items: ["Operator Dashboard", "Transaction Monitoring", "Agent Network Management", "Real-Time Analytics", "Compliance & Reporting Tools"] },
  { h: "Technical Features", items: ["Microservices Architecture", "API-First Design", "Multi-Currency Support", "Soft POS Integration"] },
];
const STATS = [
  { to: 500, prefix: "", suffix: "K+", label: "Users Onboarded in First Year" },
  { to: 60, suffix: "%", label: "Cost Reduction vs. Physical Branches" },
  { to: 900, suffix: "+", label: "Agents Activated in 12 Months" },
  { to: 90, suffix: "%", label: "Retention Rate Driven by Ease of Access" },
];

export default function MBuke() {
  return (
    <div style={{ background: T.bg, color: T.text }} className="font-archivo">
      <InnerHero index="01.3" crumbs={["Home", "Solutions", "MBuke"]} title="MBuke" tagline="MBuke: White Label Mobile Banking Platform Built for Your Business" />

      {/* PLATFORM OVERVIEW */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><Reveal><SectionLabel>Platform Overview</SectionLabel><h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl">What is MBuke?</h2></Reveal></div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}><p className="text-lg leading-relaxed" style={{ color: T.muted }}>MBuke is an AI-powered, white-label mobile finance platform designed to simplify digital banking for institutions. It provides a unified ecosystem combining:</p></Reveal>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHAT.map((w, i) => (
                <Reveal key={w} delay={i * 0.04}>
                  <div className="flex items-center gap-3 rounded-md border p-4 text-sm" style={{ borderColor: T.border, background: T.panel }}>
                    <CheckCircle2 size={16} style={{ color: T.signal }} />{w}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO USES */}
      <section className="border-t px-6 py-20 md:px-12" style={{ borderColor: T.border, background: T.panel }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>Who Uses MBuke?</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {USERS.map((u, i) => (
              <Reveal key={u.h} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border p-6 text-center" style={{ borderColor: T.border, background: T.bg }}>
                  <u.icon size={26} style={{ color: T.signal }} /><span className="text-sm font-medium">{u.h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>The MBuke Advantage</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGE.map((a, i) => (
              <Reveal key={a.h} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-lg border p-7" style={{ borderColor: T.border, background: T.panel }}>
                  <a.icon size={22} style={{ color: T.signal }} /><h3 className="mt-5 text-lg font-semibold">{a.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{a.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="border-t px-6 py-24 md:px-12" style={{ borderColor: T.border, background: T.panel }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>Core Capabilities</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.h} delay={i * 0.08}>
                <div className="h-full border-t pt-6" style={{ borderColor: "rgba(13,90,140,0.4)" }}>
                  <h3 className="text-lg font-semibold">{c.h}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {c.items.map((it) => (<li key={it} className="flex gap-3 text-sm" style={{ color: T.muted }}><CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: T.signal }} />{it}</li>))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>Case Study</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl">MBuke in Action: Yemen Banking Success</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: T.muted }}>A leading bank needed to reach rural, low-connectivity communities. They launched MBuke’s white-label wallet with USSD/SMS offline flows and a three-tier agent network.</p></Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4" style={{ background: T.border }}>
            {STATS.map((s, i) => (
              <div key={s.label} data-testid={`mbuke-stat-${i}`} className="p-8" style={{ background: T.panel }}>
                <div className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: T.signal }}><CountUp to={s.to} prefix={s.prefix || ""} suffix={s.suffix} /></div>
                <div className="mt-3 font-jbmono text-[11px] uppercase tracking-widest" style={{ color: T.muted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
