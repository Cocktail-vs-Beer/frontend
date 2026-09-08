import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteDescription, siteName, siteTitle, siteUrl } from "../lib/site";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#07133a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        {children}
        <Script
          defer
          data-domain="cocktailvsbeer.be"
          src="https://analytics.cocktailvsbeer.be/js/script.js"
        />
        <Script
          defer
          data-domain="cocktailvsbeer.be"
          src="https://analytics.cocktailvsbeer.be/js/script.tagged-events.js"
        />
      </body>
    </html>
  );
}
