import type { Metadata } from "next";
import { locales, siteConfig, type Locale } from "./site-config";
import { absoluteUrl, pathFor, type PageKey } from "./routes";

/**
 * hreflang map for a page: every language version + x-default (Spanish).
 * Used both in <head> (via Metadata alternates) and in sitemap.xml, so the
 * two are always reciprocal and consistent.
 */
export function languageAlternates(key: PageKey): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[siteConfig.localeMeta[l].hreflang] = absoluteUrl(pathFor(l, key));
  map["x-default"] = absoluteUrl(pathFor("es", key));
  return map;
}

export function buildMetadata(opts: {
  locale: Locale;
  key: PageKey;
  title: string;
  description: string;
  noindex?: boolean;
}): Metadata {
  const { locale, key, title, description, noindex } = opts;
  const url = absoluteUrl(pathFor(locale, key));
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(key) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: siteConfig.localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => siteConfig.localeMeta[l].ogLocale),
    },
    // "summary" because no share image exists yet. If you add
    // app/opengraph-image.png, switch to "summary_large_image".
    twitter: { card: "summary", title, description },
  };
}
