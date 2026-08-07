import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const routeCopy: Record<string, { title: string; description: string }> = {
  solutions: {
    title: "Solutions",
    description: "Explore Tayseer banking technology, AI, platform and managed service capabilities.",
  },
  "solutions/core-banking": {
    title: "Core Banking",
    description: "Core banking technology designed for resilient, connected financial operations.",
  },
  "solutions/fahim-ai": {
    title: "Fahim AI",
    description: "Practical enterprise AI for financial service, operations and decision workflows.",
  },
  "solutions/mbuke": {
    title: "MBuke Digital Banking",
    description: "White-label digital banking experiences across modern customer channels.",
  },
  "solutions/managed-services": {
    title: "Managed Services",
    description: "Specialist managed services for critical banking technology platforms.",
  },
  "solutions/banking-systems": {
    title: "Banking Systems",
    description: "Banking systems and infrastructure for secure, modern financial operations.",
  },
  "solutions/software-management-systems": {
    title: "Software Management Systems",
    description: "Business-ready software platforms and management systems from Tayseer.",
  },
  about: {
    title: "About Tayseer",
    description: "Learn about Tayseer Innovations and its banking technology expertise.",
  },
  blog: {
    title: "Insights",
    description: "Perspectives on banking technology, financial infrastructure and AI.",
  },
  connect: {
    title: "Connect",
    description: "Talk with Tayseer about your banking technology requirements.",
  },
  careers: {
    title: "Careers",
    description: "Explore opportunities to build banking technology with Tayseer.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "Tayseer Innovations privacy information.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "Tayseer Innovations website terms and conditions.",
  },
};

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join("/");
  const route = routeCopy[key];

  if (!route) return {};

  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: `/${key}` },
    openGraph: {
      title: route.title,
      description: route.description,
      url: `/${key}`,
    },
  };
}

export default async function MigratingRoutePage({ params }: RouteProps) {
  const { slug } = await params;
  const key = slug.join("/");
  const route = routeCopy[key];

  if (!route) notFound();

  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center px-6 py-28 text-white">
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.025] p-8 md:p-14">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#5cf0ce]">Next.js migration foundation</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">{route.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">{route.description}</p>
        <p className="mt-8 max-w-2xl border-l border-[#5cf0ce]/40 pl-5 text-sm leading-7 text-white/45">
          This URL is now served by the Next.js App Router. Its full legacy content and redesigned experience will be migrated in the following implementation phase.
        </p>
        <Link href="/" className="mt-10 inline-flex min-h-12 items-center rounded-md bg-[#5cf0ce] px-6 py-3 font-semibold text-[#07110f]">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
