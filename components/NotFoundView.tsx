import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { pathFor } from "@/lib/routes";
import { getDictionary, pageLabel } from "@/lib/i18n";

/** Localized 404 content with links to the generator and popular pages. */
export function NotFoundView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const popular = (["nick", "freefire", "cursive", "gothic", "instagram"] as const).map((k) => ({
    href: pathFor(locale, k),
    label: pageLabel(locale, k),
  }));
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p aria-hidden="true" className="fancy-output text-5xl font-semibold text-accent">
        𝟒𝟎𝟒
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">{dict.notFound.title}</h1>
      <p className="mt-4 leading-7 text-ink-soft">{dict.notFound.text}</p>
      <Link
        href={pathFor(locale, "home")}
        className="mt-8 inline-flex h-12 items-center rounded-xl bg-accent px-6 font-semibold text-white hover:bg-accent-strong"
      >
        {dict.notFound.home}
      </Link>
      <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-muted">{dict.notFound.popular}</h2>
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {popular.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-ink-soft hover:border-accent hover:text-accent"
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
