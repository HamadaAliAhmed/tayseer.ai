import type { Metadata } from "next";
import LegacyRouteClient from "@/next/LegacyRouteClient";

const titles: Record<string, string> = {
  "/solutions": "Solutions",
  "/solutions/core-banking": "Core Banking",
  "/solutions/fahim-ai": "Fahim AI",
  "/solutions/mbuke": "MBuke",
  "/solutions/managed-services": "Managed Services",
  "/solutions/banking-systems": "Banking Systems",
  "/solutions/software-management-systems": "Software Management Systems",
  "/about": "About",
  "/connect": "Connect",
  "/careers": "Careers",
  "/blog": "Blog",
  "/privacy": "Privacy Policy",
  "/terms": "Terms & Conditions"
};

function toPath(slug: string[]) {
  return `/${slug.join("/")}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const pathname = toPath(slug);
  const title = pathname.startsWith("/blog/") ? "Tayseer Insights" : titles[pathname] || "Tayseer Innovations";
  return {
    title,
    alternates: { canonical: pathname },
    description: "Tayseer Innovations provides banking technology, AI, digital banking and managed solutions for financial institutions."
  };
}

export default async function LegacyCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <LegacyRouteClient pathname={toPath(slug)} />;
}
