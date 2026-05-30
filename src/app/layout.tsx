import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";

import { LanguageProvider } from "@/i18n/language-context";
import { SITE_URL } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luo Meng | AI Automation Developer & Full Stack Developer",
    template: "%s | Luo Meng",
  },
  description:
    "Premium personal brand portfolio for Luo Meng, specializing in enterprise websites, CRM systems, AI automation tools, and business dashboards.",
  keywords: [
    "Luo Meng",
    "AI Automation Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "CRM Development",
    "SaaS Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Luo Meng",
    title: "Luo Meng | AI Automation Developer & Full Stack Developer",
    description:
      "Premium personal brand portfolio for enterprise websites, CRM systems, AI automation tools, and business dashboards.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Luo Meng - AI Automation Developer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luo Meng | AI Automation Developer & Full Stack Developer",
    description:
      "Premium personal brand portfolio for enterprise websites, CRM systems, AI automation tools, and business dashboards.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luo Meng",
    jobTitle: "AI Automation Developer, Full Stack Developer",
    url: SITE_URL,
    sameAs: ["https://t.me/Amengstudio", "https://github.com/hishuai01-collab"],
  };

  return (
    <html lang="zh" className={`${manrope.variable} ${sora.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white font-sans text-zinc-950">
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
