import Image from "next/image";
import Link from "next/link";
import { siteConfig, type Locale } from "@/lib/site-config";
import { pathFor, stylePageKeys } from "@/lib/routes";
import { getDictionary, pageLabel } from "@/lib/i18n";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const linkCls = "text-sm text-ink-soft hover:text-accent";
  const site = (["about", "author", "faq", "contact"] as const).map((k) => ({ href: pathFor(locale, k), label: pageLabel(locale, k) }));
  const legal = (["privacy", "terms", "cookies", "disclaimer"] as const).map((k) => ({
    href: pathFor(locale, k),
    label: pageLabel(locale, k),
  }));
  const styles = stylePageKeys.map((k) => ({ href: pathFor(locale, k), label: pageLabel(locale, k) }));

  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href={pathFor(locale, "home")} className="inline-flex" translate="no">
            <Image src="/logo.png" alt={`${siteConfig.name} — ${dict.common.home}`} width={623} height={160} className="h-9 w-auto" />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{dict.footer.tagline}</p>
        </div>
        <FooterCol title={dict.footer.stylesHeading}>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 lg:grid-cols-2">
            {styles.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterCol>
        <FooterCol title={dict.footer.siteHeading}>
          <ul className="space-y-2">
            {site.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterCol>
        <FooterCol title={dict.footer.legalHeading}>
          <ul className="space-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton label={dict.footer.cookieSettings} className={`${linkCls} text-left underline-offset-2 hover:underline`} />
            </li>
          </ul>
        </FooterCol>
        <FooterCol title={dict.nav.language}>
          <LanguageSwitcher label={dict.nav.language} variant="list" />
        </FooterCol>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-5 text-muted">
          <p>{dict.footer.nonAffiliation}</p>
          <p>
            © {new Date().getFullYear()} LetrasHub · {dict.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
