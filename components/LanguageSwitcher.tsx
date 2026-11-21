"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, siteConfig, type Locale } from "@/lib/site-config";
import { parsePath, pathFor } from "@/lib/routes";
import { blogPostPath } from "@/lib/blog-routes";

/**
 * Links to the SAME page in the other languages (not just their homepages).
 * Pure links: no automatic redirects, so crawlers can follow every version.
 */
export function useAlternateLinks() {
  const pathname = usePathname() ?? "/";
  const { locale: current, key, postId, spanishOnly } = parsePath(pathname);
  return locales.map((l) => ({
    locale: l,
    // A post not published in that language falls back to its blog index;
    // a Spanish-only page falls back to its closest page in that language.
    href: spanishOnly
      ? l === "es"
        ? spanishOnly.path
        : pathFor(l, spanishOnly.fallback)
      : postId
        ? (blogPostPath(l, postId) ?? pathFor(l, "blog"))
        : pathFor(l, key ?? "home"),
    current: l === current,
  }));
}

export function LanguageSwitcher({ label, variant = "inline" }: { label: string; variant?: "inline" | "list" }) {
  const links = useAlternateLinks();
  if (variant === "list") {
    return (
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.locale}>
            <LangLink {...l} className="text-sm text-ink-soft hover:text-accent" full />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <nav
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-line bg-surface p-1"
    >
      <span className="flex items-center pl-2 pr-1.5" aria-hidden="true">
        <Globe className="size-4 text-muted" />
      </span>
      {links.map((l) => (
        <LangLink
          key={l.locale}
          {...l}
          full
          className={`whitespace-nowrap rounded-full px-3 py-1 text-center text-sm font-medium transition-colors ${
            l.current
              ? "bg-brand text-white shadow-sm shadow-purple-200"
              : "text-ink-soft hover:bg-page hover:text-ink"
          }`}
        />
      ))}
    </nav>
  );
}

function LangLink({
  locale,
  href,
  current,
  className,
  full,
}: {
  locale: Locale;
  href: string;
  current: boolean;
  className?: string;
  full?: boolean;
}) {
  const meta = siteConfig.localeMeta[locale];
  return (
    <Link
      href={href}
      hrefLang={meta.hreflang}
      lang={meta.htmlLang}
      aria-current={current ? "true" : undefined}
      title={meta.label}
      className={className}
    >
      {full ? meta.label : <><span aria-hidden="true">{meta.short}</span><span className="sr-only">{meta.label}</span></>}
    </Link>
  );
}
