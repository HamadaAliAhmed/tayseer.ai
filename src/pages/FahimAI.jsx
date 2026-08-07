import { CheckCircle2, XCircle, Target, ScanFace, MessagesSquare, Gauge, Plug, Boxes } from "lucide-react";
import { Reveal } from "@/site/motion";
import { InnerHero, SectionLabel, CountUp } from "@/site/ui";
import { ContactSection } from "@/site/ContactSection";
import { T } from "@/site/theme";

// ALL copy SOURCED from fahim-ai.html.
const HOW_FAHIM = [
  { icon: Target, h: "Goal-Oriented Execution", p: "Contemplates instructions intelligently, then executes end-to-end business operations with accuracy and speed." },
  { icon: ScanFace, h: "Intelligent Onboarding/KYC", p: "Uses its ‘Who You Are’ functions to conduct onboarding processes, including analysis of documents and verification of authenticity, ensuring compliance and security." },
  { icon: MessagesSquare, h: "Tailored Interactive Experience", p: "Delivers a smart interactive experience and enhanced customer experience through a simple UI and human-like interaction, making it a tailor-made solution for various business localization needs." },
  { icon: Gauge, h: "Resource-Efficient Scalability", p: "Operates as a light-weighted, resource-optimized solution, ensuring both on-demand scalability and faster execution of tasks." },
  { icon: Plug, h: "Flexible Integration", p: "Connects seamlessly with your existing systems and business modules, without any major disruption." },
  { icon: Boxes, h: "Flexible Deployment", p: "Deploy on-premise or containerized based on your security and infrastructure requirements." },
];

const JOURNEY = [
  { h: "Customer Onboarding Capabilities", items: [
    "Seamless account setup process, ensuring customers are onboarded without friction or delay.",
    "Intelligent document scanning and verification, completing KYC quickly while meeting compliance standards.",
    "Simple, personalized onboarding journey with smart guidance through every step, keeping customers engaged throughout the process.",
  ] },
  { h: "Voice and Chat Enabled Navigation & Task Execution", items: [
    "Customers can choose voice and chat channels, enhancing engagement and satisfaction.",
    "Fast task resolution without hold times or transfers, streamlining customer experience and operational efficiency.",
    "Native support in natural Arabic (in different dialects) and English, eliminating communication barriers and expanding accessibility for all customers.",
  ] },
  { h: "Intelligent Escalation with Full Context", items: [
    "Capacity to resolve routine and complex inquiries autonomously.",
    "Special cases escalated to human specialists with complete documentation.",
    "Human specialists receive full interaction history and recommended next steps.",
  ] },
];

const OLD_WAY = [
  "40% of calls go unanswered",
  "Long wait times frustrate customers",
  "Low customer satisfaction rate",
  "High operational costs",
  "High customer churn",
];

// NEEDS VERIFICATION — live site contradiction: this prose says "94%" satisfaction
// while the "Key Performance Areas" counters below say "95%". Carried verbatim from
// source; owner to confirm the correct figure before publishing.
const FAHIM_WAY = [
  "99% response rate, 24/7 availability",
  "Less than 30 seconds response time with zero queues",
  "94% Customer Satisfaction Rate",
  "Improve Business Efficiency by 300%",
  "Improve customer retention by 20% – 30%",
];

// SOURCED — data-count values (real, from source attributes).
const KPIS = [
  { to: 99, suffix: "%", label: "Response Rate" },
  { to: 30, prefix: "<", suffix: "", label: "Secs Response Time" },
  { to: 95, suffix: "%", label: "Customer Satisfaction" }, // NEEDS VERIFICATION vs 94% in prose above
  { to: 300, suffix: "%", label: "Improvement in Efficiency" },
];

export default function FahimAI() {
  return (
    <div style={{ background: T.bg, color: T.text }} className="font-archivo">
      <InnerHero
        index="01.2"
        crumbs={["Home", "Solutions", "Fahim AI"]}
        title="Fahim AI"
        tagline="Fahim: The Agentic AI Solution to Transform Your Customer Experience"
        lead="Fahim is an Agentic AI platform engineered to manage and optimize end-to-end business operations designed for achieving defined rules and providing an enhanced customer experience. It offers a tailor-made solution customized for specific business needs and localization, deployed as a light-weighted, resource-optimized system with both on-demand scalability and the flexibility of on-premise, containerized deployment, which continuously optimizes based on outcomes."
      />

      {/* HOW FAHIM WORKS */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>How Fahim Works</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOW_FAHIM.map((f, i) => (
              <Reveal key={f.h} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-lg border p-7" style={{ borderColor: T.border, background: T.panel }}>
                  <f.icon size={22} style={{ color: T.signal }} />
                  <h3 className="mt-5 text-lg font-semibold">{f.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: T.muted }}>{f.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* END-TO-END JOURNEY */}
      <section className="border-t px-6 py-24 md:px-12" style={{ borderColor: T.border, background: T.panel }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>End-to-End Journey Management</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.h} delay={i * 0.08}>
                <div className="h-full border-t pt-6" style={{ borderColor: "rgba(92,240,206,0.4)" }}>
                  <h3 className="text-lg font-semibold">{j.h}</h3>
                  <ul className="mt-4 space-y-3">
                    {j.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm leading-relaxed" style={{ color: T.muted }}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: T.signal }} />{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>Business Impact</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border p-8" style={{ borderColor: "rgba(255,90,90,0.25)", background: T.panel }}>
                <h3 className="text-xl font-semibold" style={{ color: "#FF7A7A" }}>The Old Way</h3>
                <ul className="mt-5 space-y-3">
                  {OLD_WAY.map((o) => (
                    <li key={o} className="flex gap-3 text-sm" style={{ color: T.muted }}><XCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#FF7A7A" }} />{o}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-lg border p-8" style={{ borderColor: "rgba(92,240,206,0.4)", background: T.panel }}>
                <h3 className="text-xl font-semibold" style={{ color: T.signal }}>The Fahim Way</h3>
                <ul className="mt-5 space-y-3">
                  {FAHIM_WAY.map((o) => (
                    <li key={o} className="flex gap-3 text-sm" style={{ color: T.text }}><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: T.signal }} />{o}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KEY PERFORMANCE AREAS */}
      <section className="border-t px-6 py-20 md:px-12" style={{ borderColor: T.border, background: T.panel }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal><SectionLabel>Key Performance Areas</SectionLabel></Reveal>
          <Reveal delay={0.05}><p className="max-w-2xl text-lg" style={{ color: T.muted }}>Fahim AI enhances your customer experience while reducing total cost of ownership through faster time to market.</p></Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4" style={{ background: T.border }}>
            {KPIS.map((k, i) => (
              <div key={k.label} data-testid={`kpi-${i}`} className="p-8" style={{ background: T.panel }}>
                <div className="text-5xl font-extrabold tracking-tight sm:text-6xl" style={{ color: T.signal }}><CountUp to={k.to} prefix={k.prefix || ""} suffix={k.suffix} /></div>
                <div className="mt-3 font-jbmono text-[12px] uppercase tracking-widest" style={{ color: T.muted }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
