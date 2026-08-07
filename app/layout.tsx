import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tayseer Innovations",
  url: "https://tayseer.me",
  description:
    "Banking technology, digital banking, payments, remittance, AI and managed technology solutions for financial institutions.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tayseer.me"),
  title: {
    default: "Tayseer Innovations | Banking Technology & AI",
    template: "%s | Tayseer Innovations",
  },
  description:
    "Tayseer Innovations delivers core banking, digital banking, payments, remittance, AI and managed technology solutions for financial institutions.",
  applicationName: "Tayseer Innovations",
  authors: [{ name: "Tayseer Innovations" }],
  creator: "Tayseer Innovations",
  publisher: "Tayseer Innovations",
  manifest: "/manifest.webmanifest",
  keywords: [
    "banking technology",
    "core banking",
    "digital banking",
    "banking AI",
    "payments",
    "remittance",
    "fintech UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tayseer Innovations",
    title: "Tayseer Innovations | Banking Technology & AI",
    description:
      "Technology that moves banking forward — from core banking and digital channels to intelligent payment infrastructure and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayseer Innovations | Banking Technology & AI",
    description:
      "Technology that moves banking forward — from core banking and digital channels to intelligent payment infrastructure and AI.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090B0E",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="font-[var(--font-brand)]">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
