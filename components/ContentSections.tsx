import { Info } from "lucide-react";
import type { Block, Section } from "@/types/content";
import type { Dictionary } from "@/types/dictionary";
import { siteConfig, type Locale } from "@/lib/site-config";
import { transform } from "@/lib/unicode/styles";
import { RichText } from "./RichText";

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
    <div className="mt-4 flex gap-4 rounded-2xl border border-line bg-surface p-5">
      <span
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white"
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
}: {
  sections: Section[];
  locale: Locale;
  dict: Dictionary;
  headingLevel?: 2 | 3;
}) {
  const H = `h${headingLevel}` as const;
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} aria-labelledby={slugify(section.heading)} className="prose-lh mt-12 first:mt-0">
          <H id={slugify(section.heading)} className="text-2xl font-semibold tracking-tight text-ink">
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
