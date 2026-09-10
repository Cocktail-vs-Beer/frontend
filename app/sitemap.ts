import type { MetadataRoute } from "next";

import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
