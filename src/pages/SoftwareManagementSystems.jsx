import SolutionDetail from "./SolutionDetail";
import { GitBranch, Wrench, FolderTree, Plug, ScrollText, Lock, Rocket } from "lucide-react";

// ALL copy SOURCED from software-management-systems.html.
const CAPS = [
  { icon: GitBranch, h: "Version Control Systems", p: "Streamline development, ensure code integrity, and empower collaborative coding with robust version control systems. Track changes effortlessly and collaborate seamlessly. Version control systems (VCS) like Git provide a central repository for your code, allowing you to track changes, revert to previous versions, and collaborate efficiently with your development team. This ensures everyone is working on the latest version of the code and minimizes the risk of errors." },
  { icon: Wrench, h: "Mobile & Software Development Tools", p: "Boost developer productivity, accelerate development lifecycles, and deliver high-quality applications with our comprehensive development toolkit. Simplify mobile and software development with powerful tools. Our suite of development tools caters to both mobile and traditional software creation. This includes Integrated Development Environments (IDEs) for streamlined coding, debuggers for efficient troubleshooting, and testing frameworks to ensure code quality." },
  { icon: FolderTree, h: "File Management", p: "Maintain a well-organized codebase, facilitate collaboration, and improve project visibility with efficient file management solutions. Organize your filing systems efficiently and simplify file access. Effective file management is crucial for large-scale projects. Our solutions provide centralized storage for your code, assets, and project files, ensuring easy access and organization. Version control integration empowers you to track changes made to files over time." },
  { icon: Plug, h: "Integration API Management", p: "Break down data silos, automate workflows, and build a connected fintech ecosystem with robust API management. Effortlessly connect disparate systems and streamline data flow. Integration API management tools enable seamless communication between your software applications and external systems. This simplifies data exchange, automates workflows, and fosters a more integrated development environment." },
  { icon: ScrollText, h: "Log Management", p: "Turn application logs into actionable intelligence, identify and resolve issues faster, and optimize application performance with powerful log management. Gain valuable insights from your application logs and troubleshoot issues effectively. Log management solutions centralize and analyze application logs, providing valuable insights into system performance, errors, and user behavior. This empowers you to identify and troubleshoot issues quickly, ensuring optimal application uptime." },
  { icon: Lock, h: "Authorization Tools", p: "Implement granular access controls, protect sensitive data, and ensure application security with robust authorization tools. Control access and safeguard your applications with robust authorization. Authorization tools define user permissions and access levels within your software applications. This ensures only authorized users can access sensitive data and functionalities, safeguarding your systems and data integrity." },
  { icon: Rocket, h: "CI/CD Tools", p: "Deliver software faster, improve development efficiency, and ensure consistent code quality through automated CI/CD pipelines. Automate code building, testing, and deployment for faster releases. Continuous integration and continuous delivery (CI/CD) tools automate the software development lifecycle. This includes building code, running automated tests, and deploying applications to production environments, significantly accelerating the release cycle." },
];

export default function SoftwareManagementSystems() {
  return (
    <SolutionDetail
      index="01.6"
      crumbs={["Home", "Solutions", "Software Management Systems"]}
      title="Software Management Systems"
      lead="Streamline your operations with Tayseer Innovations' cutting-edge software management systems—where efficiency meets innovation."
      capabilities={CAPS}
    />
  );
}
