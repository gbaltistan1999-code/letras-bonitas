"use client";

import { memo, useRef } from "react";
import { Check, Copy } from "lucide-react";
import type { StyleId } from "@/lib/unicode/styles";

interface Props {
  id: StyleId;
  name: string;
  output: string;
  copied: boolean;
  copyLabel: string;
  copiedLabel: string;
  onCopy: (id: StyleId, output: string, name: string, el: HTMLElement | null) => void;
}

/** One result row: style name, converted text and a large copy button. */
export const StyleCard = memo(function StyleCard({ id, name, output, copied, copyLabel, copiedLabel, onCopy }: Props) {
  const outRef = useRef<HTMLParagraphElement>(null);
  return (
    <li className="flex min-h-[4.75rem] items-center gap-3 rounded-[var(--radius-card)] border border-line bg-page p-3 pl-4 transition-colors hover:border-accent/50">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{name}</p>
        <p ref={outRef} className="fancy-output mt-0.5 text-lg text-ink sm:text-xl">
          {output}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onCopy(id, output, name, outRef.current)}
        aria-label={`${copied ? copiedLabel : copyLabel}: ${name}`}
        className={`inline-flex h-11 min-w-[6.25rem] shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition-colors ${
          copied ? "bg-success text-white" : "bg-accent text-white hover:bg-accent-strong"
        }`}
      >
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
        {copied ? copiedLabel : copyLabel}
      </button>
    </li>
  );
});
