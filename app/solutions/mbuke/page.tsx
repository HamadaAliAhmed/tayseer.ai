import type { Metadata } from "next";
import {
  ArrowLeftRight,
  Building2,
  CheckCircle2,
  CreditCard,
  Landmark,
  Layers,
  Palette,
  Plug,
  Puzzle,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { ProductHero } from "@/components/marketing/ProductHero";

export const metadata: Metadata = {
  title: "MBuke Digital Banking",
  description:
    "MBuke is Tayseer's white-label digital banking platform for onboarding, transfers, payments, analytics, agent banking and offline-capable financial services.",
  alternates: { canonical: "/solutions/mbuke" },
};

const advantages = [
  { icon: Layers, title: "Unified platform", text: "Onboarding, payments, transfers, analytics and agent support in one connected ecosystem." },
  { icon: Puzzle, title: "Modular & scalable", text: "Deploy the capabilities you need now and expand the platform as requirements grow." },
  { icon: Plug, title: "Seamless integration", text: "Connect with existing banking systems and third-party services through an integration-led architecture." },
  { icon: ShieldCheck, title: "Enterprise-grade foundations", text: "Built around microservices, observability, real-time events and security-conscious operating patterns." },
  { icon: Palette, title: "White-label ready", text: "Customize the customer experience around your institution's brand, market and operating model." },
];

const audiences = [
  { icon: Landmark, label: "Banks" },
  { icon: ArrowLeftRight, label: "Exchange houses" },
  { icon: Building2, label: "Governments" },
  { icon: Radio, label: "Telecom" },
  { icon: CreditCard, label: "Payment gateways" },
];

const capabilities = [
  "Digital onboarding",
  "P2P transfers",
  "Bill payments & e-commerce",
  "Remittance support",
  "Agent network management",
  "Real-time analytics",
  "Multi-currency support",
  "USSD / offline capability",
];

export default function MBukePage() {
  return (
    <main id="main-content">
      <ProductHero
        index="01.3"
        title="MBuke"
        tagline="A white-label digital banking platform built for accessibility and scale."
        lead="MBuke brings onboarding, payments, transfers, analytics and agent banking into a unified digital ecosystem that can integrate with existing banking infrastructure and extend access into low-connectivity environments."
      />

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="brand-eyebrow">Platform overview</p>
              <h2 className="mt-5 max-w-xl text-4xl font-bold uppercase leading-tight tracking-[-0.035em] md:text-5xl">Digital banking designed around connection.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--brand-muted)]">
                MBuke gives financial institutions a flexible foundation for digital customer journeys, agent banking and integrated financial services without forcing every market into the same operating model.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="flex gap-3 border border-[var(--brand-border)] bg-[var(--brand-panel)] p-4 text-sm text-[var(--brand-text)]">
                    <CheckCircle2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-[var(--brand-signal)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="brand-eyebrow">Who MBuke serves</p>
          <div className="mt-9 grid grid-cols-2 gap-px bg-[var(--brand-border)] md:grid-cols-5">
            {audiences.map(({ icon: Icon, label }) => (
              <div key={label} className="flex min-h-36 flex-col justify-between bg-[var(--brand-panel-2)] p-5">
                <Icon aria-hidden="true" size={22} className="text-[var(--brand-signal)]" />
                <p className="text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b border-[var(--brand-border)] pb-10">
            <p className="brand-eyebrow">The MBuke advantage</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold uppercase tracking-[-0.035em] md:text-5xl">Flexible enough for the market. Structured enough for the enterprise.</h2>
          </div>

          <div>
            {advantages.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="grid gap-5 border-b border-[var(--brand-border)] py-8 md:grid-cols-[90px_.65fr_1.35fr] md:items-center">
                <div className="flex items-center gap-3">
                  <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-faint)]">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" size={20} className="text-[var(--brand-signal)]" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[var(--brand-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
