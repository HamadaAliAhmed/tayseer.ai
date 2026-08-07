import SolutionDetail from "./SolutionDetail";
import { Banknote, MonitorSmartphone, Coins, LayoutGrid, Layers, CreditCard, Fingerprint } from "lucide-react";

// ALL copy SOURCED from banking-systems.html.
const CAPS = [
  { icon: Banknote, h: "Banking Systems: ATMs & Cash Recyclers Explained", p: "Extend banking convenience beyond branch hours and optimize cash flow with GRG’s advanced ATMs and recyclers. Provide 24/7 access to cash and banking services with our feature-rich ATMs and recyclers. GRG’s ATMs offer a wide range of functionalities, including cash withdrawals, deposits, bill payments, and account inquiries. The cutting-edge cash recycling machines further optimize cash management and reduce reliance on armored cash services." },
  { icon: MonitorSmartphone, h: "Smart Teller Machines (STMs)", p: "Enhance branch efficiency, reduce teller workload, and deliver personalized banking experiences with GRG’s Smart Teller Machines. Transform the branch experience with human-assisted automation through STMs. STMs combine the efficiency of self-service with the personalized touch of a teller. Customers can handle transactions like cash deposits, checks, and account inquiries with the assistance of a remote teller through video conferencing, reducing wait times and improving customer satisfaction." },
  { icon: Coins, h: "Cash Sorting Machines", p: "Boost operational efficiency, minimize cash handling errors, and free up staff time with automated cash processing solutions from GRG. Automate cash processing tasks and free up staff for more strategic initiatives. GRG’s cash sorting machines efficiently and accurately count, sort, and verify large volumes of banknotes and coins. This minimizes manual errors, improves cash handling efficiency, and streamlines branch operations." },
  { icon: LayoutGrid, h: "Self-Service Solutions", p: "Offer greater customer control and convenience with a wider range of self-service solutions designed to empower your customers. Empower your customers with a wider range of self-service options beyond ATMs. GRG offers a comprehensive suite of self-service solutions, including kiosks for account management, loan applications, and other banking services. This empowers your customers and reduces reliance on teller assistance, improving convenience and branch efficiency." },
  { icon: Layers, h: "Bank Note & Coin Processing Modules", p: "Experience a seamless cash handling ecosystem with modular banknote and coin processing modules from GRG. Integrate seamlessly with your existing systems for a complete cash handling solution. GRG offers a variety of banknote and coin processing modules that can be integrated with ATMs, recyclers, and cash sorting machines. This modular approach allows you to customize a cash handling solution that meets your specific needs." },
  { icon: CreditCard, h: "Card Processing Modules", p: "Safeguard your customers’ financial information and ensure seamless card transactions with GRG’s secure card processing modules. Ensure secure and efficient card transactions at your branches. GRG’s card processing modules provide a secure and reliable platform for debit and credit card transactions at your ATMs, STMs, and self-service kiosks. This ensures a smooth and secure experience for your customers while protecting sensitive financial data." },
  { icon: Fingerprint, h: "Advanced Biometrics Modules", p: "Strengthen branch security, streamline user authentication, and provide a more convenient banking experience with advanced biometrics from GRG. Enhance security and convenience with advanced biometric authentication. GRG offers a range of biometric authentication modules, including fingerprint, facial recognition, and iris recognition. This provides an additional layer of security for customer transactions and improves user convenience by eliminating the need for PINs or passwords." },
];

export default function BankingSystems() {
  return (
    <SolutionDetail
      index="01.5"
      crumbs={["Home", "Solutions", "Banking Systems"]}
      title="Banking Systems"
      tagline="GRG Banking Systems for UAE Banks | Advanced Cash & ATM Solutions"
      lead="Revolutionize Your Financial Operations with GRG Banking Systems from Tayseer Innovations — Advanced Technology for Tomorrow’s Banking."
      capabilities={CAPS}
    />
  );
}
