import type { MetadataRoute } from "next";
import { locales, siteConfig } from "@/lib/site-config";
import { absoluteUrl, allPageKeys, pathFor } from "@/lib/routes";
import { languageAlternates } from "@/lib/seo";

/**
 * One <url> per page per language, each with xhtml:link hreflang alternates
 * to all language versions + x-default (identical to the <head> tags).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteConfig.legalLastUpdated}T00:00:00Z`);
  return allPageKeys.flatMap((key) =>
    locales.map((locale) => ({
      url: absoluteUrl(pathFor(locale, key)),
      lastModified,
      changeFrequency: key === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: key === "home" ? 1 : ["privacy", "terms", "cookies", "disclaimer", "contact"].includes(key) ? 0.3 : 0.8,
      alternates: { languages: languageAlternates(key) },
    })),
  );
}
