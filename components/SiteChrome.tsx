import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { letterStyleKeys, pathFor, platformKeys } from "@/lib/routes";
import { getDictionary, pageLabel } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ConsentProvider } from "./cookies/ConsentProvider";

/**
 * Everything inside <body> except the page itself: skip link, header, footer
 * and cookie consent UI. Shared by the locale layout and the global 404 page.
 */
export function SiteChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);
  const toLink = (k: Parameters<typeof pageLabel>[1]) => ({ href: pathFor(locale, k), label: pageLabel(locale, k) });

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        {dict.nav.skipToContent}
      </a>
      <ConsentProvider strings={dict.cookies} privacyHref={pathFor(locale, "privacy")} dateLocale={siteConfig.localeMeta[locale].hreflang}>
        <Header
          homeHref={pathFor(locale, "home")}
          labels={dict.nav}
          letterStyles={letterStyleKeys.map(toLink)}
          platforms={platformKeys.map(toLink)}
          links={[toLink("blog"), toLink("about"), toLink("faq")]}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </ConsentProvider>
    </>
  );
}
