/**
 * Public site configuration. Everything here is safe to ship to the browser.
 * There are no environment variables in this project: edit this file instead.
 */

export const locales = ["es", "pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const siteConfig = {
  name: "LetrasHub",
  /** Canonical origin, without trailing slash. */
  url: "https://letrashub.com",

  /**
   * OWNER-SUPPLIED VALUES — REQUIRED BEFORE LAUNCH.
   * While these are `null` the site shows clearly marked "pending" notices
   * instead of inventing contact details or an author identity.
   */
  contactEmail: "Ishp434@gmail.com" as string | null,
  owner: {
    name: "Ashfaq Ahmed" as string | null,
    /** Short bio per language. */
    bio: {
      es: "LetrasHub está desarrollado por Ashfaq Ahmed, un desarrollador centrado en crear herramientas web modernas y fáciles de usar. La plataforma permite transformar texto normal en letras elegantes y decorativas que se pueden copiar y pegar en redes sociales, perfiles y plataformas digitales.",
      pt: "O LetrasHub é desenvolvido por Ashfaq Ahmed, um desenvolvedor focado em criar ferramentas web modernas e fáceis de usar. A plataforma facilita transformar texto comum em letras estilosas e decorativas que podem ser copiadas e coladas em redes sociais, perfis e plataformas digitais.",
      en: "LetrasHub is developed by Ashfaq Ahmed, a developer focused on creating modern, user-friendly web tools. The platform makes it easy to transform ordinary text into stylish, decorative fonts that users can copy and paste across social media, profiles, and digital platforms.",
    } as Record<Locale, string | null>,
  },

  /** Date shown on legal pages as "last updated" (ISO yyyy-mm-dd). */
  legalLastUpdated: "2026-11-16",

  /**
   * Optional third-party services. All are off: the site currently loads no
   * analytics or advertising scripts. If you add one, set it to true here,
   * load it only through <ConsentGate category="..."> and update the
   * Privacy and Cookie policies in every language.
   */
  optionalServices: {
    analytics: false,
    marketing: false,
  },

  /** Max characters (Unicode code points) accepted by the generator. */
  generatorMaxLength: 200,

  /** Language metadata used by hreflang, <html lang> and the switcher. */
  localeMeta: {
    es: { hreflang: "es", htmlLang: "es", ogLocale: "es_LA", label: "Español", short: "ES" },
    pt: { hreflang: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", label: "Português", short: "PT" },
    en: { hreflang: "en", htmlLang: "en", ogLocale: "en_US", label: "English", short: "EN" },
  } satisfies Record<Locale, { hreflang: string; htmlLang: string; ogLocale: string; label: string; short: string }>,

  themeColor: "#6d28d9",
} as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
