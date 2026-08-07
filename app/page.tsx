import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Landmark,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const proof = [
  { value: "39+", label: "Satisfied clients" },
  { value: "5+", label: "Countries" },
  { value: "234+", label: "Finished products" },
];

const layers = [
  { id: "01", label: "Customer channels", detail: "Mobile · Branch · Agent · Web" },
  { id: "02", label: "Payments & remittance", detail: "Orchestration · Routing · Settlement" },
  { id: "03", label: "Tayseer technology layer", detail: "Integration · Workflow · Controls" },
  { id: "04", label: "Core banking", detail: "Accounts · Ledger · Operations" },
  { id: "05", label: "AI & intelligence", detail: "Fahim AI · Analytics · Automation" },
];

const solutions = [
  {
    name: "Core Banking",
    headline: "Modern banking infrastructure without losing control.",
    copy: "Integration-ready core capabilities designed for financial institutions modernizing mission-critical operations.",
    href: "/solutions/core-banking",
    icon: Landmark,
    number: "01",
  },
  {
    name: "Fahim AI",
    headline: "Agentic AI built for practical enterprise outcomes.",
    copy: "Apply intelligence to customer service, operations, decision support and governed business workflows.",
    href: "/solutions/fahim-ai",
    icon: Bot,
    number: "02",
  },
  {
    name: "MBuke",
    headline: "A white-label digital banking platform built to connect.",
    copy: "Bring customers and agents into a cohesive digital banking experience designed for accessibility and scale.",
    href: "/solutions/mbuke",
    icon: Network,
    number: "03",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="brand-grid relative isolate min-h-screen overflow-hidden border-b border-[var(--brand-border)] px-6 pb-20 pt-32 md:px-12">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-[var(--brand-signal)] opacity-[0.075] blur-[190px]" />
        <div className="mx-auto grid min-h-[78vh] max-w-[1400px] items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10">
            <p className="brand-eyebrow mb-7">Innovative approach · banking technology</p>
            <h1 className="max-w-5xl text-[14vw] font-extrabold uppercase leading-[0.86] tracking-[-0.045em] sm:text-7xl lg:text-[6.7rem]">
              Engineering the future of <span className="text-[var(--brand-signal)]">banking.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--brand-muted)] md:text-xl">
              From core banking and digital channels to payments and agentic AI, Tayseer helps financial institutions modernize, automate and scale with confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="group inline-flex min-h-12 items-center gap-2 bg-[var(--brand-signal)] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--brand-bg)] transition-transform hover:-translate-y-0.5"
              >
                Explore solutions
                <ArrowRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/connect"
                className="inline-flex min-h-12 items-center border border-[var(--brand-border)] bg-[rgba(14,17,22,.6)] px-7 py-3 text-sm font-semibold text-[var(--brand-text)] transition-colors hover:border-[rgba(92,240,206,.45)] hover:bg-[var(--brand-panel)]"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="border border-[var(--brand-border)] bg-[rgba(14,17,22,.82)] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
              <div className="flex items-start justify-between border-b border-[var(--brand-border)] pb-6">
                <div>
                  <p className="brand-eyebrow">Tayseer ecosystem</p>
                  <p className="mt-2 text-sm text-[var(--brand-faint)]">One connected technology layer across modern banking.</p>
                </div>
                <span className="mt-1 h-2.5 w-2.5 bg-[var(--brand-signal)] shadow-[0_0_22px_rgba(92,240,206,.65)]" aria-hidden="true" />
              </div>

              <div className="mt-6 space-y-2">
                {layers.map((layer, index) => (
                  <div key={layer.id} className="group relative border border-[var(--brand-border)] bg-[rgba(9,11,14,.75)] p-4 transition-colors hover:border-[rgba(92,240,206,.35)]">
                    <div className="flex items-center gap-4">
                      <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-signal)]">{layer.id}</span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--brand-text)]">{layer.label}</p>
                        <p className="mt-1 text-[11px] text-[var(--brand-faint)]">{layer.detail}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1" aria-hidden="true">
                        <span className="h-px w-8 bg-[var(--brand-signal)] opacity-60" />
                        <span className="h-1.5 w-1.5 bg-[var(--brand-signal)]" />
                      </div>
                    </div>
                    {index < layers.length - 1 && <span className="absolute -bottom-3 left-[30px] z-10 h-4 w-px bg-[var(--brand-signal)] opacity-35" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 md:px-12">
        <div className="mx-auto grid max-w-[1400px] divide-y divide-[var(--brand-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proof.map((item) => (
            <div key={item.label} className="py-9 sm:px-8 first:sm:pl-0">
              <p className="text-4xl font-extrabold tracking-[-0.035em] text-[var(--brand-signal)] md:text-5xl">{item.value}</p>
              <p className="mt-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--brand-border)] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="brand-eyebrow">One technology ecosystem</p>
              <h2 className="mt-6 max-w-xl text-4xl font-bold uppercase leading-[0.98] tracking-[-0.035em] md:text-6xl">
                Every layer of modern banking, connected.
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="max-w-2xl text-lg leading-8 text-[var(--brand-muted)]">
                Tayseer brings together banking platforms, digital channels, AI, infrastructure and specialist services so institutions can evolve without stitching together disconnected experiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 text-xs text-[var(--brand-muted)]">
                {["Core Banking", "Digital Banking", "Payments", "Remittance", "Fahim AI", "Managed Services"].map((item) => (
                  <span key={item} className="border border-[var(--brand-border)] bg-[var(--brand-panel)] px-4 py-2.5">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--brand-border)] pb-10 md:flex-row md:items-end">
            <div>
              <p className="brand-eyebrow">Platforms & solutions</p>
              <h2 className="mt-5 text-4xl font-bold uppercase tracking-[-0.035em] md:text-5xl">Built for financial institutions.</h2>
            </div>
            <Link href="/solutions" className="group inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--brand-signal)]">
              View all solutions <ArrowRight aria-hidden="true" size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            {solutions.map(({ name, headline, copy, href, icon: Icon, number }) => (
              <Link
                key={name}
                href={href}
                className="group grid gap-7 border-b border-[var(--brand-border)] py-10 transition-colors hover:bg-[linear-gradient(90deg,transparent,var(--brand-highlight),transparent)] md:grid-cols-[100px_.8fr_1.2fr_48px] md:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="font-[var(--font-mono)] text-[10px] text-[var(--brand-faint)]">{number}</span>
                  <Icon aria-hidden="true" size={22} className="text-[var(--brand-signal)]" />
                </div>
                <div>
                  <p className="text-xl font-bold uppercase">{name}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--brand-muted)]">{copy}</p>
                </div>
                <p className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-3xl">{headline}</p>
                <ArrowRight aria-hidden="true" className="text-[var(--brand-signal)] transition-transform group-hover:translate-x-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-panel)] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="brand-eyebrow">Flexible by design</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold uppercase tracking-[-0.035em] md:text-5xl">Deploy around your operating model.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--brand-muted)]">
              Support controlled on-site environments or scalable cloud deployment while keeping integration, governance and operational resilience at the center.
            </p>
          </div>
          <div className="grid gap-px bg-[var(--brand-border)] sm:grid-cols-2">
            <div className="bg-[var(--brand-panel-2)] p-7">
              <Server aria-hidden="true" className="text-[var(--brand-signal)]" />
              <h3 className="mt-8 text-xl font-semibold">On-site deployment</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">Control, customization and seamless integration for regulated environments.</p>
            </div>
            <div className="bg-[var(--brand-panel-2)] p-7">
              <Cloud aria-hidden="true" className="text-[var(--brand-signal)]" />
              <h3 className="mt-8 text-xl font-semibold">Cloud deployment</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">Agility, scalability and operational efficiency for evolving platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="brand-eyebrow">Enterprise confidence</p>
            <h2 className="mt-5 text-4xl font-bold uppercase leading-tight tracking-[-0.035em]">Technology with trust built in.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
            {[
              { icon: ShieldCheck, title: "Security-minded", text: "Designed for financial environments where resilience and governance matter." },
              { icon: Workflow, title: "Integration-led", text: "Built to work across channels, platforms and existing banking ecosystems." },
              { icon: Network, title: "Regionally grounded", text: "Operating across Saudi Arabia and the UAE with financial-sector expertise." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-[var(--brand-border)] bg-[var(--brand-panel)] p-6">
                <Icon aria-hidden="true" size={21} className="text-[var(--brand-signal)]" />
                <h3 className="mt-8 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
