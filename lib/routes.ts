/**
 * Route registry: every page exists in every locale with a localized slug.
 * Spanish (default) lives at the root, other languages under /pt and /en.
 * This file has no server-only imports so the language switcher can use it.
 */
import { siteConfig, type Locale } from "./site-config";
import { postIdFromSlug, type BlogPostId } from "./blog-routes";

export const stylePageKeys = [
  "cursive",
  "gothic",
  "small",
  "strike",
  "nick",
  "freefire",
  "instagram",
  "tiktok",
  "whatsapp",
  "discord",
] as const;
export type StylePageKey = (typeof stylePageKeys)[number];

export const letterStyleKeys: StylePageKey[] = ["cursive", "gothic", "small", "strike"];
export const platformKeys: StylePageKey[] = ["nick", "freefire", "instagram", "tiktok", "whatsapp", "discord"];

export const infoPageKeys = ["about", "author", "contact", "faq", "privacy", "terms", "cookies", "disclaimer"] as const;
export type InfoPageKey = (typeof infoPageKeys)[number];

/** "blog" is the blog index; posts have their own registry in ./blog-routes. */
export type PageKey = "home" | "blog" | StylePageKey | InfoPageKey;
type SluggedKey = Exclude<PageKey, "home" | "blog">;

export const slugs: Record<SluggedKey, Record<Locale, string>> = {
  cursive: { es: "letras-cursivas", pt: "letras-cursivas", en: "cursive-text" },
  gothic: { es: "letras-goticas", pt: "letras-goticas", en: "gothic-text" },
  small: { es: "letras-pequenas", pt: "letras-pequenas", en: "small-text" },
  strike: { es: "letras-tachadas", pt: "letras-riscadas", en: "strikethrough-text" },
  freefire: { es: "letras-para-free-fire", pt: "letras-para-free-fire", en: "free-fire-fonts" },
  instagram: { es: "letras-para-instagram", pt: "letras-para-instagram", en: "instagram-fonts" },
  tiktok: { es: "letras-para-tiktok", pt: "letras-para-tiktok", en: "tiktok-fonts" },
  whatsapp: { es: "letras-para-whatsapp", pt: "letras-para-whatsapp", en: "whatsapp-fonts" },
  discord: { es: "letras-para-discord", pt: "letras-para-discord", en: "discord-fonts" },
  nick: { es: "letras-para-nick", pt: "nick-bonito", en: "nickname-fonts" },
  about: { es: "sobre-nosotros", pt: "sobre-nos", en: "about" },
  author: { es: "autor", pt: "autor", en: "author" },
  contact: { es: "contacto", pt: "contato", en: "contact" },
  faq: { es: "preguntas-frecuentes", pt: "perguntas-frequentes", en: "faq" },
  privacy: { es: "politica-de-privacidad", pt: "politica-de-privacidade", en: "privacy-policy" },
  terms: { es: "terminos-y-condiciones", pt: "termos-e-condicoes", en: "terms-and-conditions" },
  cookies: { es: "politica-de-cookies", pt: "politica-de-cookies", en: "cookie-policy" },
  disclaimer: { es: "aviso-legal", pt: "aviso-legal", en: "disclaimer" },
};

export const allPageKeys: PageKey[] = ["home", "blog", ...stylePageKeys, ...infoPageKeys];

/** Public path, e.g. pathFor("pt", "gothic") -> "/pt/letras-goticas". */
export function pathFor(locale: Locale, key: PageKey): string {
  const prefix = locale === "es" ? "" : `/${locale}`;
  if (key === "home") return prefix || "/";
  if (key === "blog") return `${prefix}/blog`;
  return `${prefix}/${slugs[key][locale]}`;
}

/**
 * Absolute URL. The Spanish homepage is the bare origin (no trailing slash),
 * matching how Next.js serializes canonical/hreflang URLs, so <head> and
 * sitemap.xml always agree.
 */
export function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

/** Reverse lookup: slug within a locale -> page key. */
export function keyFromSlug(locale: Locale, slug: string): SluggedKey | null {
  for (const [key, bySlug] of Object.entries(slugs)) {
    if (bySlug[locale] === slug) return key as SluggedKey;
  }
  return null;
}

/**
 * Spanish pages are served from "/" but live internally under "/es" (the proxy
 * rewrites them). During prerendering the router may report the internal
 * "/es/…" path, so normalize both forms to the public one.
 */
export function publicPath(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

/**
 * Parse a public pathname into locale + page key (null key = unknown page).
 * Blog posts return key null plus their postId.
 */
export function parsePath(pathname: string): { locale: Locale; key: PageKey | null; postId?: BlogPostId } {
  const parts = publicPath(pathname).split("/").filter(Boolean);
  let locale: Locale = "es";
  if (parts[0] === "pt" || parts[0] === "en") {
    locale = parts[0];
    parts.shift();
  }
  if (parts.length === 0) return { locale, key: "home" };
  if (parts[0] === "blog") {
    if (parts.length === 1) return { locale, key: "blog" };
    const postId = parts.length === 2 ? postIdFromSlug(locale, parts[1]) : null;
    return postId ? { locale, key: null, postId } : { locale, key: null };
  }
  if (parts.length > 1) return { locale, key: null };
  return { locale, key: keyFromSlug(locale, parts[0]) };
}
