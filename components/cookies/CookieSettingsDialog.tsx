"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { clearConsent, saveConsent, type Consent, type OptionalCategory } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "@/types/dictionary";

/**
 * Settings panel on a native <dialog> (built-in focus trap, Esc to close,
 * focus returns to the opener). Reopened from the footer at any time.
 */
export function CookieSettingsDialog({
  open,
  onClose,
  consent,
  strings,
  privacyHref,
  dateLocale,
}: {
  open: boolean;
  onClose: () => void;
  consent: Consent | null;
  strings: Dictionary["cookies"];
  privacyHref: string;
  dateLocale: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Load the saved choice into the form each time the panel opens.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setDraft({ analytics: consent?.analytics ?? false, marketing: consent?.marketing ?? false });
      setStatus("");
    }
  }

  const save = (choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setDraft(choice);
    setStatus(strings.saved);
    onClose();
  };

  const categories: { id: OptionalCategory; title: string; text: string }[] = [
    { id: "analytics", title: strings.analyticsTitle, text: strings.analyticsText },
    { id: "marketing", title: strings.marketingTitle, text: strings.marketingText },
  ];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby="cookie-settings-title"
      className="m-auto w-[min(100%-2rem,36rem)] rounded-2xl border border-line bg-page p-0 text-ink shadow-xl"
    >
      <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-settings-title" className="text-xl font-semibold">
            {strings.settingsTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 -mt-1 inline-flex size-10 items-center justify-center rounded-lg text-muted hover:bg-surface"
          >
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">{strings.close}</span>
          </button>
        </div>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {strings.settingsIntro}{" "}
          <Link href={privacyHref} onClick={onClose} className="text-accent underline underline-offset-2">
            {strings.privacyLink}
          </Link>
        </p>
        <p className="mt-2 text-xs text-muted">
          {consent
            ? strings.currentChoice.replace("{date}", new Date(consent.updatedAt).toLocaleDateString(dateLocale))
            : strings.noChoice}
        </p>

        <ul className="mt-5 space-y-3">
          <li className="rounded-xl border border-line bg-surface p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold">{strings.necessaryTitle}</h3>
              <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-soft">{strings.alwaysOn}</span>
            </div>
            <p className="mt-1 text-sm leading-6 text-ink-soft">{strings.necessaryText}</p>
          </li>
          {categories.map((c) => {
            const inputId = `consent-${c.id}`;
            return (
              <li key={c.id} className="rounded-xl border border-line p-4">
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor={inputId} className="font-semibold">
                    {c.title}
                  </label>
                  <input
                    id={inputId}
                    type="checkbox"
                    role="switch"
                    checked={draft[c.id]}
                    onChange={(e) => setDraft((d) => ({ ...d, [c.id]: e.target.checked }))}
                    aria-describedby={`${inputId}-desc`}
                    className="size-5 cursor-pointer accent-[var(--color-accent)]"
                  />
                </div>
                <p id={`${inputId}-desc`} className="mt-1 text-sm leading-6 text-ink-soft">
                  {c.text}
                  {!siteConfig.optionalServices[c.id] ? <span className="mt-1 block text-muted">{strings.notInUse}</span> : null}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => save({ analytics: false, marketing: false })}
            className="h-11 rounded-xl border border-ink/20 px-3 text-sm font-semibold hover:border-ink/40"
          >
            {strings.rejectOptional}
          </button>
          <button
            type="button"
            onClick={() => save({ analytics: true, marketing: true })}
            className="h-11 rounded-xl border border-ink/20 px-3 text-sm font-semibold hover:border-ink/40"
          >
            {strings.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => save(draft)}
            className="h-11 rounded-xl bg-ink px-3 text-sm font-semibold text-white hover:bg-ink-soft"
          >
            {strings.save}
          </button>
        </div>
        {consent ? (
          <button
            type="button"
            onClick={() => {
              clearConsent();
              onClose();
            }}
            className="mt-4 text-sm font-medium text-muted underline underline-offset-2 hover:text-ink"
          >
            {strings.withdraw}
          </button>
        ) : null}
        <p role="status" className="sr-only">
          {status}
        </p>
      </div>
    </dialog>
  );
}
