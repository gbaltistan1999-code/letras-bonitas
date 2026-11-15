import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig, type Locale } from "@/lib/site-config";
import { pathFor, type InfoPageKey } from "@/lib/routes";
import { getDictionary, getInfoPages } from "@/lib/i18n";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSections } from "@/components/ContentSections";
import { ContactForm } from "@/components/ContactForm";
import { Faqs } from "@/components/Faqs";
import { JsonLd } from "@/components/JsonLd";

/** About, contact, FAQ and legal pages. */
export function InfoPageView({ locale, pageKey }: { locale: Locale; pageKey: InfoPageKey }) {
  const dict = getDictionary(locale);
  const info = getInfoPages(locale);
  const page = info[pageKey];
  const crumbs = [
    { name: dict.common.home, path: pathFor(locale, "home") },
    { name: page.label, path: pathFor(locale, pageKey) },
  ];
  const updated = new Date(`${siteConfig.legalLastUpdated}T12:00:00Z`).toLocaleDateString(siteConfig.localeMeta[locale].hreflang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
      <JsonLd data={graph(webPageSchema(locale, pageKey, page.metaTitle, page.metaDescription), breadcrumbSchema(crumbs))} />
      <Breadcrumbs items={crumbs} label={dict.common.breadcrumbLabel} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{page.h1}</h1>
      {page.showUpdated ? (
        <p className="mt-2 text-sm text-muted">
          {dict.common.lastUpdated}: <time dateTime={siteConfig.legalLastUpdated}>{updated}</time>
        </p>
      ) : null}
      {page.intro ? <p className="mt-4 text-lg leading-8 text-ink-soft">{page.intro}</p> : null}

      {pageKey === "contact" ? (
        <div className="mt-8 rounded-2xl border border-line p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.contact.emailLabel}</h2>
          {siteConfig.contactEmail ? (
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-accent underline-offset-4 hover:underline"
            >
              <Mail aria-hidden="true" className="size-5" />
              {siteConfig.contactEmail}
            </a>
          ) : (
            <p className="mt-2 rounded-lg border border-warn-line bg-warn-bg p-3 text-sm font-medium text-warn-ink">
              {dict.contact.emailPending}
            </p>
          )}
        </div>
      ) : null}

      {page.sections.length ? (
        <div className="mt-10">
          <ContentSections sections={page.sections} locale={locale} dict={dict} />
        </div>
      ) : null}

      {pageKey === "faq"
        ? info.faq.groups.map((g) => (
            <section key={g.heading} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{g.heading}</h2>
              <div className="mt-4">
                <Faqs faqs={g.faqs} locale={locale} />
              </div>
            </section>
          ))
        : null}

      {pageKey === "contact" ? (
        <div className="mt-10">
          <ContactForm email={siteConfig.contactEmail} strings={dict.contact} />
        </div>
      ) : null}

      <p className="mt-12">
        <Link href={pathFor(locale, "home")} className="font-medium text-accent underline-offset-4 hover:underline">
          ← {dict.common.backToGenerator}
        </Link>
      </p>
    </article>
  );
}
