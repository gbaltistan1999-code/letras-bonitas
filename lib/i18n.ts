/**
 * Server-side access to dictionaries and page content.
 * Everything is statically imported: it only runs at build time on the server,
 * so none of this text is shipped to the browser unless a component passes it down.
 */
import "server-only";
import type { Locale } from "./site-config";
import type { Dictionary } from "@/types/dictionary";
import type { BlogPost, BlogPosts, HomeContent, InfoPages, StylePageContent } from "@/types/content";
import { postIdsIn, type BlogPostId } from "./blog-routes";
import { locales } from "./site-config";
import type { StylePageKey } from "./routes";

import es from "@/dictionaries/es";
import pt from "@/dictionaries/pt";
import en from "@/dictionaries/en";
import esHome from "@/data/es/home";
import ptHome from "@/data/pt/home";
import enHome from "@/data/en/home";
import esStyles from "@/data/es/styles";
import ptStyles from "@/data/pt/styles";
import enStyles from "@/data/en/styles";
import esInfo from "@/data/es/info";
import ptInfo from "@/data/pt/info";
import enInfo from "@/data/en/info";
import esBlog from "@/data/es/blog";
import ptBlog from "@/data/pt/blog";
import enBlog from "@/data/en/blog";

const dictionaries: Record<Locale, Dictionary> = { es, pt, en };
const homes: Record<Locale, HomeContent> = { es: esHome, pt: ptHome, en: enHome };
const stylePages: Record<Locale, Record<StylePageKey, StylePageContent>> = { es: esStyles, pt: ptStyles, en: enStyles };
const infoPages: Record<Locale, InfoPages> = { es: esInfo, pt: ptInfo, en: enInfo };
const blogPosts: Record<Locale, BlogPosts> = { es: esBlog, pt: ptBlog, en: enBlog };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export const getHome = (locale: Locale) => homes[locale];
export const getStylePages = (locale: Locale) => stylePages[locale];
export const getInfoPages = (locale: Locale) => infoPages[locale];
export const getBlogPosts = (locale: Locale) => blogPosts[locale];

/** A post in a language it is published in (throws otherwise: a routing bug). */
export function getBlogPost(locale: Locale, id: BlogPostId): BlogPost {
  const post = blogPosts[locale][id];
  if (!post) throw new Error(`Blog post "${id}" has no "${locale}" content`);
  return post;
}

// Build-time check: each data/{lang}/blog.ts holds exactly the posts registered
// for that language in lib/blog-routes.ts.
for (const l of locales) {
  const want = postIdsIn(l).sort().join(",");
  const have = Object.keys(blogPosts[l]).sort().join(",");
  if (want !== have) throw new Error(`data/${l}/blog.ts posts [${have}] do not match lib/blog-routes.ts [${want}]`);
}

/** Short label of any page, used for breadcrumbs, menus and link lists. */
export function pageLabel(locale: Locale, key: StylePageKey | keyof InfoPages | "blog"): string {
  if (key === "blog") return dictionaries[locale].blog.label;
  if (key in stylePages[locale]) return stylePages[locale][key as StylePageKey].label;
  return infoPages[locale][key as keyof InfoPages].label;
}

/** Fill "{name}" placeholders in a UI string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`));
}
