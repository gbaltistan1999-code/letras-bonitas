"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { saveConsent } from "@/lib/consent";
import type { Dictionary } from "@/types/dictionary";

/**
 * Compact, non-modal banner shown until a valid choice is saved. It doesn't
 * block the page, and "Reject optional" is exactly as prominent as "Accept all".
 */
export function CookieBanner({
  strings,
  privacyHref,
  onOpenSettings,
}: {
  strings: Dictionary["cookies"];
  privacyHref: string;
  onOpenSettings: () => void;
}) {
  const choice = "h-11 rounded-xl px-4 text-sm font-semibold";
  return (
    <section role="region" aria-label={strings.bannerLabel} className="fixed inset-x-0 bottom-0 z-40 p-2 sm:p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 rounded-2xl border border-line bg-page p-3.5 shadow-lg sm:flex-row sm:items-center sm:gap-5 sm:p-4">
        <div className="flex gap-3">
          <Cookie aria-hidden="true" className="mt-0.5 hidden size-5 shrink-0 text-accent sm:block" />
          <p className="text-[13px] leading-5 text-ink-soft sm:text-sm sm:leading-6">
            {strings.bannerText}{" "}
            <Link href={privacyHref} className="font-medium text-accent underline underline-offset-2">
              {strings.privacyLink}
            </Link>
            {" · "}
            <button
              type="button"
              onClick={onOpenSettings}
              className="font-medium text-ink underline underline-offset-2 hover:text-accent"
            >
              {strings.settings}
            </button>
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => saveConsent({ analytics: false, marketing: false })}
            className={`${choice} border border-ink/20 bg-page text-ink hover:border-ink/40`}
          >
            {strings.rejectOptional}
          </button>
          <button
            type="button"
            onClick={() => saveConsent({ analytics: true, marketing: true })}
            className={`${choice} bg-brand text-white hover:opacity-90`}
          >
            {strings.acceptAll}
          </button>
        </div>
      </div>
    </section>
  );
}
