"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { copyToClipboard, selectElementText } from "@/lib/clipboard";

/**
 * Grid of ready-made names: tap a name to copy it. Pairs are shown side by
 * side, each half copyable on its own.
 */
export function NameChips({ names, pairs }: { names?: string[]; pairs?: [string, string][] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [announce, setAnnounce] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async (text: string, el: HTMLElement) => {
    const ok = await copyToClipboard(text);
    if (timer.current) clearTimeout(timer.current);
    if (ok) {
      setCopied(text);
      setAnnounce(`Copiado: ${text}`);
      timer.current = setTimeout(() => setCopied(null), 1400);
    } else {
      selectElementText(el);
      setAnnounce("No se pudo copiar automáticamente: el nombre quedó seleccionado.");
    }
  };

  const chip = (text: string) => (
    <button
      key={text}
      type="button"
      onClick={(e) => copy(text, e.currentTarget.querySelector("span") ?? e.currentTarget)}
      aria-label={`Copiar ${text}`}
      title="Toca para copiar"
      className={`inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-base transition-colors ${
        copied === text ? "border-success bg-success/10 text-success" : "border-line bg-page text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {copied === text ? <Check aria-hidden="true" className="size-4 shrink-0" /> : null}
      <span className="fancy-output !leading-loose">{text}</span>
    </button>
  );

  return (
    <>
      {names ? (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {names.map((n) => (
            <li key={n}>{chip(n)}</li>
          ))}
        </ul>
      ) : null}
      {pairs ? (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {pairs.map(([a, b]) => (
            <li key={a + b} className="grid grid-cols-2 gap-2">
              {chip(a)}
              {chip(b)}
            </li>
          ))}
        </ul>
      ) : null}
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
    </>
  );
}
