import type { Metadata } from "next";
import {
  CreditCard,
  Landmark,
  LineChart,
  ScrollText,
  Send,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { ProductHero } from "@/components/marketing/ProductHero";

export const metadata: Metadata = {
  title: "Core Banking",
  description:
    "Tayseer core banking solutions for payments, remittance, consumer banking, security, compliance, CRM, BI, treasury and financial management.",
  alternates: { canonical: "/solutions/core-banking" },
};

const capabilities = [
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Streamline payment processing across cards, mobile wallets and application-based payments with secure, efficient transaction flows.",
  },
  {
    icon: Send,
    title: "Remittance Solutions",
    description:
      "Enable fast, secure and cost-effective domestic and international money transfers through an accessible remittance experience.",
  },
  {
    icon: Users,
    title: "Consumer Banking",
    description:
      "Deliver connected account access, online banking features and digital experiences that keep customers engaged.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Protect financial operations with security controls designed to support evolving regulatory and operational requirements.",
  },
  {
    icon: LineChart,
    title: "CRM & BI Systems",
    description:
      "Turn customer and operational data into actionable insight for smarter decisions, personalization and relationship management.",
  },
  {
    icon: ScrollText,
    title: "Audit & Legislation",
    description:
      "Support regulatory alignment, auditability and financial integrity with structured compliance capabilities.",
  },
  {
    icon: Wallet,
    title: "Financial Management",
    description:
      "Gain clearer visibility into cash flow, profitability, risk and financial performance to support better resource allocation.",
  },
  {
    icon: Landmark,
    title: "Funds & Treasury",
    description:
      "Manage liquidity, forecasting, investment activity and foreign exchange with tools designed for stronger financial control.",
  },
];

export default function CoreBankingPage() {
  return (
    <main id="main-content">
      <ProductHero
        index="01.1"
        title="Core Banking"
        tagline="Streamline your core banking. Unlock innovation."
        lead="Our core banking capabilities handle mission-critical financial operations so institutions can focus more energy on customer experience, growth and modernization."
      />

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 border-b border-[var(--brand-border)] pb-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="brand-eyebrow">Core capabilities</p>
              <h2 className="mt-5 text-4xl font-bold uppercase leading-tight tracking-[-0.035em] md:text-5xl">Built around the realities of modern banking.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--brand-muted)] lg:pt-8">
              Tayseer brings together the operational, customer, financial and governance capabilities institutions need to evolve their banking platforms without losing control of the core.
            </p>
          </div>

          <div className="mt-4">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="grid gap-6 border-b border-[var(--brand-border)] py-8 md:grid-cols-[80px_.65fr_1.35fr] md:items-start">
                <div className="flex items-center gap-3">
                  <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-faint)]">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" size={21} className="text-[var(--brand-signal)]" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[var(--brand-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
