import Link from "next/link";
import { ArrowRight, Bot, Landmark, Network, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    title: "Core Banking",
    description: "Modernize banking operations with resilient, integration-ready core capabilities.",
    href: "/solutions/core-banking",
    icon: Landmark,
  },
  {
    title: "Digital Banking",
    description: "Deliver connected customer experiences across mobile, branch and digital channels.",
    href: "/solutions/mbuke",
    icon: Network,
  },
  {
    title: "Fahim AI",
    description: "Apply practical AI to service, operations, decision support and enterprise workflows.",
    href: "/solutions/fahim-ai",
    icon: Bot,
  },
  {
    title: "Managed Services",
    description: "Operate critical platforms with stronger reliability, governance and specialist support.",
    href: "/solutions/managed-services",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative isolate min-h-screen overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 md:px-12">
        <div className="mx-auto grid min-h-[75vh] max-w-[1400px] items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-6 font-[var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[#5cf0ce]">
              Banking technology, engineered for change
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Technology that moves banking forward.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              From core banking and digital channels to payments, remittance and intelligent AI, Tayseer helps financial institutions modernize without compromising control.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#5cf0ce] px-6 py-3 font-semibold text-[#07110f] transition-transform hover:-translate-y-0.5"
              >
                Explore our platforms <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                href="/connect"
                className="inline-flex min-h-12 items-center rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/5"
              >
                Talk to a banking technology expert
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/30 md:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.24em] text-[#5cf0ce]">Tayseer ecosystem</p>
                <p className="mt-2 text-sm text-white/50">One technology layer across modern banking.</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-[#5cf0ce] shadow-[0_0_24px_rgba(92,240,206,.7)]" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              {["Customer channels", "Payments & remittance", "Tayseer orchestration", "Core banking", "AI & operations"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <span className="font-[var(--font-mono)] text-[11px] text-[#5cf0ce]">0{index + 1}</span>
                  <span className="font-medium">{item}</span>
                  <span className="ml-auto h-px w-10 bg-gradient-to-r from-[#5cf0ce] to-transparent" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#5cf0ce]">One banking ecosystem</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Every layer of modern banking, connected.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/60">
              Phase 1 establishes a server-rendered Next.js foundation. The product storytelling and richer interaction system will be expanded in the design phases that follow.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ title, description, href, icon: Icon }) => (
              <Link key={title} href={href} className="group bg-[#0c0f13] p-7 transition-colors hover:bg-[#11161a]">
                <Icon aria-hidden="true" className="text-[#5cf0ce]" size={22} />
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-white/55">{description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#5cf0ce]">
                  Explore <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
