import type { Metadata } from "next";
import { locales, siteConfig, type Locale } from "./site-config";
import { absoluteUrl, pathFor, type PageKey } from "./routes";

/**
 * hreflang map for a page: every language version + x-default (Spanish).
 * Used both in <head> (via Metadata alternates) and in sitemap.xml, so the
 * two are always reciprocal and consistent.
 */
export function languageAlternates(key: PageKey): Record<string, string> {
  return alternatesFor((l) => pathFor(l, key));
}

/**
 * Same as languageAlternates, for pages outside the PageKey registry (blog posts).
 * Languages where pathOf returns null are left out; x-default is Spanish when it
 * exists, otherwise the first available language.
 */
export function alternatesFor(pathOf: (locale: Locale) => string | null): Record<string, string> {
  const map: Record<string, string> = {};
  let fallback: string | null = null;
  for (const l of locales) {
    const p = pathOf(l);
    if (p === null) continue;
    map[siteConfig.localeMeta[l].hreflang] = absoluteUrl(p);
    fallback ??= absoluteUrl(p);
  }
  const es = pathOf("es");
  if (fallback) map["x-default"] = es ? absoluteUrl(es) : fallback;
  return map;
}

export function buildMetadata(opts: {
  locale: Locale;
  title: string;
  description: string;
  noindex?: boolean;
  /** Blog posts: published date for og:type=article. */
  publishedTime?: string;
  /** Share image (path under public/). Switches the Twitter card to the large format. */
  image?: { src: string; width: number; height: number; alt: string };
} & ({ key: PageKey } | { pathOf: (locale: Locale) => string | null })): Metadata {
  const { locale, title, description, noindex, publishedTime, image } = opts;
  const ogImage = image ? { url: absoluteUrl(image.src), width: image.width, height: image.height, alt: image.alt } : null;
  const pathOf = "key" in opts ? (l: Locale) => pathFor(l, opts.key) : opts.pathOf;
  const own = pathOf(locale);
  if (own === null) throw new Error(`buildMetadata: no "${locale}" path`);
  const url = absoluteUrl(own);
  const available = locales.filter((l) => l !== locale && pathOf(l) !== null);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: alternatesFor(pathOf) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      ...(publishedTime ? { type: "article" as const, publishedTime } : { type: "website" as const }),
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: siteConfig.localeMeta[locale].ogLocale,
      alternateLocale: available.map((l) => siteConfig.localeMeta[l].ogLocale),
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    // "summary" because no share image exists yet. If you add
    // app/opengraph-image.png, switch to "summary_large_image".
    twitter: ogImage
      ? { card: "summary_large_image", title, description, images: [ogImage.url] }
      : { card: "summary", title, description },
  };
}
