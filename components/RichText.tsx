import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/lib/site-config";
import { allPageKeys, pathFor, type PageKey } from "@/lib/routes";

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
