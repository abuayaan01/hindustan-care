import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Home Appliance Repair in Ranchi | AC, Fridge & Washing Machine Service – Hindustan Care",
  description:
    "Hindustan Care provides fast & reliable home appliance repair in Ranchi, Jharkhand. Expert AC, refrigerator, washing machine & microwave repair with doorstep service, transparent pricing and service assurance. Book online today!",

  keywords: [
    "appliance repair Ranchi",
    "home appliance repair Ranchi Jharkhand",
    "AC repair Ranchi",
    "washing machine repair Ranchi",
    "refrigerator repair Ranchi",
    "microwave repair Ranchi",
    "doorstep appliance service Ranchi",
    "appliance technician near me Ranchi",
  ],

  metadataBase: new URL("https://hindustancare.in"),

  openGraph: {
    title: "Home Appliance Repair in Ranchi | Hindustan Care",
    description:
      "Trusted appliance repair service in Ranchi & Jharkhand. AC, fridge, washing machine & more with expert technicians and doorstep service.",
    url: "https://hindustancare.in",
    siteName: "Hindustan Care",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair in Ranchi | Hindustan Care",
    description:
      "Expert AC, refrigerator & washing machine repair in Ranchi with fast doorstep service.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://hindustancare.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
        {/* Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hindustan Care",
              image: "https://www.hindustancare.in/hindustan-care-logo.png",
              url: "https://hindustancare.in",
              telephone: "+91-9117770110",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "IN",
              },
              areaServed: "Ranchi",
              description:
                "Home appliance repair service in Ranchi including AC, refrigerator, washing machine and microwave repair.",
              openingHours: "Mo-Su 06:00-23:00",
            }),
          }}
        />
      </body>
    </html>
  );
}
