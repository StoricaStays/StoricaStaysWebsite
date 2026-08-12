import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Scripts from "../components/Scripts";
import AsyncCSS from "../components/AsyncCSS";
import ClientLayout from "../components/ClientLayout";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Storica Stays — Heritage Boutique Stays & Rooftop Restaurant",
    template: "%s — Storica Stays",
  },
  description:
    "Experience modern luxury heritage stays in Jodhpur & Udaipur. Heritage rooms, cozy dorms, rooftop dining with fort and lake views.",
  keywords: [
    "Heritage hotel",
    "Boutique stay",
    "Jodhpur hostel",
    "Udaipur hotel",
    "Rooftop restaurant",
    "Storica Stays",
  ],
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
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

        <link href="/img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* LightGallery CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        <Scripts />
        <AsyncCSS />
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

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}