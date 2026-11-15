/**
 * Transform engine.
 *
 * How accented letters are handled (á, é, ñ, ç, ã, õ, ü …):
 *  1. The text is normalized to NFD, so "ñ" becomes "n" + U+0303 (combining tilde).
 *  2. Text is split into grapheme clusters (a base character plus its marks).
 *     Intl.Segmenter is used when available so emoji sequences are never split;
 *     otherwise we iterate by code point (never by UTF-16 index).
 *  3. Only the base character is looked up in the map; the combining marks are
 *     kept, so "ñ" in bold becomes "𝐧̃".
 *  4. Characters that a style has no Unicode equivalent for are kept unchanged.
 *  5. The result is normalized to NFC, which recomposes untouched letters
 *     (e.g. an "ñ" that was not mapped comes back as the single character "ñ").
 */
import type { CharMap } from "./maps.ts";

const MARK = /\p{M}/u;
const SPACE = /^\s+$/u;

let segmenter: Intl.Segmenter | null | undefined;
function getSegmenter(): Intl.Segmenter | null {
  if (segmenter === undefined) {
    segmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter(undefined, { granularity: "grapheme" }) : null;
  }
  return segmenter;
}

/** Split text into grapheme-like clusters (base + combining marks). */
export function toClusters(text: string): string[] {
  const nfd = text.normalize("NFD");
  const seg = getSegmenter();
  if (seg) return Array.from(seg.segment(nfd), (s) => s.segment);
  const out: string[] = [];
  for (const cp of nfd) {
    if (MARK.test(cp) && out.length > 0) out[out.length - 1] += cp;
    else out.push(cp);
  }
  return out;
}

/** Number of Unicode code points (what users perceive as characters, roughly). */
export function codePointLength(text: string): number {
  return [...text].length;
}

function mapCluster(cluster: string, map: CharMap): string {
  const [base, ...rest] = [...cluster];
  const mapped = map[base];
  return mapped === undefined ? cluster : mapped + rest.join("");
}

/** Replace each base character using a map. */
export function applyMap(text: string, map: CharMap, options: { reverse?: boolean } = {}): string {
  const clusters = toClusters(text).map((c) => mapCluster(c, map));
  if (options.reverse) clusters.reverse();
  return clusters.join("").normalize("NFC");
}

/** Add a combining mark after every visible character (strikethrough, underline…). */
export function addCombining(text: string, mark: string): string {
  return toClusters(text)
    .map((c) => (SPACE.test(c) ? c : c + mark))
    .join("")
    .normalize("NFC");
}

/** Reverse visible order without changing characters. */
export function reverseText(text: string): string {
  return toClusters(text).reverse().join("").normalize("NFC");
}

/**
 * Put a separator between the characters of each word.
 * Spaces between words are replaced by `wordGap`.
 */
export function joinWith(text: string, separator: string, wordGap = " "): string {
  const cs = toClusters(text.trim());
  let out = "";
  cs.forEach((c, i) => {
    if (SPACE.test(c)) {
      out += wordGap;
      return;
    }
    out += c;
    const next = cs[i + 1];
    if (next !== undefined && !SPACE.test(next)) out += separator;
  });
  return out.normalize("NFC");
}

/** Wrap every non-space character with left/right symbols. */
export function wrapEach(text: string, left: string, right: string): string {
  return toClusters(text)
    .map((c) => (SPACE.test(c) ? c : `${left}${c}${right}`))
    .join("")
    .normalize("NFC");
}

/** Frame the whole text with a prefix and suffix. */
export function frame(text: string, prefix: string, suffix: string): string {
  return text.trim() === "" ? text : `${prefix}${text}${suffix}`;
}

/**
 * Small deterministic hash (FNV-1a). "Random-looking" styles (zalgo, emoji
 * frames) use it instead of Math.random(), so the same text always gives the
 * same result, and server and browser render identically.
 */
export function hash(text: string, salt = 0): number {
  let h = 0x811c9dc5 ^ salt;
  for (const ch of text) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export function pick<T>(list: readonly T[], text: string, salt: number): T {
  return list[hash(text, salt) % list.length];
}

const ZALGO_UP = ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊"];
const ZALGO_DOWN = ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪"];

/** Mild "glitch" text: one mark above and one below each visible character. */
export function zalgo(text: string): string {
  return toClusters(text)
    .map((c, i) => (SPACE.test(c) ? c : c + ZALGO_UP[hash(c, i) % ZALGO_UP.length] + ZALGO_DOWN[hash(c, i + 7) % ZALGO_DOWN.length]))
    .join("")
    .normalize("NFC");
}

/** Apply a different map to each letter in turn (spaces don't advance the cycle). */
export function cycleMaps(text: string, maps: readonly CharMap[]): string {
  let n = 0;
  return toClusters(text)
    .map((c) => (SPACE.test(c) ? c : mapCluster(c, maps[n++ % maps.length])))
    .join("")
    .normalize("NFC");
}
