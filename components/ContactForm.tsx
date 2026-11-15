"use client";

import { useId, useState } from "react";
import { Mail } from "lucide-react";
import type { Dictionary } from "@/types/dictionary";

/**
 * Prepares an email in the visitor's own mail app via a mailto: link.
 * Nothing is sent from the website, and no success message is ever shown,
 * because we cannot know whether the visitor actually sends it.
 */
export function ContactForm({ email, strings }: { email: string | null; strings: Dictionary["contact"] }) {
  const id = useId();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const disabled = !email;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const body = name ? `${message}\n\n— ${name}` : message;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = "mt-1 w-full rounded-xl border border-line bg-page px-3 py-2.5 text-ink focus:border-accent focus:outline-none disabled:bg-surface";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-5 sm:p-6" aria-describedby={`${id}-exp`}>
      <h2 className="text-xl font-semibold text-ink">{strings.formHeading}</h2>
      <p id={`${id}-exp`} className="mt-2 text-sm leading-6 text-ink-soft">
        {strings.formExplanation}
      </p>
      {disabled ? (
        <p className="mt-3 rounded-lg border border-warn-line bg-warn-bg p-3 text-sm font-medium text-warn-ink">{strings.disabled}</p>
      ) : null}
      <fieldset disabled={disabled} className="mt-4 space-y-4">
        <div>
          <label htmlFor={`${id}-name`} className="text-sm font-medium text-ink">
            {strings.name}
          </label>
          <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-subject`} className="text-sm font-medium text-ink">
            {strings.subject}
          </label>
          <input id={`${id}-subject`} required value={subject} onChange={(e) => setSubject(e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="text-sm font-medium text-ink">
            {strings.message}
          </label>
          <textarea id={`${id}-message`} required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-5 font-semibold text-white hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-muted"
        >
          <Mail aria-hidden="true" className="size-4" />
          {strings.submit}
        </button>
      </fieldset>
    </form>
  );
}
