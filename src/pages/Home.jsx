import Link from "next/link";
import { ArrowRight, Cloud, Server } from "lucide-react";
import { Reveal } from "@/site/motion";
import { T } from "@/site/theme";
import EnterpriseHero from "@/site/phase6/EnterpriseHero";
import ChallengeSolution from "@/site/phase6/ChallengeSolution";
import PremiumSolutions from "@/site/phase6/PremiumSolutions";
import FahimShowcase from "@/site/phase6/FahimShowcase";
import BankingEcosystem from "@/site/phase6/BankingEcosystem";
import CredibilityMetrics from "@/site/phase6/CredibilityMetrics";
import ExecutiveTestimonials from "@/site/phase6/ExecutiveTestimonials";
import LatestInsights from "@/site/phase6/LatestInsights";
import FinalEnterpriseCTA from "@/site/phase6/FinalEnterpriseCTA";

const DEPLOYMENT = [
  {
    title: "On-Site Deployment",
    copy: "A traditional approach for institutions that prioritize control, customization and close integration with their technology environment.",
    icon: Server,
  },
  {
    title: "Cloud Deployment",
    copy: "Designed for agility, scalability, cost effectiveness and greater operational flexibility as technology needs evolve.",
    icon: Cloud,
  },
];

function CompanyBridge() {
  return (
    <section className="relative border-t px-6 py-24 md:px-12" style={{ borderColor: T.border }} aria-labelledby="company-bridge-heading">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="font-jbmono text-[11px] uppercase tracking-[0.26em]" style={{ color: T.signal }}>Tayseer Innovations</div>
          <h2 id="company-bridge-heading" className="mt-5 text-4xl font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-5xl">
            Born from innovation. Built around long-term banking transformation.
          </h2>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-7">
          <p className="max-w-3xl text-lg leading-relaxed" style={{ color: T.muted }}>
            Established in 2016, Tayseer Innovations focuses on financial technology, digital banking and enterprise software across the region. The company works as a technology partner—combining products, engineering capability and delivery expertise to help institutions evolve their digital landscape.
          </p>
          <Link href="/about" className="mt-7 inline-flex min-h-11 items-center gap-2 font-jbmono text-[11px] uppercase tracking-widest" style={{ color: T.signal }}>
            Discover Tayseer <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-5 md:grid-cols-2">
        {DEPLOYMENT.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="group h-full rounded-xl border p-7 sm:p-8" style={{ borderColor: T.border, background: T.panel }}>
              <div className="flex h-11 w-11 items-center justify-center rounded-md" style={{ background: "rgba(13,90,140,.10)", color: T.signal }}>
                <item.icon aria-hidden="true" size={20} />
              </div>
              <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: T.muted }}>{item.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ background: T.bg, color: T.text }} className="overflow-x-clip font-archivo">
      <EnterpriseHero />
      <ChallengeSolution />
      <PremiumSolutions />
      <FahimShowcase />
      <BankingEcosystem />
      <CompanyBridge />
      <CredibilityMetrics />
      <ExecutiveTestimonials />
      <LatestInsights />
      <FinalEnterpriseCTA />
    </div>
  );
}
