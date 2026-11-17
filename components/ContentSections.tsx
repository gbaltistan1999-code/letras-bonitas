import { Info, Target } from "lucide-react";
import type { Block, Section } from "@/types/content";
import type { Dictionary } from "@/types/dictionary";
import { siteConfig, type Locale } from "@/lib/site-config";
import { transform } from "@/lib/unicode/styles";
import { RichText } from "./RichText";
import { CopyList } from "./CopyList";

/** Turns a heading into a stable, URL-safe id (accents removed). */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function BlockView({ block, locale, dict }: { block: Block; locale: Locale; dict: Dictionary }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} locale={locale} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} locale={locale} />
            </li>
          ))}
        </List>
      );
    }
    case "note":
      return (
        <div className="mt-4 flex gap-3 rounded-xl border border-line bg-surface p-4 text-sm leading-6 text-ink-soft">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
          <p className="!mt-0">
            <RichText text={block.text} locale={locale} />
          </p>
        </div>
      );
    case "examples":
      // Real output from the same engine the generator uses, rendered at build time.
      return (
        <div className="mt-4 overflow-hidden rounded-xl border border-line">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">
              {dict.common.exampleInput}: {block.text}
            </caption>
            <tbody>
              {block.styles.map((id) => (
                <tr key={id} className="border-b border-line last:border-0">
                  <th scope="row" className="w-2/5 bg-surface px-4 py-3 align-top font-medium text-muted sm:w-1/3">
                    {dict.styleNames[id]}
                  </th>
                  <td className="fancy-output px-4 py-3 text-base text-ink">{transform(block.text, id)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "copy":
      return <CopyList items={block.items} labels={{ copy: dict.generator.copy, copied: dict.generator.copied }} />;
    case "owner":
      return <OwnerBlock locale={locale} dict={dict} />;
  }
}

/** Owner name and bio from site config, or a clearly marked placeholder. */
function OwnerBlock({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { name, bio } = siteConfig.owner;
  if (!name || !bio[locale]) {
    return (
      <p className="!mt-3 rounded-xl border border-warn-line bg-warn-bg p-4 text-sm font-medium !text-warn-ink">
        {dict.pending.author}
      </p>
    );
  }
  return (
    <div className="mt-4 flex gap-4 rounded-2xl border border-line bg-white/80 p-5 shadow-sm">
      <span
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-bold text-white"
      >
        {name.trim().charAt(0).toUpperCase()}
      </span>
      <div className="min-w-0">
        <p className="!mt-0 text-lg font-semibold !text-ink">{name}</p>
        <p className="!mt-1">{bio[locale]}</p>
      </div>
    </div>
  );
}

export function ContentSections({
  sections,
  locale,
  dict,
  headingLevel = 2,
  boxed = false,
}: {
  sections: Section[];
  locale: Locale;
  dict: Dictionary;
  headingLevel?: 2 | 3;
  /** Render each section as its own bordered card (author page). */
  boxed?: boolean;
}) {
  const H = `h${headingLevel}` as const;
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.heading}
          aria-labelledby={slugify(section.heading)}
          className={
            boxed
              ? "prose-lh mt-8 rounded-2xl border-2 border-purple-200 bg-white/80 p-6 shadow-sm shadow-purple-100 first:mt-0 sm:p-10"
              : "prose-lh mt-12 first:mt-0"
          }
        >
          {section.featured ? (
            <span
              aria-hidden="true"
              className="bg-brand mx-auto mb-4 flex size-12 items-center justify-center rounded-full text-white shadow-md shadow-purple-200"
            >
              <Target className="size-6" />
            </span>
          ) : null}
          <H
            id={slugify(section.heading)}
            className={`font-bold tracking-tight text-ink ${boxed ? "text-2xl sm:text-3xl" : "text-2xl font-semibold"} ${section.featured ? "text-center" : ""}`}
          >
            {section.heading}
          </H>
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} locale={locale} dict={dict} />
          ))}
        </section>
      ))}
    </>
  );
}
