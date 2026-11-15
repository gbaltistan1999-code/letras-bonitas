"use client";

import { useConsent } from "./ConsentProvider";

export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  const { openSettings } = useConsent();
  return (
    <button type="button" onClick={openSettings} className={className}>
      {label}
    </button>
  );
}
