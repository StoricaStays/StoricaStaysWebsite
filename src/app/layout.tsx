import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Scripts from "../components/Scripts";
import AsyncCSS from "../components/AsyncCSS";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import ClientLayout from "../components/ClientLayout";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Storica Stays — Heritage Stays & Rooftop Dining in Jodhpur & Udaipur",
  description:
    "Heritage boutique stays in the Blue City of Jodhpur and the City of Lakes, Udaipur. Sleep inside history — rooftop dining with fort & lake views.",
  keywords: ["Storica Stays", "heritage hostel Jodhpur", "heritage hotel Udaipur", "rooftop restaurant Jodhpur", "lake view rooms Udaipur"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    
        {/* Critical CSS only */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        
        {/* LightGallery CSS */}
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </head>
      <body className={`${fraunces.variable} ${manrope.variable}`}>
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

        {/* Back to Top */}
        {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
         */}
      </body>
    </html>
  );
}
