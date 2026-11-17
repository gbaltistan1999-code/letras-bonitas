/**
 * Schema.org JSON-LD builders. Only types supported by the real content are
 * used. No ratings or reviews: we have none. Organization/Person markup is only
 * emitted once the owner details exist in lib/site-config.ts.
 */
import { siteConfig, type Locale } from "./site-config";
import { absoluteUrl, pathFor, type PageKey } from "./routes";

type Json = Record<string, unknown>;

const lang = (l: Locale) => siteConfig.localeMeta[l].hreflang;
const websiteId = `${siteConfig.url}/#website`;

export function websiteSchema(locale: Locale, description: string): Json {
  const site: Json = {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl(pathFor(locale, "home")),
    name: siteConfig.name,
    description,
    inLanguage: lang(locale),
  };
  if (siteConfig.owner.name) site.publisher = { "@type": "Person", name: siteConfig.owner.name };
  return site;
}

export function webApplicationSchema(locale: Locale, key: PageKey, name: string, description: string): Json {
  return {
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(pathFor(locale, key)),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    inLanguage: lang(locale),
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function webPageSchema(locale: Locale, key: PageKey, name: string, description: string): Json {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(pathFor(locale, key))}#webpage`,
    url: absoluteUrl(pathFor(locale, key)),
    name,
    description,
    inLanguage: lang(locale),
    isPartOf: { "@id": websiteId },
  };
}

/** ProfilePage + Person for the author page. Null until the owner name and bio exist. */
export function authorProfileSchema(locale: Locale): Json | null {
  const { name, bio } = siteConfig.owner;
  if (!name || !bio[locale]) return null;
  const url = absoluteUrl(pathFor(locale, "author"));
  return {
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    inLanguage: lang(locale),
    isPartOf: { "@id": websiteId },
    mainEntity: { "@type": "Person", name, description: bio[locale], url },
  };
}

/** BlogPosting for an article page. Author/publisher only when the owner name exists. */
export function blogPostingSchema(
  locale: Locale,
  opts: { url: string; title: string; description: string; published: string; image?: string },
): Json {
  const node: Json = {
    "@type": "BlogPosting",
    "@id": `${opts.url}#article`,
    mainEntityOfPage: opts.url,
    url: opts.url,
    headline: opts.title,
    description: opts.description,
    datePublished: opts.published,
    dateModified: opts.published,
    inLanguage: lang(locale),
    isPartOf: { "@id": websiteId },
  };
  if (opts.image) node.image = absoluteUrl(opts.image);
  if (siteConfig.owner.name) {
    const person = { "@type": "Person", name: siteConfig.owner.name, url: absoluteUrl(pathFor(locale, "author")) };
    node.author = person;
    node.publisher = person;
  }
  return node;
}

/** FAQPage from visible Q&A. Inline [text](target) links become plain text. */
export function faqSchema(faqs: { q: string; a: string }[]): Json {
  const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function graph(...nodes: Json[]): Json {
  return { "@context": "https://schema.org", "@graph": nodes };
}
