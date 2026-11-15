import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/site-config";
import { infoPageKeys, keyFromSlug, slugs, stylePageKeys, type InfoPageKey, type StylePageKey } from "@/lib/routes";
import { getInfoPages, getStylePages } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { StylePageView } from "./StylePageView";
import { InfoPageView } from "./InfoPageView";

/**
 * Helpers for the per-language [slug] routes. Every localized slug is
 * prerendered; the route files set `dynamicParams = false`, so any other slug
 * is a routing-level 404 rendered by app/global-not-found.tsx.
 */
const isStyleKey = (k: string): k is StylePageKey => (stylePageKeys as readonly string[]).includes(k);
const isInfoKey = (k: string): k is InfoPageKey => (infoPageKeys as readonly string[]).includes(k);

export function slugStaticParams(locale: Locale) {
  return Object.values(slugs).map((bySlug) => ({ slug: bySlug[locale] }));
}

export function slugMetadata(locale: Locale, slug: string): Metadata {
  const key = keyFromSlug(locale, slug);
  if (!key) return {};
  const page = isStyleKey(key) ? getStylePages(locale)[key] : getInfoPages(locale)[key as InfoPageKey];
  return buildMetadata({ locale, key, title: page.metaTitle, description: page.metaDescription });
}

export function SlugView({ locale, slug }: { locale: Locale; slug: string }) {
  const key = keyFromSlug(locale, slug);
  if (key && isStyleKey(key)) return <StylePageView locale={locale} pageKey={key} />;
  if (key && isInfoKey(key)) return <InfoPageView locale={locale} pageKey={key} />;
  notFound();
}
