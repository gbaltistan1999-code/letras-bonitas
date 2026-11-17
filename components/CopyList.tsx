"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyToClipboard, selectElementText } from "@/lib/clipboard";
import type { CopyItem } from "@/types/content";

/**
 * Ready-made styled lines (used in blog posts), each with its own Copy button.
 * If the clipboard is unavailable the line is selected so it can be copied by hand.
 */
export function CopyList({ items: raw, labels }: { items: CopyItem[]; labels: { copy: string; copied: string } }) {
  const items = raw.map((it) => (typeof it === "string" ? { label: "", text: it } : it));
  const [copied, setCopied] = useState<number | null>(null);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy(i: number) {
    const ok = await copyToClipboard(items[i].text);
    if (!ok) {
      const el = refs.current[i];
      if (el) selectElementText(el);
      return;
    }
    setCopied(i);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1600);
  }

  return (
    <ul className="not-prose mt-4 space-y-2 !pl-0">
      {items.map((item, i) => (
        <li
          key={item.text}
          className="flex list-none items-center gap-3 rounded-xl border border-line bg-white/80 py-2 pl-4 pr-2 shadow-sm"
        >
          <div className="min-w-0 flex-1">
            {item.label ? <p className="!mt-0 text-xs font-medium uppercase tracking-wide !text-muted">{item.label}</p> : null}
            <p
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="fancy-output !mt-0 text-lg !text-ink"
            >
              {item.text}
            </p>
          </div>
          <button
            type="button"
            onClick={() => copy(i)}
            aria-label={`${copied === i ? labels.copied : labels.copy}: ${item.label || item.text}`}
            className={`inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors ${
              copied === i ? "bg-success text-white" : "bg-brand text-white hover:opacity-90"
            }`}
          >
            {copied === i ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
            {copied === i ? labels.copied : labels.copy}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied === i ? labels.copied : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}
