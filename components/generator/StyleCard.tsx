"use client";

import { memo, useRef } from "react";
import { Check, Copy, Heart } from "lucide-react";
import type { StyleId } from "@/lib/unicode/styles";

interface Props {
  id: StyleId;
  name: string;
  output: string;
  copied: boolean;
  favorite: boolean;
  labels: { copy: string; copied: string; addFavorite: string; removeFavorite: string };
  onCopy: (id: StyleId, output: string, name: string, el: HTMLElement | null) => void;
  onToggleFavorite: (id: StyleId) => void;
}

/** One result row: style name, converted text, favorite toggle and a large copy button. */
export const StyleCard = memo(function StyleCard({ id, name, output, copied, favorite, labels, onCopy, onToggleFavorite }: Props) {
  const outRef = useRef<HTMLParagraphElement>(null);
  return (
    <li className="flex min-h-[4.75rem] items-center gap-2 rounded-[var(--radius-card)] border border-line bg-page p-3 pl-4 transition-colors hover:border-accent/50">
      <div className="min-w-0 flex-1">
        <div className="-my-1 flex items-center gap-1">
          <p className="truncate text-xs font-medium uppercase tracking-wide text-muted">{name}</p>
          <button
            type="button"
            onClick={() => onToggleFavorite(id)}
            aria-pressed={favorite}
            aria-label={`${favorite ? labels.removeFavorite : labels.addFavorite}: ${name}`}
            title={favorite ? labels.removeFavorite : labels.addFavorite}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-accent"
          >
            <Heart aria-hidden="true" className={`size-4 ${favorite ? "fill-accent text-accent" : ""}`} />
          </button>
        </div>
        <p ref={outRef} className="fancy-output text-lg text-ink sm:text-xl">
          {output}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onCopy(id, output, name, outRef.current)}
        aria-label={`${copied ? labels.copied : labels.copy}: ${name}`}
        className={`inline-flex h-11 min-w-[5.75rem] shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition-colors ${
          copied ? "bg-success text-white" : "bg-brand text-white hover:opacity-90"
        }`}
      >
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
        {copied ? labels.copied : labels.copy}
      </button>
    </li>
  );
});
