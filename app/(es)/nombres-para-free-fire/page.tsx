import type { Metadata } from "next";
import { absoluteUrl, FREE_FIRE_NAMES_PATH, pathFor } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { blogPostPath } from "@/lib/blog-routes";
import { getBlogPost, getDictionary, getStylePages } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { ffNameLists, ffSymbolGroups } from "@/lib/free-fire-names";
import { ffPage } from "@/data/es/free-fire-names";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSections } from "@/components/ContentSections";
import { CopyList } from "@/components/CopyList";
import { Faqs } from "@/components/Faqs";
import { JsonLd } from "@/components/JsonLd";
import { PageLinkCards } from "@/components/PageLinkCards";
import { RichText } from "@/components/RichText";
import { FreeFireNamesGenerator } from "@/components/ff/FreeFireNamesGenerator";
import { NameChips } from "@/components/ff/NameChips";

/**
 * Spanish-only page (no pt/en version): hreflang lists only "es" + x-default.
 * The language switcher offers the pt/en "Letras para Free Fire" pages instead.
 */
const pathOf = (l: string) => (l === "es" ? FREE_FIRE_NAMES_PATH : null);

export const metadata: Metadata = buildMetadata({
  locale: "es",
  pathOf,
  title: ffPage.metaTitle,
  description: ffPage.metaDescription,
});

export default function Page() {
  const locale = "es" as const;
  const dict = getDictionary(locale);
  const styles = getStylePages(locale);
  const url = absoluteUrl(FREE_FIRE_NAMES_PATH);
  const crumbs = [
    { name: dict.common.home, path: pathFor(locale, "home") },
    { name: styles.freefire.label, path: pathFor(locale, "freefire") },
    { name: ffPage.label, path: FREE_FIRE_NAMES_PATH },
  ];
  const nickPost = blogPostPath(locale, "freeFireNick");

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: ffPage.metaTitle,
            description: ffPage.metaDescription,
            inLanguage: "es",
            isPartOf: { "@id": `${siteConfig.url}/#website` },
          },
          {
            "@type": "WebApplication",
            name: "Generador de nombres para Free Fire",
            url,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            inLanguage: "es",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
          breadcrumbSchema(crumbs),
          faqSchema(ffPage.faqs),
        )}
      />

      <section className="mx-auto max-w-5xl px-4 pt-6 sm:pt-8">
        <Breadcrumbs items={crumbs} label={dict.common.breadcrumbLabel} />
        <h1 className="text-brand mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{ffPage.h1}</h1>
        {ffPage.intro.map((p) => (
          <p key={p.slice(0, 20)} className="mt-3 max-w-3xl text-base leading-7 text-ink-soft sm:text-lg">
            {p}
          </p>
        ))}
        <div className="mt-6">
          <FreeFireNamesGenerator />
        </div>
      </section>

      <div className="mx-auto mt-14 max-w-3xl px-4">
        <ContentSections sections={[ffPage.howTo]} locale={locale} dict={dict} />
      </div>

      <div className="mx-auto mt-6 max-w-5xl px-4">
        <p className="text-sm text-muted">{ffPage.listsNote}</p>
        {ffNameLists.map((list) => (
          <section key={list.id} aria-labelledby={`lista-${list.id}`} className="mt-12">
            <h2 id={`lista-${list.id}`} className="text-2xl font-semibold tracking-tight text-ink">
              {list.heading}
            </h2>
            {list.intro ? <p className="mt-2 text-ink-soft">{list.intro}</p> : null}
            <NameChips names={list.names} pairs={list.pairs} />
          </section>
        ))}

        <section aria-labelledby="simbolos" className="mt-12">
          <h2 id="simbolos" className="text-2xl font-semibold tracking-tight text-ink">
            {ffPage.symbols.heading}
          </h2>
          <p className="mt-2 text-ink-soft">{ffPage.symbols.intro}</p>
          <CopyList items={ffSymbolGroups} labels={{ copy: dict.generator.copy, copied: dict.generator.copied }} />
          <p className="prose-lh mt-3 text-ink-soft">
            <RichText text={ffPage.symbols.outro} locale={locale} />
          </p>
        </section>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-4">
        <ContentSections sections={ffPage.sections} locale={locale} dict={dict} />
        <section aria-labelledby="faq-heading" className="mt-12">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-ink">
            {dict.common.faqHeading}
          </h2>
          <div className="mt-5">
            <Faqs faqs={ffPage.faqs} locale={locale} />
          </div>
        </section>
      </div>

      <section aria-labelledby="explora" className="mx-auto mt-14 max-w-5xl px-4">
        <h2 id="explora" className="text-2xl font-semibold tracking-tight text-ink">
          Sigue explorando
        </h2>
        <div className="mt-5">
          <PageLinkCards
            cards={[
              ...ffPage.explore.map((e) => ({ href: pathFor(locale, e.key), title: styles[e.key].label, text: e.text })),
              ...(nickPost
                ? [{ href: nickPost, title: getBlogPost(locale, "freeFireNick").title, text: "Artículo del blog con ideas y combinaciones." }]
                : []),
            ]}
          />
        </div>
      </section>
    </>
  );
}
