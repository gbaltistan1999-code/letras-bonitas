"use client";

import { useId, useMemo, useRef, useState } from "react";
import { Check, Copy, Shuffle, Space, X } from "lucide-react";
import { copyToClipboard, selectElementText } from "@/lib/clipboard";
import {
  FF_MAX_LENGTH,
  INVISIBLE_SPACE,
  applyTemplate,
  ffFilters,
  ffLength,
  ffTemplates,
  namesForFilter,
  type FfFilter,
} from "@/lib/free-fire-names";

const SAMPLE = "Lobo";
const FILTER_LABELS: Record<FfFilter, string> = {
  todos: "Todos",
  hombre: "Hombre",
  mujer: "Mujer",
  gamer: "Gamer",
  aesthetic: "Aesthetic",
  clan: "Clan",
};

/** Name generator for /nombres-para-free-fire (Spanish only). */
export function FreeFireNamesGenerator() {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState<FfFilter>("todos");
  const [random, setRandom] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [announce, setAnnounce] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const base = name.trim() === "" ? SAMPLE : name;
  const results = useMemo(
    () =>
      ffTemplates
        .filter((t) => filter === "todos" || t.tags.includes(filter as Exclude<FfFilter, "todos">))
        .map((t) => applyTemplate(t.pattern, base)),
    [base, filter],
  );

  const insertInvisible = () => {
    const el = inputRef.current;
    const start = el?.selectionStart ?? name.length;
    const end = el?.selectionEnd ?? name.length;
    const next = name.slice(0, start) + INVISIBLE_SPACE + name.slice(end);
    setName(next);
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(start + 1, start + 1);
    });
  };

  const pickRandom = () => {
    const pool = namesForFilter(filter).filter((n) => n !== random);
    setRandom(pool[Math.floor(Math.random() * pool.length)]);
  };

  const copy = async (text: string, el: HTMLElement | null) => {
    const ok = await copyToClipboard(text);
    if (timer.current) clearTimeout(timer.current);
    if (ok) {
      setCopied(text);
      setAnnounce(`Copiado: ${text}`);
      timer.current = setTimeout(() => setCopied(null), 1600);
    } else {
      if (el) selectElementText(el);
      setAnnounce("No se pudo copiar automáticamente: el nombre quedó seleccionado, cópialo manualmente.");
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-surface p-3 shadow-sm sm:p-5">
      <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-ink">
        Escribe tu nombre
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={SAMPLE}
            maxLength={24}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="done"
            className="h-14 w-full rounded-xl border border-line bg-page pl-4 pr-12 text-lg text-ink shadow-inner placeholder:text-muted/80 focus:border-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
          />
          {name ? (
            <button
              type="button"
              onClick={() => {
                setName("");
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 right-2 my-auto inline-flex size-10 items-center justify-center rounded-lg text-muted hover:bg-surface-2"
            >
              <X aria-hidden="true" className="size-4" />
              <span className="sr-only">Borrar</span>
            </button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={insertInvisible}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-line bg-page px-4 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
        >
          <Space aria-hidden="true" className="size-4" />
          Espacio invisible
        </button>
      </div>
      <p className="mt-2 text-sm text-muted">
        El contador es aproximado: cuenta como 2 los caracteres que ocupan doble (emojis y algunas letras especiales). El juego tiene la última palabra.
      </p>

      <div role="group" aria-label="Filtrar estilos" className="-mx-3 mt-4 overflow-x-auto px-3 pb-1 sm:-mx-5 sm:px-5">
        <div className="flex w-max gap-2">
          {ffFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`h-10 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors ${
                filter === f ? "border-accent bg-accent text-white" : "border-line bg-page text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
          <button
            type="button"
            onClick={pickRandom}
            className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-4 text-sm font-semibold text-white hover:bg-ink-soft"
          >
            <Shuffle aria-hidden="true" className="size-4" />
            Generar al azar
          </button>
        </div>
      </div>

      {random ? (
        <div className="mt-4">
          <p className="mb-1.5 text-sm font-semibold text-ink">Nombre al azar{filter !== "todos" ? ` (${FILTER_LABELS[filter]})` : ""}</p>
          <ul>
            <NameResult text={random} copied={copied === random} onCopy={copy} highlight />
          </ul>
        </div>
      ) : null}

      {name.trim() === "" ? (
        <p className="mt-4 text-sm text-muted">Vista previa con «{SAMPLE}». Escribe tu nombre arriba para ver el tuyo.</p>
      ) : null}
      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((r) => (
          <NameResult key={r} text={r} copied={copied === r} onCopy={copy} />
        ))}
      </ul>
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
    </div>
  );
}

function NameResult({
  text,
  copied,
  onCopy,
  highlight,
}: {
  text: string;
  copied: boolean;
  onCopy: (text: string, el: HTMLElement | null) => void;
  highlight?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const len = ffLength(text);
  const tooLong = len > FF_MAX_LENGTH;
  return (
    <li
      className={`flex min-h-[4.5rem] items-center gap-2 rounded-[var(--radius-card)] border bg-page p-3 pl-4 ${
        tooLong ? "border-red-300" : highlight ? "border-accent" : "border-line"
      }`}
    >
      <div className="min-w-0 flex-1">
        <p ref={ref} className="fancy-output text-lg !leading-loose text-ink">
          {text}
        </p>
        <p className={`mt-2.5 text-xs font-medium ${tooLong ? "text-red-700" : "text-muted"}`}>
          <span className="tabular-nums">
            {len}/{FF_MAX_LENGTH}
          </span>
          {tooLong ? " · Demasiado largo para Free Fire" : null}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onCopy(text, ref.current)}
        aria-label={`${copied ? "¡Copiado!" : "Copiar"}: ${text}`}
        className={`inline-flex h-11 min-w-[5.75rem] shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-white transition-colors ${
          copied ? "bg-success" : "bg-accent hover:bg-accent-strong"
        }`}
      >
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
        {copied ? "¡Copiado!" : "Copiar"}
      </button>
    </li>
  );
}
