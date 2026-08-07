import type { Metadata } from "next";
import { Boxes, CheckCircle2, Gauge, MessagesSquare, Plug, ScanFace, Target } from "lucide-react";
import { ProductHero } from "@/components/marketing/ProductHero";

export const metadata: Metadata = {
  title: "Fahim AI",
  description:
    "Fahim is Tayseer's agentic AI platform for intelligent onboarding, customer interaction, task execution, integration and flexible deployment.",
  alternates: { canonical: "/solutions/fahim-ai" },
};

const capabilities = [
  { icon: Target, title: "Goal-oriented execution", text: "Interprets defined instructions and executes end-to-end business operations with accuracy and speed." },
  { icon: ScanFace, title: "Intelligent onboarding & KYC", text: "Supports document analysis, identity verification and onboarding workflows designed around compliance and security." },
  { icon: MessagesSquare, title: "Tailored interaction", text: "Creates a more natural customer experience through guided interfaces, voice and chat interactions tailored to local business needs." },
  { icon: Gauge, title: "Resource-efficient scalability", text: "Designed as a lightweight platform that can scale on demand while keeping execution responsive." },
  { icon: Plug, title: "Flexible integration", text: "Connects with existing enterprise systems and business modules without requiring a wholesale platform replacement." },
  { icon: Boxes, title: "Flexible deployment", text: "Supports on-premise and containerized deployment patterns to align with infrastructure and security requirements." },
];

const outcomes = [
  "24/7 automated response coverage",
  "Faster customer task resolution",
  "Arabic and English interaction support",
  "Context-aware escalation to specialists",
  "Reduced manual operational effort",
  "Continuous optimization around outcomes",
];

export default function FahimAIPage() {
  return (
    <main id="main-content">
      <ProductHero
        index="01.2"
        title="Fahim AI"
        tagline="Agentic AI designed to transform customer and operational experiences."
        lead="Fahim manages defined business workflows, customer interactions and operational tasks through a lightweight platform that can integrate with existing systems and deploy around enterprise security requirements."
      />

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="brand-eyebrow">How Fahim works</p>
              <h2 className="mt-5 max-w-xl text-4xl font-bold uppercase leading-tight tracking-[-0.035em] md:text-5xl">Intelligence designed around execution.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--brand-muted)] lg:pt-8">
              The value of AI is not another chat surface. Fahim is positioned around completing real business workflows, working with existing systems and escalating with context when human intervention is needed.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[var(--brand-border)] md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="bg-[var(--brand-panel)] p-7">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" size={21} className="text-[var(--brand-signal)]" />
                  <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-faint)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-9 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="brand-eyebrow">Business impact</p>
            <h2 className="mt-5 text-4xl font-bold uppercase tracking-[-0.035em] md:text-5xl">A better operating model for service.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--brand-muted)]">
              Fahim is designed to help institutions respond faster, reduce repetitive work and provide customers with more consistent access to service.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex gap-3 border border-[var(--brand-border)] bg-[var(--brand-panel-2)] p-5 text-sm leading-6 text-[var(--brand-text)]">
                <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-[var(--brand-signal)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
