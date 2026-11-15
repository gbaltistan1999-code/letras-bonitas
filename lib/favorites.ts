/**
 * Favorite styles, stored in localStorage ("letrashub-favorites") only after
 * the visitor taps a heart. Only style ids are stored, never typed text.
 * Disclosed in the privacy and cookie policies.
 */
import { styleIds, type StyleId } from "./unicode/styles";

export const FAVORITES_KEY = "letrashub-favorites";
const EMPTY: readonly StyleId[] = [];

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: readonly StyleId[] = EMPTY;
let memoryRaw: string | null = null;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(FAVORITES_KEY);
  } catch {
    return memoryRaw;
  }
}

function parse(raw: string | null): readonly StyleId[] {
  if (!raw) return EMPTY;
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return EMPTY;
    return data.filter((id): id is StyleId => (styleIds as readonly string[]).includes(id));
  } catch {
    return EMPTY;
  }
}

export function subscribeFavorites(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === FAVORITES_KEY || e.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function getFavorites(): readonly StyleId[] {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedValue = parse(raw);
  }
  return cachedValue;
}

export const getServerFavorites = (): readonly StyleId[] => EMPTY;

export function toggleFavorite(id: StyleId) {
  const current = getFavorites();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  try {
    if (next.length) window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    else window.localStorage.removeItem(FAVORITES_KEY);
  } catch {
    memoryRaw = next.length ? JSON.stringify(next) : null;
  }
  listeners.forEach((l) => l());
}
