/**
 * Blog post registry: each post has a localized slug for every language it is
 * published in. A post may exist in only some languages (e.g. a Spanish-only
 * seasonal post): leave the other locales out and it simply isn't published there.
 * Client-safe (no server imports) so the language switcher can use it.
 *
 * To add a post: add its id + slugs here, then its content in data/{lang}/blog.ts
 * for exactly the languages listed (checked at build time by getPostsFor()).
 */
import { locales, type Locale } from "./site-config";

export const blogPostIds = ["christmas", "instagramBio", "squareBoxes", "freeFireNick"] as const;
export type BlogPostId = (typeof blogPostIds)[number];

export const blogSlugs: Record<BlogPostId, Partial<Record<Locale, string>>> = {
  christmas: {
    es: "feliz-navidad-letras-bonitas",
  },
  instagramBio: {
    es: "letras-bonitas-biografia-instagram",
    pt: "letras-bonitas-bio-instagram",
    en: "fancy-fonts-instagram-bio",
  },
  squareBoxes: {
    es: "por-que-letras-se-ven-como-cuadritos",
    pt: "por-que-letras-aparecem-como-quadradinhos",
    en: "why-fancy-text-shows-boxes",
  },
  freeFireNick: {
    es: "ideas-nick-free-fire-simbolos",
    pt: "ideias-nick-free-fire-simbolos",
    en: "free-fire-nickname-ideas-symbols",
  },
};

/** Languages a post is published in. */
export function postLocales(id: BlogPostId): Locale[] {
  return locales.filter((l) => blogSlugs[id][l] !== undefined);
}

/** Post ids published in a language, in registry order. */
export function postIdsIn(locale: Locale): BlogPostId[] {
  return blogPostIds.filter((id) => blogSlugs[id][locale] !== undefined);
}

/**
 * Public path of a post, e.g. blogPostPath("pt", "squareBoxes") -> "/pt/blog/por-que-…".
 * Returns null if the post isn't published in that language.
 */
export function blogPostPath(locale: Locale, id: BlogPostId): string | null {
  const slug = blogSlugs[id][locale];
  if (slug === undefined) return null;
  const prefix = locale === "es" ? "" : `/${locale}`;
  return `${prefix}/blog/${slug}`;
}

export function postIdFromSlug(locale: Locale, slug: string): BlogPostId | null {
  for (const id of blogPostIds) if (blogSlugs[id][locale] === slug) return id;
  return null;
}
