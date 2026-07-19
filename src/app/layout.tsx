import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tucsonslableakpros.com"),
  title: "Tucson Slab Leak Detection & Repair | AZ",
  description: "Expert slab leak detection and repair in Tucson, AZ. We find hidden leaks under concrete without unnecessary damage. Request an inspection today.",
  openGraph: {
    title: "Tucson Slab Leak Detection & Repair | AZ",
    description: "Expert slab leak detection and repair in Tucson, AZ. We find hidden leaks under concrete without unnecessary damage. Request an inspection today.",
    url: "https://tucsonslableakpros.com/",
    siteName: "Tucson Leak Pros",
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Tucson Slab Leak Detection & Repair",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tucson Slab Leak Detection & Repair | AZ",
    description: "Expert slab leak detection and repair in Tucson, AZ. We find hidden leaks under concrete without unnecessary damage. Request an inspection today.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tucson Leak Pros",
  "url": "https://tucsonslableakpros.com/",
  "logo": "https://tucsonslableakpros.com/images/services_hub_hero.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-520-555-0199",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "124"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
