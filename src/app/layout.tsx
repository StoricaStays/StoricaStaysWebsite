import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Scripts from "../components/Scripts";
import AsyncCSS from "../components/AsyncCSS";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import ClientLayout from "../components/ClientLayout";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storica Stays - Heritage Boutique Comfort and Rooftop Restaurant",
  description: "Experience the charm of heritage at Storica Stays, your ideal Stay and rooftop restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Hostel,Restaurant,Room,Hotel" name="keywords" />
        <meta content="Experience the charm of heritage at Storica Stays, your ideal Stay and rooftop restaurant." name="description" />

        {/* Favicon */}
        <link href="/img/favicon.ico" rel="icon" />
    
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* LightGallery CSS */}
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </head>
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <Scripts />
        <AsyncCSS />
        <PerformanceOptimizer />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGTML35F"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
