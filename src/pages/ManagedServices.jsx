import SolutionDetail from "./SolutionDetail";
import { Server, Database, ShieldCheck, Banknote, Cloud } from "lucide-react";

// ALL copy SOURCED from managed-services.html.
const CAPS = [
  { icon: Server, h: "Managed T24 Temenos Service", p: "Maximize the potential of your Temenos T24 core banking system with expert support. Our team of expert professionals provide comprehensive management for your T24 system, including system administration, performance optimization, and ongoing maintenance. This ensures your core banking system operates at peak efficiency, minimizing downtime and maximizing the value of your investment." },
  { icon: Database, h: "Big Data Management", p: "Harness the power of big data and gain valuable insights from your vast data sets. Our big data management solutions encompass data storage, processing, and analytics. We help you store, manage, and analyze large and complex datasets, empowering you to extract valuable insights for informed decision-making, risk management, and improved customer experiences." },
  { icon: ShieldCheck, h: "Managed Security Services", p: "Safeguard your IT infrastructure and data with comprehensive security solutions. Our managed security services provide ongoing monitoring, threat detection, and incident response to protect your systems and data from cyberattacks. This allows you to focus on your core business while maintaining a robust security posture." },
  { icon: Banknote, h: "ATM & STM Management Service", p: "Ensure the smooth operation and availability of your ATMs and STMs. Our ATM & STM management service encompasses proactive maintenance and incident response. This ensures your ATMs and STMs operate efficiently and remain available to your customers, minimizing downtime and maintaining a positive customer experience." },
  { icon: Cloud, h: "IaaS & SaaS Systems", p: "Benefit from the flexibility and scalability of cloud-based solutions. We offer a range of Infrastructure as a Service (IaaS) and Software as a Service (SaaS) solutions that cater to your specific needs. This allows you to leverage the benefits of cloud computing, including scalability, cost-effectiveness, and improved resource management." },
];

export default function ManagedServices() {
  return (
    <SolutionDetail
      index="01.4"
      crumbs={["Home", "Solutions", "Managed Services"]}
      title="Managed Services"
      lead="Transform Your Business with Tayseer Innovations’ Managed Services — Our managed services solutions provide expert support and ensure the smooth operation of your critical systems, allowing you to optimize resources and achieve your business goals."
      capabilities={CAPS}
    />
  );
}
