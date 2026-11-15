"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, siteConfig, type Locale } from "@/lib/site-config";
import { parsePath, pathFor } from "@/lib/routes";

/**
 * Links to the SAME page in the other languages (not just their homepages).
 * Pure links: no automatic redirects, so crawlers can follow every version.
 */
export function useAlternateLinks() {
  const pathname = usePathname() ?? "/";
  const { locale: current, key } = parsePath(pathname);
  return locales.map((l) => ({
    locale: l,
    href: pathFor(l, key ?? "home"),
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
    <nav aria-label={label} className="flex items-center gap-1">
      <Globe aria-hidden="true" className="mr-0.5 size-4 text-muted" />
      {links.map((l) => (
        <LangLink
          key={l.locale}
          {...l}
          className={`rounded-md px-2 py-1.5 text-sm font-medium ${
            l.current ? "bg-accent-soft text-accent" : "text-ink-soft hover:bg-surface hover:text-ink"
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
