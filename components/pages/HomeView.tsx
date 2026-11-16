import type { Metadata } from "next";
import { Share2 } from "lucide-react";
import { siteConfig, type Locale } from "@/lib/site-config";
import { letterStyleKeys, pathFor, platformKeys, type StylePageKey } from "@/lib/routes";
import { getDictionary, getHome, getStylePages } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { graph, webApplicationSchema, webPageSchema, websiteSchema } from "@/lib/schema";
import { transform, type StyleId } from "@/lib/unicode/styles";
import { Generator } from "@/components/generator/Generator";
import { ContentSections } from "@/components/ContentSections";
import { Faqs } from "@/components/Faqs";
import { JsonLd } from "@/components/JsonLd";
import { PageLinkCards } from "@/components/PageLinkCards";

const cardPreviewStyle: Partial<Record<StylePageKey, StyleId>> = {
  cursive: "boldScript",
  gothic: "boldFraktur",
  small: "smallCaps",
  strike: "strike",
};

export function homeMetadata(locale: Locale): Metadata {
  const home = getHome(locale);
  return buildMetadata({ locale, key: "home", title: home.metaTitle, description: home.metaDescription });
}

/** Homepage (generator first, then supporting content). */
export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const home = getHome(locale);
  const pages = getStylePages(locale);

  const card = (k: StylePageKey) => ({
    href: pathFor(locale, k),
    title: pages[k].label,
    text: home.teasers[k],
    preview: cardPreviewStyle[k] ? transform(pages[k].label, cardPreviewStyle[k]) : undefined,
  });

  // Sections 0–3 explain what/how/where/how-it-works; then the style overview;
  // then compatibility and accessibility.
  const first = home.sections.slice(0, 4);
  const rest = home.sections.slice(4);

  return (
    <>
      <JsonLd
        data={graph(
          websiteSchema(locale, home.metaDescription),
          webPageSchema(locale, "home", home.metaTitle, home.metaDescription),
          webApplicationSchema(locale, "home", dict.generator.heading, home.metaDescription),
        )}
      />
      <section className="mx-auto max-w-4xl px-4 pt-8 sm:pt-12">
        <h1 className="text-brand text-center text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{home.h1}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-700 sm:text-lg">{home.intro}</p>
        <div className="mt-6">
          <Generator
            strings={dict.generator}
            styleNames={dict.styleNames}
            sample={home.sample}
            maxLength={siteConfig.generatorMaxLength}
          />
        </div>
      </section>

      {/* Social media & games: its own highlighted box, right under the generator. */}
      <section aria-labelledby="social-heading" className="mx-auto mt-12 max-w-5xl px-4">
        <div className="rounded-3xl border border-purple-100 bg-linear-to-br from-purple-100/70 via-pink-50 to-white p-5 shadow-lg shadow-purple-100/60 sm:p-8">
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="bg-brand flex size-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm shadow-purple-200">
              <Share2 className="size-5" />
            </span>
            <div>
              <h2 id="social-heading" className="text-2xl font-semibold tracking-tight text-ink">
                {home.platformsHeading}
              </h2>
              <p className="mt-1 text-ink-soft">{home.platformsIntro}</p>
            </div>
          </div>
          <div className="mt-6">
            <PageLinkCards cards={platformKeys.map(card)} />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-3xl px-4">
        <ContentSections sections={first} locale={locale} dict={dict} />
      </div>

      <section aria-labelledby="styles-heading" className="mx-auto mt-14 max-w-5xl px-4">
        <h2 id="styles-heading" className="text-2xl font-semibold tracking-tight text-ink">
          {home.stylesHeading}
        </h2>
        <p className="mt-2 text-ink-soft">{home.stylesIntro}</p>
        <div className="mt-5">
          <PageLinkCards cards={letterStyleKeys.map(card)} />
        </div>
      </section>

      <div className="mx-auto mt-14 max-w-3xl px-4">
        <ContentSections sections={rest} locale={locale} dict={dict} />

        <section aria-labelledby="faq-heading" className="mt-12">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-ink">
            {dict.common.faqHeading}
          </h2>
          <div className="mt-5">
            <Faqs faqs={home.faqs} locale={locale} />
          </div>
        </section>

        <div className="mt-12">
          <ContentSections sections={[home.conclusion]} locale={locale} dict={dict} />
        </div>
      </div>
    </>
  );
}
