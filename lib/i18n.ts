/**
 * Server-side access to dictionaries and page content.
 * Everything is statically imported: it only runs at build time on the server,
 * so none of this text is shipped to the browser unless a component passes it down.
 */
import "server-only";
import type { Locale } from "./site-config";
import type { Dictionary } from "@/types/dictionary";
import type { HomeContent, InfoPages, StylePageContent } from "@/types/content";
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

const dictionaries: Record<Locale, Dictionary> = { es, pt, en };
const homes: Record<Locale, HomeContent> = { es: esHome, pt: ptHome, en: enHome };
const stylePages: Record<Locale, Record<StylePageKey, StylePageContent>> = { es: esStyles, pt: ptStyles, en: enStyles };
const infoPages: Record<Locale, InfoPages> = { es: esInfo, pt: ptInfo, en: enInfo };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export const getHome = (locale: Locale) => homes[locale];
export const getStylePages = (locale: Locale) => stylePages[locale];
export const getInfoPages = (locale: Locale) => infoPages[locale];

/** Short label of any page, used for breadcrumbs, menus and link lists. */
export function pageLabel(locale: Locale, key: StylePageKey | keyof InfoPages): string {
  if (key in stylePages[locale]) return stylePages[locale][key as StylePageKey].label;
  return infoPages[locale][key as keyof InfoPages].label;
}

/** Fill "{name}" placeholders in a UI string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`));
}
