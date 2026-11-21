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
  "bold",
  "italic",
  "bubble",
  "square",
  "underline",
  "upsideDown",
  "weird",
  "symbols",
  "aesthetic",
  "gamer",
  "kaomoji",
] as const;
export type StylePageKey = (typeof stylePageKeys)[number];
/** Pages from the second keyword batch; their content lives in data/<locale>/styles-extra.ts. */
export type ExtraStylePageKey =
  | "bold" | "italic" | "bubble" | "square" | "underline" | "upsideDown"
  | "weird" | "symbols" | "aesthetic" | "gamer" | "kaomoji";

export const letterStyleKeys: StylePageKey[] = [
  "cursive", "gothic", "bold", "italic", "small", "bubble", "square", "strike", "underline",
  "upsideDown", "weird", "symbols", "aesthetic", "gamer", "kaomoji",
];
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
  bold: { es: "letras-en-negrita", pt: "letras-em-negrito", en: "bold-text" },
  italic: { es: "letras-en-italica", pt: "letras-em-italico", en: "italic-text" },
  bubble: { es: "letras-en-burbuja", pt: "letras-em-bolha", en: "bubble-text" },
  square: { es: "letras-cuadradas", pt: "letras-quadradas", en: "square-text" },
  underline: { es: "letras-subrayadas", pt: "letras-sublinhadas", en: "underline-text" },
  upsideDown: { es: "letras-al-reves", pt: "letras-de-cabeca-para-baixo", en: "upside-down-text" },
  // pt: "letras diferentes" is the Portuguese homepage keyword, so this page targets "letras estranhas".
  weird: { es: "letras-raras", pt: "letras-estranhas", en: "weird-text" },
  symbols: { es: "letras-con-simbolos", pt: "letras-com-simbolos", en: "symbol-fonts" },
  aesthetic: { es: "letras-aesthetic", pt: "letras-aesthetic", en: "aesthetic-fonts" },
  gamer: { es: "letras-gamer", pt: "letras-gamer", en: "gamer-fonts" },
  kaomoji: { es: "kaomoji", pt: "kaomoji", en: "kaomoji" },
  about: { es: "sobre-nosotros", pt: "sobre-nos", en: "about" },
  author: { es: "autor", pt: "autor", en: "author" },
  contact: { es: "contacto", pt: "contato", en: "contact" },
  faq: { es: "preguntas-frecuentes", pt: "perguntas-frequentes", en: "faq" },
  privacy: { es: "politica-de-privacidad", pt: "politica-de-privacidade", en: "privacy-policy" },
  terms: { es: "terminos-y-condiciones", pt: "termos-e-condicoes", en: "terms-and-conditions" },
  cookies: { es: "politica-de-cookies", pt: "politica-de-cookies", en: "cookie-policy" },
  disclaimer: { es: "aviso-legal", pt: "aviso-legal", en: "disclaimer" },
};

/**
 * Spanish-only pages that live outside the page registry (no pt/en version).
 * Each maps to the registry page the language switcher offers in other languages.
 */
export const FREE_FIRE_NAMES_PATH = "/nombres-para-free-fire";
export const spanishOnlyPages: Record<string, PageKey> = {
  [FREE_FIRE_NAMES_PATH]: "freefire",
};
export const SINGLE_LANGUAGE_PATHS = Object.keys(spanishOnlyPages);

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
export function parsePath(pathname: string): {
  locale: Locale;
  key: PageKey | null;
  postId?: BlogPostId;
  /** Spanish-only page: its public path, and the page to offer in other languages. */
  spanishOnly?: { path: string; fallback: PageKey };
} {
  const clean = publicPath(pathname);
  if (spanishOnlyPages[clean]) return { locale: "es", key: null, spanishOnly: { path: clean, fallback: spanishOnlyPages[clean] } };
  const parts = clean.split("/").filter(Boolean);
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
