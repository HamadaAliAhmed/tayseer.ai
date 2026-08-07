"use client";

import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import CoreBanking from "@/pages/CoreBanking";
import FahimAI from "@/pages/FahimAI";
import MBuke from "@/pages/MBuke";
import ManagedServices from "@/pages/ManagedServices";
import BankingSystems from "@/pages/BankingSystems";
import SoftwareManagementSystems from "@/pages/SoftwareManagementSystems";
import About from "@/pages/About";
import Connect from "@/pages/Connect";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import { Privacy, Terms } from "@/pages/Legal";
import PageStub from "@/site/PageStub";

const staticRoutes = {
  "/": Home,
  "/solutions": Solutions,
  "/solutions/core-banking": CoreBanking,
  "/solutions/fahim-ai": FahimAI,
  "/solutions/mbuke": MBuke,
  "/solutions/managed-services": ManagedServices,
  "/solutions/banking-systems": BankingSystems,
  "/solutions/software-management-systems": SoftwareManagementSystems,
  "/about": About,
  "/connect": Connect,
  "/careers": Careers,
  "/blog": Blog,
  "/privacy": Privacy,
  "/terms": Terms,
};

export default function LegacyRouteClient({ pathname }) {
  if (pathname.startsWith("/blog/") && pathname !== "/blog") return <BlogArticle />;
  const Component = staticRoutes[pathname];
  if (!Component) return <PageStub index="404" title="Not Found" />;
  return <Component />;
}
