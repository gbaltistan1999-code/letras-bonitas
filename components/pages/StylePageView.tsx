import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { pathFor, type StylePageKey } from "@/lib/routes";
import { getDictionary, getHome, getStylePages } from "@/lib/i18n";
import { breadcrumbSchema, graph, webApplicationSchema, webPageSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSections } from "@/components/ContentSections";
import { Faqs } from "@/components/Faqs";
import { Generator } from "@/components/generator/Generator";
import { JsonLd } from "@/components/JsonLd";
import { PageLinkCards } from "@/components/PageLinkCards";

/** Layout shared by all style and platform pages. */
export function StylePageView({ locale, pageKey }: { locale: Locale; pageKey: StylePageKey }) {
  const dict = getDictionary(locale);
  const home = getHome(locale);
  const pages = getStylePages(locale);
  const page = pages[pageKey];
  const crumbs = [
    { name: dict.common.home, path: pathFor(locale, "home") },
    { name: page.label, path: pathFor(locale, pageKey) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema(locale, pageKey, page.metaTitle, page.metaDescription),
          webApplicationSchema(locale, pageKey, page.h1, page.metaDescription),
          breadcrumbSchema(crumbs),
        )}
      />
      <section className="mx-auto max-w-4xl px-4 pt-6 sm:pt-8">
        <Breadcrumbs items={crumbs} label={dict.common.breadcrumbLabel} />
        <h1 className="text-brand mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">{page.intro}</p>
        <div className="mt-6">
          <Generator
            strings={dict.generator}
            styleNames={dict.styleNames}
            sample={page.sample}
            featured={page.featured}
            initialCategory={page.initialCategory}
            maxLength={siteConfig.generatorMaxLength}
          />
        </div>
      </section>

      <article className="mx-auto mt-14 max-w-3xl px-4">
        <ContentSections sections={page.sections} locale={locale} dict={dict} />

        <section aria-labelledby="faq-heading" className="mt-12">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-ink">
            {dict.common.faqHeading}
          </h2>
          <div className="mt-5">
            <Faqs faqs={page.faqs} locale={locale} />
          </div>
        </section>
      </article>

      <section aria-labelledby="related-heading" className="mx-auto mt-14 max-w-5xl px-4">
        <h2 id="related-heading" className="text-2xl font-semibold tracking-tight text-ink">
          {dict.common.relatedHeading}
        </h2>
        <div className="mt-5">
          <PageLinkCards
            cards={page.related.map((k) => ({ href: pathFor(locale, k), title: pages[k].label, text: home.teasers[k] }))}
          />
        </div>
        <Link
          href={pathFor(locale, "home")}
          className="mt-6 inline-flex items-center gap-2 font-medium text-accent underline-offset-4 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {dict.common.backToGenerator}
        </Link>
      </section>
    </>
  );
}
