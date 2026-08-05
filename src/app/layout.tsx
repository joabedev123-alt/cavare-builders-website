import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { companyConfig } from "@/data/company";

const serifFont = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cavarebuilders.com"),
  title: {
    default: "Cavare Builders LLC | Construction & Remodeling in South Florida",
    template: "%s | Cavare Builders LLC",
  },
  description:
    "Premium construction, home remodeling, kitchen renovation, bathroom remodeling, flooring, doors, windows, and interior transformation services across Broward and Palm Beach County, Florida.",
  keywords: [
    "General contractor Broward County",
    "General contractor Palm Beach County",
    "Home remodeling South Florida",
    "Kitchen remodeling Broward County",
    "Bathroom remodeling Palm Beach County",
    "Full home renovation Florida",
    "Interior renovation South Florida",
    "Construction company Broward County",
    "Remodeling contractor Palm Beach County",
  ],
  authors: [{ name: companyConfig.name }],
  creator: companyConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cavarebuilders.com",
    siteName: companyConfig.name,
    title: "Cavare Builders LLC | Construction & Remodeling in South Florida",
    description:
      "Premium construction, home remodeling, kitchen renovation, bathroom remodeling, flooring, doors, windows, and interior transformation services across Broward and Palm Beach County, Florida.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Cavare Builders LLC Luxury Remodeling Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavare Builders LLC | Construction & Remodeling in South Florida",
    description:
      "Premium construction, home remodeling, kitchen renovation, bathroom remodeling, flooring, doors, windows, and interior transformation services across Broward and Palm Beach County, Florida.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness & GeneralContractor JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: companyConfig.name,
    description: companyConfig.description,
    telephone: companyConfig.phoneInternational,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Broward County, Florida",
      },
      {
        "@type": "AdministrativeArea",
        name: "Palm Beach County, Florida",
      },
    ],
    knowsAbout: [
      "Full Home Remodeling",
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Interior Renovations",
      "Flooring and Surfaces",
      "Doors and Windows",
      "Custom Millwork",
    ],
    url: "https://cavarebuilders.com",
    priceRange: "$$$",
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-gold text-brand-black font-sans text-xs uppercase font-bold rounded-sm shadow-floating"
        >
          Skip to main content
        </a>

        {/* Global Header */}
        <Header />

        {/* Main Page Body */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
