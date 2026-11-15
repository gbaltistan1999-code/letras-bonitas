"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe, type Consent } from "@/lib/consent";
import type { Dictionary } from "@/types/dictionary";
import { CookieBanner } from "./CookieBanner";
import { CookieSettingsDialog } from "./CookieSettingsDialog";

interface ConsentContextValue {
  /** undefined = not known yet (server render), null = no choice saved. */
  consent: Consent | null | undefined;
  openSettings: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
}

export function ConsentProvider({
  children,
  strings,
  privacyHref,
  dateLocale,
}: {
  children: React.ReactNode;
  strings: Dictionary["cookies"];
  privacyHref: string;
  dateLocale: string;
}) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const value = useMemo(() => ({ consent, openSettings }), [consent, openSettings]);

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {consent === null && !settingsOpen ? (
        <CookieBanner strings={strings} privacyHref={privacyHref} onOpenSettings={openSettings} />
      ) : null}
      <CookieSettingsDialog
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        consent={consent ?? null}
        strings={strings}
        privacyHref={privacyHref}
        dateLocale={dateLocale}
      />
    </ConsentContext.Provider>
  );
}
