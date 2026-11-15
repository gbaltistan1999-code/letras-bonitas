import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { isLocale, siteConfig, type Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { SiteChrome } from "@/components/SiteChrome";
import { NotFoundView } from "@/components/NotFoundView";

/**
 * Localized 404 for every unknown URL.
 *
 * The app has one root layout per language (app/(es), app/(pt)/pt,
 * app/(en)/en), so there is no single layout to build a 404 from; Next.js
 * recommends global-not-found for that case. It renders a complete HTML
 * document with a real 404 status. The proxy passes the visitor's language
 * (from the URL prefix) in the "x-letrashub-locale" request header.
 */
async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-letrashub-locale") ?? "es";
  return isLocale(value) ? value : "es";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: getDictionary(locale).notFound.metaTitle,
    robots: { index: false, follow: true },
  };
}

export default async function GlobalNotFound() {
  const locale = await getLocale();
  return (
    <html lang={siteConfig.localeMeta[locale].htmlLang}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteChrome locale={locale}>
          <NotFoundView locale={locale} />
        </SiteChrome>
      </body>
    </html>
  );
}
