import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://www.liborindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LIBOR India — Let's Live for Generations",
    template: "%s — LIBOR India",
  },
  description:
    "LIBOR is building India's first sustainability-driven electrical distribution ecosystem. Reliable, thoughtfully designed electrical products with a circular future in mind.",
  keywords: [
    "LIBOR India",
    "sustainable electricals",
    "Kamet exhaust fan",
    "circular economy",
    "Made in India",
    "ventilation fan",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "LIBOR India",
    title: "LIBOR India — Let's Live for Generations",
    description:
      "India's first sustainability-driven electrical distribution ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIBOR India — Let's Live for Generations",
    description:
      "India's first sustainability-driven electrical distribution ecosystem.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#081D49",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LIBOR India",
  url: SITE_URL,
  slogan: "Let's Live for Generations",
  description:
    "India's first sustainability-driven electrical distribution ecosystem.",
  email: "hello@liborindia.com",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
