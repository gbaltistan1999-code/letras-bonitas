import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/lib/site-config";
import { allPageKeys, pathFor, SINGLE_LANGUAGE_PATHS, type PageKey } from "@/lib/routes";
import { blogPostPath, type BlogPostId } from "@/lib/blog-routes";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders text with inline links written as [anchor](pageKey) or [anchor](https://…).
 * Unknown page keys throw at build time so broken internal links can't ship.
 */
export function RichText({ text, locale }: { text: string; locale: Locale }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, anchor, target] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (/^https?:\/\//.test(target)) {
      parts.push(
        <a key={index} href={target} target="_blank" rel="noopener noreferrer">
          {anchor}
        </a>,
      );
    } else if (target.startsWith("blog:")) {
      // [anchor](blog:postId) → that post in the current language.
      const href = blogPostPath(locale, target.slice(5) as BlogPostId);
      if (!href) throw new Error(`RichText: blog post "${target}" not published in "${locale}"`);
      parts.push(
        <Link key={index} href={href}>
          {anchor}
        </Link>,
      );
    } else if (target.startsWith("/")) {
      // [anchor](/path) → single-language pages outside the page registry.
      if (!SINGLE_LANGUAGE_PATHS.includes(target)) throw new Error(`RichText: unknown internal path "${target}"`);
      parts.push(
        <Link key={index} href={target}>
          {anchor}
        </Link>,
      );
    } else {
      if (!allPageKeys.includes(target as PageKey)) throw new Error(`RichText: unknown page key "${target}" in "${text}"`);
      parts.push(
        <Link key={index} href={pathFor(locale, target as PageKey)}>
          {anchor}
        </Link>,
      );
    }
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => (typeof p === "string" ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>;
}
