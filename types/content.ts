import type { CategoryId, StyleId } from "@/lib/unicode/styles";
import type { StylePageKey } from "@/lib/routes";

/**
 * Text fields support inline internal links written as [anchor text](pageKey),
 * e.g. "Try the [gothic letters](gothic)". The page key is resolved to the
 * localized URL by <RichText>. External links: [text](https://…).
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  /** Owner name and bio from lib/site-config.ts (or a visible "pending" notice). */
  | { type: "owner" }
  /** Renders real generator output for `text` in each listed style. */
  | { type: "examples"; text: string; styles: StyleId[] };

export interface Section {
  heading: string;
  blocks: Block[];
  /** Centered heading with an icon above it (used for the mission card). */
  featured?: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sample: string;
  sections: Section[];
  stylesHeading: string;
  stylesIntro: string;
  platformsHeading: string;
  /** One-line intro for the social media / games box. */
  platformsIntro: string;
  /** One-line teaser per style/platform page, used in link cards. */
  teasers: Record<StylePageKey, string>;
  faqs: FAQ[];
  conclusion: Section;
}

export interface StylePageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short label used in breadcrumbs, menus and link cards. */
  label: string;
  intro: string;
  /** Default preview text shown in the generator before the user types. */
  sample: string;
  /** Styles shown first under the "Recommended" chip. */
  featured: StyleId[];
  /** Optionally open the generator on a category instead of "Recommended". */
  initialCategory?: CategoryId;
  sections: Section[];
  faqs: FAQ[];
  related: StylePageKey[];
}

export interface InfoPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  label: string;
  intro?: string;
  /** Legal pages show a "last updated" line. */
  showUpdated?: boolean;
  sections: Section[];
}

export interface FaqPageContent extends InfoPageContent {
  groups: { heading: string; faqs: FAQ[] }[];
}

export type InfoPages = Record<Exclude<import("@/lib/routes").InfoPageKey, "faq">, InfoPageContent> & {
  faq: FaqPageContent;
};
