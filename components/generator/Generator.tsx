"use client";

import { useCallback, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { Lock, X } from "lucide-react";
import { categoryIds, styles, styleById, type CategoryId, type StyleId } from "@/lib/unicode/styles";
import { codePointLength } from "@/lib/unicode/transform";
import { copyToClipboard, selectElementText } from "@/lib/clipboard";
import type { Dictionary } from "@/types/dictionary";
import { StyleCard } from "./StyleCard";

type Filter = "recommended" | "all" | CategoryId;

export interface GeneratorProps {
  strings: Dictionary["generator"];
  styleNames: Dictionary["styleNames"];
  /** Preview text used while the input is empty. */
  sample: string;
  /** Styles listed under "Recommended". If omitted, the generator opens on "All". */
  featured?: StyleId[];
  initialCategory?: CategoryId;
  maxLength: number;
}

const COLLAPSED_COUNT = 16;

const fill = (t: string, v: Record<string, string | number>) => t.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ""));

/** Keep only the first `max` code points (never cuts an emoji in half). */
function clampCodePoints(text: string, max: number) {
  return [...text].slice(0, max).join("");
}

export function Generator({ strings, styleNames, sample, featured, initialCategory, maxLength }: GeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const [text, setText] = useState("");
  const [tooLong, setTooLong] = useState(false);
  const [filter, setFilter] = useState<Filter>(initialCategory ?? (featured?.length ? "recommended" : "all"));
  const [expanded, setExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<StyleId | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const [manualHint, setManualHint] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flip = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Defer the (cheap) transforms so typing always stays responsive.
  const deferredText = useDeferredValue(text);
  const source = deferredText.trim() === "" ? sample : deferredText;
  const isPreview = text.trim() === "";

  const visible = useMemo(() => {
    let list;
    if (filter === "recommended") list = (featured ?? []).map(styleById);
    else if (filter === "all") list = styles;
    else list = styles.filter((s) => s.category === filter);
    return list;
  }, [filter, featured]);

  const collapsible = filter === "all" && visible.length > COLLAPSED_COUNT;
  const shown = collapsible && !expanded ? visible.slice(0, COLLAPSED_COUNT) : visible;

  const outputs = useMemo(() => shown.map((s) => ({ id: s.id, output: s.apply(source) })), [shown, source]);

  const onChange = (value: string) => {
    if (codePointLength(value) > maxLength) {
      setText(clampCodePoints(value, maxLength));
      setTooLong(true);
    } else {
      setText(value);
      setTooLong(false);
    }
  };

  const onCopy = useCallback(
    async (id: StyleId, output: string, name: string, el: HTMLElement | null) => {
      const ok = await copyToClipboard(output);
      if (timer.current) clearTimeout(timer.current);
      if (ok) {
        setManualHint(false);
        setCopiedId(id);
        // Alternate a trailing no-break space so repeated copies are re-announced.
        flip.current = !flip.current;
        setAnnouncement(fill(strings.copiedAnnouncement, { style: name }) + (flip.current ? " " : ""));
        timer.current = setTimeout(() => setCopiedId(null), 1800);
      } else {
        if (el) selectElementText(el);
        setManualHint(true);
        setAnnouncement(strings.copyManual);
      }
    },
    [strings],
  );

  const chips: { id: Filter; label: string }[] = [
    ...(featured?.length ? [{ id: "recommended" as const, label: strings.recommended }] : []),
    { id: "all", label: strings.all },
    ...categoryIds.map((c) => ({ id: c, label: strings.categories[c] })),
  ];

  const count = codePointLength(text);

  return (
    <div className="rounded-2xl border border-line bg-surface p-3 shadow-sm sm:p-5">
      {/* Input */}
      <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-ink">
        {strings.inputLabel}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={strings.placeholder}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="done"
          aria-describedby={hintId}
          aria-invalid={tooLong || undefined}
          className="h-14 w-full rounded-xl border border-line bg-page pl-4 pr-24 text-lg text-ink shadow-inner placeholder:text-muted/80 focus:border-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
        />
        <div className="absolute inset-y-0 right-2 flex items-center gap-1">
          <span className="hidden text-xs tabular-nums text-muted sm:inline" aria-hidden="true">
            {fill(strings.counter, { count, max: maxLength })}
          </span>
          {text ? (
            <button
              type="button"
              onClick={() => {
                setText("");
                setTooLong(false);
                inputRef.current?.focus();
              }}
              className="inline-flex h-10 items-center gap-1 rounded-lg px-2.5 text-sm font-medium text-ink-soft hover:bg-surface-2"
            >
              <X aria-hidden="true" className="size-4" />
              {strings.clear}
            </button>
          ) : null}
        </div>
      </div>
      <div id={hintId} className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
        <p className="flex items-center gap-1.5 text-muted">
          <Lock aria-hidden="true" className="size-3.5 shrink-0" />
          {strings.privacyNote}
        </p>
        {tooLong ? (
          <p role="alert" className="font-medium text-warn-ink">
            {fill(strings.tooLong, { max: maxLength })}
          </p>
        ) : null}
      </div>

      {/* Category chips */}
      <div role="group" aria-label={strings.filterLabel} className="-mx-3 mt-4 overflow-x-auto px-3 pb-1 sm:-mx-5 sm:px-5">
        <div className="flex w-max gap-2">
          {chips.map((chip) => {
            const active = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(chip.id);
                  setExpanded(false);
                }}
                className={`h-10 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-page text-ink-soft hover:border-accent hover:text-accent"
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <h2 className="sr-only">{strings.resultsLabel}</h2>
      {isPreview ? <p className="mt-4 text-sm text-muted">{strings.previewHint}</p> : null}
      <ul className="mt-3 grid gap-2.5 lg:grid-cols-2" aria-live="off">
        {outputs.map(({ id, output }) => (
          <StyleCard
            key={id}
            id={id}
            name={styleNames[id]}
            output={output}
            copied={copiedId === id}
            copyLabel={strings.copy}
            copiedLabel={strings.copied}
            onCopy={onCopy}
          />
        ))}
      </ul>
      {collapsible ? (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex h-11 items-center rounded-xl border border-line bg-page px-5 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
          >
            {expanded ? strings.showLess : `${strings.showMore} (+${visible.length - COLLAPSED_COUNT})`}
          </button>
        </div>
      ) : null}
      {manualHint ? (
        <p role="status" className="mt-3 rounded-lg border border-warn-line bg-warn-bg p-3 text-sm text-warn-ink">
          {strings.copyManual}
        </p>
      ) : null}
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
