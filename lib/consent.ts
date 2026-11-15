/**
 * Cookie-consent store backed by localStorage ("letrashub-consent").
 * Exposed as an external store for React's useSyncExternalStore, so every
 * component (banner, settings, footer button, ConsentGate) stays in sync,
 * including across browser tabs.
 *
 * Bump CONSENT_VERSION if categories change: old choices then become invalid
 * and the banner is shown again.
 */
export const CONSENT_KEY = "letrashub-consent";
export const CONSENT_VERSION = 1;

export type OptionalCategory = "analytics" | "marketing";

export interface Consent {
  v: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO timestamp of the decision. */
  updatedAt: string;
}

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: Consent | null = null;
/** Used when localStorage is unavailable (private mode, blocked storage). */
let memoryRaw: string | null = null;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return memoryRaw;
  }
}

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<Consent>;
    if (data.v !== CONSENT_VERSION || typeof data.updatedAt !== "string") return null;
    return {
      v: CONSENT_VERSION,
      necessary: true,
      analytics: data.analytics === true,
      marketing: data.marketing === true,
      updatedAt: data.updatedAt,
    };
  } catch {
    return null;
  }
}

function emit() {
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_KEY || e.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Client snapshot: null = no valid choice saved yet. */
export function getSnapshot(): Consent | null {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedValue = parse(raw);
  }
  return cachedValue;
}

/** Server snapshot: "unknown" so nothing consent-dependent renders in static HTML. */
export function getServerSnapshot(): Consent | null | undefined {
  return undefined;
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }) {
  const value: Consent = { v: CONSENT_VERSION, necessary: true, ...choice, updatedAt: new Date().toISOString() };
  const raw = JSON.stringify(value);
  try {
    window.localStorage.setItem(CONSENT_KEY, raw);
  } catch {
    memoryRaw = raw;
  }
  emit();
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
  memoryRaw = null;
  emit();
}
