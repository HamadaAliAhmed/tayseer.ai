import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Building2, Landmark, Network, ServerCog, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Banking & AI Solutions",
  description:
    "Explore Tayseer Innovations solutions across core banking, agentic AI, digital banking, managed services, banking systems and software management.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    title: "Core Banking",
    description: "Payments, remittance, consumer banking, treasury, financial management and operational banking capabilities.",
    href: "/solutions/core-banking",
    icon: Landmark,
    index: "01",
  },
  {
    title: "Fahim AI",
    description: "Agentic AI for customer interaction, intelligent onboarding, workflow execution and enterprise automation.",
    href: "/solutions/fahim-ai",
    icon: Bot,
    index: "02",
  },
  {
    title: "MBuke",
    description: "White-label digital banking for onboarding, payments, transfers, agent networks and offline-capable services.",
    href: "/solutions/mbuke",
    icon: Network,
    index: "03",
  },
  {
    title: "Managed Services",
    description: "Specialist operational support designed around platform reliability, governance and continuous service.",
    href: "/solutions/managed-services",
    icon: ServerCog,
    index: "04",
  },
  {
    title: "Banking Systems",
    description: "Banking technology and systems integration that connect physical and digital financial operations.",
    href: "/solutions/banking-systems",
    icon: Building2,
    index: "05",
  },
  {
    title: "Software Management Systems",
    description: "Business software and management systems tailored to operational requirements and transformation programs.",
    href: "/solutions/software-management-systems",
    icon: Workflow,
    index: "06",
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <section className="brand-grid border-b border-[var(--brand-border)] px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <p className="brand-eyebrow">Platforms & services</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h1 className="max-w-5xl text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Technology for a transformed financial future.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[var(--brand-muted)]">
              Tayseer combines banking platforms, AI, digital channels, systems integration and specialist services into a connected technology portfolio for financial institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          {solutions.map(({ title, description, href, icon: Icon, index }) => (
            <Link
              key={title}
              href={href}
              className="group grid gap-6 border-b border-[var(--brand-border)] py-9 transition-colors hover:bg-[linear-gradient(90deg,transparent,var(--brand-highlight),transparent)] md:grid-cols-[90px_.7fr_1.3fr_40px] md:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-faint)]">{index}</span>
                <Icon aria-hidden="true" size={21} className="text-[var(--brand-signal)]" />
              </div>
              <h2 className="text-xl font-bold uppercase">{title}</h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--brand-muted)]">{description}</p>
              <ArrowRight aria-hidden="true" className="text-[var(--brand-signal)] transition-transform group-hover:translate-x-2" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
