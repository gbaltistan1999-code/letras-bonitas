import type { FAQ } from "@/types/content";
import type { Locale } from "@/lib/site-config";
import { RichText } from "./RichText";

/** FAQ list built on <details>: accessible and works without JavaScript. */
export function Faqs({ faqs, locale }: { faqs: FAQ[]; locale: Locale }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-page">
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 py-4 open:bg-surface/60">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 select-none text-xl leading-none text-accent transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="prose-lh mt-2 leading-7 text-ink-soft">
            <RichText text={f.a} locale={locale} />
          </p>
        </details>
      ))}
    </div>
  );
}
