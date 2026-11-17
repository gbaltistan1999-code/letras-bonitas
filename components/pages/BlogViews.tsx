import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { siteConfig, type Locale } from "@/lib/site-config";
import { absoluteUrl, pathFor } from "@/lib/routes";
import { blogPostPath, blogSlugs, postIdFromSlug, postIdsIn, type BlogPostId } from "@/lib/blog-routes";
import { fmt, getBlogPost, getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSections } from "@/components/ContentSections";
import { Faqs } from "@/components/Faqs";
import { JsonLd } from "@/components/JsonLd";

/** Posts published in this language, newest first; ties keep registry order. */
function sortedIds(locale: Locale): BlogPostId[] {
  return postIdsIn(locale).sort((a, b) => getBlogPost(locale, b).published.localeCompare(getBlogPost(locale, a).published));
}

/** Path of a post known to exist in this language. */
const pathIn = (locale: Locale, id: BlogPostId) => blogPostPath(locale, id)!;

function formatDate(locale: Locale, iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(siteConfig.localeMeta[locale].hreflang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostMeta({ locale, published, readMinutes }: { locale: Locale; published: string; readMinutes: number }) {
  const dict = getDictionary(locale);
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays aria-hidden="true" className="size-4" />
        <time dateTime={published}>{fmt(dict.blog.publishedOn, { date: formatDate(locale, published) })}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock aria-hidden="true" className="size-4" />
        {fmt(dict.blog.minRead, { n: readMinutes })}
      </span>
    </p>
  );
}

function PostCards({ locale, ids, headingLevel = 2 }: { locale: Locale; ids: BlogPostId[]; headingLevel?: 2 | 3 }) {
  const dict = getDictionary(locale);
  const H = `h${headingLevel}` as const;
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {ids.map((id) => {
        const p = getBlogPost(locale, id);
        return (
          <li key={id}>
            <Link
              href={pathIn(locale, id)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
            >
              {p.image ? (
                <Image
                  src={p.image.src}
                  alt=""
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 640px) 480px, 100vw"
                  className="-mx-6 -mt-6 mb-5 aspect-[1200/630] w-[calc(100%+3rem)] max-w-none object-cover"
                />
              ) : null}
              <PostMeta locale={locale} published={p.published} readMinutes={p.readMinutes} />
              <H className="mt-3 text-xl font-semibold leading-snug tracking-tight text-ink group-hover:text-accent">{p.title}</H>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                {dict.blog.readMore}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Blog index ---------- */

export function blogIndexMetadata(locale: Locale): Metadata {
  const { blog } = getDictionary(locale);
  return buildMetadata({ locale, key: "blog", title: blog.metaTitle, description: blog.metaDescription });
}

export function BlogIndexView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.common.home, path: pathFor(locale, "home") },
    { name: dict.blog.label, path: pathFor(locale, "blog") },
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 pt-6 sm:pt-8">
      <JsonLd data={graph(webPageSchema(locale, "blog", dict.blog.metaTitle, dict.blog.metaDescription), breadcrumbSchema(crumbs))} />
      <Breadcrumbs items={crumbs} label={dict.common.breadcrumbLabel} />
      <h1 className="text-brand mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{dict.blog.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">{dict.blog.intro}</p>
      <div className="mt-10">
        <PostCards locale={locale} ids={sortedIds(locale)} />
      </div>
    </div>
  );
}

/* ---------- Blog post ---------- */

export function blogPostStaticParams(locale: Locale) {
  return postIdsIn(locale).map((id) => ({ post: blogSlugs[id][locale]! }));
}

export function blogPostMetadata(locale: Locale, slug: string): Metadata {
  const id = postIdFromSlug(locale, slug);
  if (!id) return {};
  const p = getBlogPost(locale, id);
  return buildMetadata({
    locale,
    pathOf: (l) => blogPostPath(l, id),
    title: p.metaTitle,
    description: p.metaDescription,
    publishedTime: p.published,
    image: p.image,
  });
}

export function BlogPostView({ locale, slug }: { locale: Locale; slug: string }) {
  const id = postIdFromSlug(locale, slug);
  if (!id) notFound();
  const dict = getDictionary(locale);
  const p = getBlogPost(locale, id);
  const path = pathIn(locale, id);
  const available = postIdsIn(locale);
  const related = p.related.filter((r) => available.includes(r));
  const crumbs = [
    { name: dict.common.home, path: pathFor(locale, "home") },
    { name: dict.blog.label, path: pathFor(locale, "blog") },
    { name: p.title, path },
  ];

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-6 sm:pt-8">
        <JsonLd
          data={graph(
            blogPostingSchema(locale, {
              url: absoluteUrl(path),
              title: p.title,
              description: p.metaDescription,
              published: p.published,
              image: p.image?.src,
            }),
            breadcrumbSchema(crumbs),
            ...(p.faqs?.length ? [faqSchema(p.faqs)] : []),
          )}
        />
        <Breadcrumbs items={crumbs} label={dict.common.breadcrumbLabel} />
        <h1 className="text-brand mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{p.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {siteConfig.owner.name ? (
            <p className="text-sm text-ink-soft">
              {dict.blog.byline}{" "}
              <Link href={pathFor(locale, "author")} className="font-semibold text-accent underline-offset-4 hover:underline">
                {siteConfig.owner.name}
              </Link>
            </p>
          ) : null}
          <PostMeta locale={locale} published={p.published} readMinutes={p.readMinutes} />
        </div>
        {p.image ? (
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="mt-6 w-full rounded-2xl border border-line shadow-sm"
          />
        ) : null}
        <p className="mt-6 text-lg leading-8 text-ink-soft">{p.intro}</p>

        <div className="mt-10">
          <ContentSections sections={p.sections} locale={locale} dict={dict} />
        </div>

        {p.faqs?.length ? (
          <section aria-labelledby="post-faq" className="mt-12">
            <h2 id="post-faq" className="text-2xl font-semibold tracking-tight text-ink">
              {dict.common.faqHeading}
            </h2>
            <div className="mt-4">
              <Faqs faqs={p.faqs} locale={locale} />
            </div>
          </section>
        ) : null}

        {p.outro ? (
          <div className="mt-12">
            <ContentSections sections={[p.outro]} locale={locale} dict={dict} />
          </div>
        ) : null}

        <aside className="mt-12 rounded-3xl border border-purple-100 bg-linear-to-br from-purple-100/70 via-pink-50 to-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-xl font-semibold text-ink">{dict.blog.ctaTitle}</p>
          <p className="mt-2 text-ink-soft">{dict.blog.ctaText}</p>
          <Link
            href={pathFor(locale, "home")}
            className="bg-brand mt-5 inline-flex h-12 items-center gap-2 rounded-xl px-6 font-semibold text-white shadow-lg shadow-purple-200 hover:opacity-90"
          >
            {dict.blog.ctaButton}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </aside>
      </article>

      {related.length ? (
        <section aria-labelledby="related-posts" className="mx-auto mt-14 max-w-5xl px-4">
          <h2 id="related-posts" className="text-2xl font-semibold tracking-tight text-ink">
            {dict.blog.relatedHeading}
          </h2>
          <div className="mt-5">
            <PostCards locale={locale} ids={related} headingLevel={3} />
          </div>
          <p className="mt-8">
            <Link href={pathFor(locale, "blog")} className="font-medium text-accent underline-offset-4 hover:underline">
              ← {dict.blog.allPosts}
            </Link>
          </p>
        </section>
      ) : null}
    </>
  );
}
