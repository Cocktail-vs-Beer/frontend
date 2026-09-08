import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./global.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cocktailvsbeer.be";

const description =
  "Cocktail vs Beer 2026 in Machelen: afterwork op vrijdag 2 oktober en een avond vol cocktails, bier en muziek op zaterdag 3 oktober.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cocktail vs Beer 2026",
  description,
  openGraph: {
    title: "Cocktail vs Beer 2026",
    description,
    url: siteUrl,
    locale: "nl_BE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07133a",
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
