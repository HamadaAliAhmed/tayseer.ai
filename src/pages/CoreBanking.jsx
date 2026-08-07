import { CreditCard, Send, Users, ShieldCheck, LineChart, ScrollText, Wallet, Landmark } from "lucide-react";
import { Reveal } from "@/site/motion";
import { InnerHero } from "@/site/ui";
import { ContactSection } from "@/site/ContactSection";
import { T } from "@/site/theme";

// ALL copy SOURCED from core-banking.html.
const CAPS = [
  { icon: CreditCard, h: "Payments", p: "Empower your customers with a modern and convenient way to manage their finances. Streamline your payments processing with our comprehensive solutions encompassing cards, mobile wallets, and app-based payments. Our secure and efficient platform ensures seamless transactions for your customers, reducing processing times and improving satisfaction." },
  { icon: Send, h: "Remittance Solutions", p: "Offer a reliable and affordable money transfer service to cater to your global customers. Enable fast, secure, and cost-effective money transfers for your domestic and international customers. Our user-friendly platform simplifies the remittance process, fostering financial inclusion and building customer loyalty." },
  { icon: Users, h: "Consumer Banking & the Evolution of Core Banking Systems", p: "Deliver a seamless and personalized banking experience that keeps your customers engaged. Empower your customers with a modern and user-friendly banking experience. Our solutions provide convenient access to account information, online banking features, and mobile banking applications." },
  { icon: ShieldCheck, h: "Security & Compliance", p: "Operate with peace of mind, knowing your data and systems are secure and compliant. Safeguard your data and operations with robust security solutions that meet evolving industry regulations. Our comprehensive security features protect against cyber threats, ensuring financial integrity and customer trust." },
  { icon: LineChart, h: "CRM & BI Systems", p: "Transform customer data into actionable insights for smarter decision-making and improved customer relationships. Leverage powerful Customer Relationship Management (CRM) and Business Intelligence (BI) tools to gain valuable insights into customer behavior. By understanding your customers' needs and preferences, you can optimize marketing strategies, personalize product offerings, and drive customer loyalty." },
  { icon: ScrollText, h: "Audit & Legislation", p: "To operate with confidence, knowing you are compliant with industry regulations and best practices. Ensure compliance with evolving regulations and maintain financial integrity with our comprehensive audit and legislative support tools. Our solutions help you stay ahead of regulatory changes, minimize risk, and build trust with your customers." },
  { icon: Wallet, h: "Financial Management Tools", p: "Gain a clear picture of your financial performance and make data-driven decisions for sustainable growth. Make informed decisions with comprehensive financial management solutions that provide real-time insights into your cash flow, profitability, and overall financial health. Our tools empower you to optimize resource allocation, manage risk effectively, and achieve your financial goals." },
  { icon: Landmark, h: "Funds & Treasury Tools", p: "Gain greater control over your financial resources and maximize profitability. Manage your liquidity and optimize your funds with advanced tools for cash forecasting, investment management, and foreign exchange transactions. Our solutions empower you to make informed financial decisions, reduce costs, and maximize returns." },
];

export default function CoreBanking() {
  return (
    <div style={{ background: T.bg, color: T.text }} className="font-archivo">
      <InnerHero
        index="01.1"
        crumbs={["Home", "Solutions", "Core Banking"]}
        title="Core Banking"
        tagline="Streamline your Core Banking, Unlock Innovation."
        lead="Our robust core banking platform handles the heavy lifting, so you can dedicate resources to customer-centric innovation."
      />

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CAPS.map((c, i) => (
              <Reveal key={c.h} delay={(i % 2) * 0.06}>
                <div data-testid={`cap-${i}`} className="group flex h-full flex-col rounded-lg border p-8 transition-colors hover:border-[#5CF0CE]" style={{ borderColor: T.border, background: T.panel }}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md" style={{ background: "rgba(92,240,206,0.12)", color: T.signal }}><c.icon size={22} /></div>
                    <div className="font-jbmono text-[11px]" style={{ color: T.faint }}>{String(i + 1).padStart(2, "0")}</div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{c.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: T.muted }}>{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
