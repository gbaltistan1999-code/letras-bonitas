import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { siteConfig, type Locale } from "@/lib/site-config";
import { getHome } from "@/lib/i18n";
import { SiteChrome } from "./SiteChrome";

/**
 * Root layout shared by the three languages. Each language has its own
 * root layout file (app/(es)/layout.tsx, app/(pt)/pt/layout.tsx,
 * app/(en)/en/layout.tsx) so <html lang> is correct in the static HTML and
 * every URL maps to a real route (no rewrites the client router can't see).
 */
export function LocaleRootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={siteConfig.localeMeta[locale].htmlLang}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteChrome locale={locale}>{children}</SiteChrome>
      </body>
    </html>
  );
}

export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: getHome(locale).metaTitle,
    description: getHome(locale).metaDescription,
    formatDetection: { telephone: false, email: false, address: false },
    verification: { google: siteConfig.googleSiteVerification },
  };
}

export const rootViewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};
