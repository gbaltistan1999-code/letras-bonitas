import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface LinkCard {
  href: string;
  title: string;
  text?: string;
  /** Short stylized preview shown on the card (decorative). */
  preview?: string;
}

/** Grid of internal link cards (style pages, related pages). */
export function PageLinkCards({ cards }: { cards: LinkCard[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <li key={c.href}>
          <Link
            href={c.href}
            className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-page p-4 transition-colors hover:border-accent hover:bg-accent-soft/40"
          >
            {c.preview ? (
              <span aria-hidden="true" className="fancy-output mb-1 text-lg text-accent">
                {c.preview}
              </span>
            ) : null}
            <span className="flex items-center justify-between gap-2 font-semibold text-ink">
              {c.title}
              <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
            </span>
            {c.text ? <span className="mt-1 text-sm leading-6 text-muted">{c.text}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
