/**
 * Canonical origin for this deployment. Vercel preview builds should set
 * NEXT_PUBLIC_SITE_URL so metadata, the sitemap and Stripe return URLs point
 * at the preview instead of production.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cocktailvsbeer.be"
).replace(/\/$/, "");

export const siteName = "Cocktail vs Beer";

export const siteTitle = "Cocktail vs Beer 2026";

export const siteDescription =
  "Cocktail vs Beer 2026 in Machelen: afterwork op vrijdag 2 oktober en een avond vol cocktails, bier en muziek op zaterdag 3 oktober.";
