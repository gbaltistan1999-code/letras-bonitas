/**
 * Style catalogue. Each style is a pure function from text to text.
 * Display names live in the dictionaries (dictionaries/*.ts → styleNames),
 * so this file stays language-neutral and small enough for the browser.
 *
 * To add a style: add its id to `styleIds`, give it an entry in `styles`,
 * then add a name for it in every dictionary (TypeScript will remind you).
 */
import * as m from "./maps.ts";
import { addCombining, applyMap, frame, joinWith, reverseText, wrapEach } from "./transform.ts";

export const categoryIds = [
  "cursive",
  "bold",
  "italic",
  "gothic",
  "double",
  "mono",
  "small",
  "enclosed",
  "lines",
  "flip",
  "rare",
  "decorated",
] as const;
export type CategoryId = (typeof categoryIds)[number];

export const styleIds = [
  // cursive
  "script", "boldScript",
  // bold
  "bold", "sansBold", "boldItalic", "sansBoldItalic",
  // italic
  "italic", "sansItalic",
  // gothic
  "fraktur", "boldFraktur",
  // double-struck
  "doubleStruck",
  // mono / sans
  "monospace", "sans",
  // small
  "smallCaps", "superscript", "subscript",
  // enclosed
  "circled", "negativeCircled", "squared", "negativeSquared", "parenthesized", "fullwidth",
  // lines
  "strike", "shortStrike", "slash", "underline", "doubleUnderline", "overline", "crossAbove",
  // flip
  "upsideDown", "mirrored", "reversed",
  // rare
  "currency", "greekish", "asian", "hooked", "syllabic",
  // decorated
  "javanese", "cornerBrackets", "lenticular", "starWaves", "smile", "kanjiFrame", "wings",
  "lightning", "hearts", "spaced", "bracketEach", "ornate", "dotted", "starFrame",
] as const;
export type StyleId = (typeof styleIds)[number];

export interface StyleDef {
  id: StyleId;
  category: CategoryId;
  apply: (text: string) => string;
}

const map = (cm: m.CharMap) => (t: string) => applyMap(t, cm);

const defs: Record<StyleId, Omit<StyleDef, "id">> = {
  script: { category: "cursive", apply: map(m.script) },
  boldScript: { category: "cursive", apply: map(m.boldScript) },

  bold: { category: "bold", apply: map(m.bold) },
  sansBold: { category: "bold", apply: map(m.sansBold) },
  boldItalic: { category: "bold", apply: map(m.boldItalic) },
  sansBoldItalic: { category: "bold", apply: map(m.sansBoldItalic) },

  italic: { category: "italic", apply: map(m.italic) },
  sansItalic: { category: "italic", apply: map(m.sansItalic) },

  fraktur: { category: "gothic", apply: map(m.fraktur) },
  boldFraktur: { category: "gothic", apply: map(m.boldFraktur) },

  doubleStruck: { category: "double", apply: map(m.doubleStruck) },

  monospace: { category: "mono", apply: map(m.monospace) },
  sans: { category: "mono", apply: map(m.sans) },

  smallCaps: { category: "small", apply: map(m.smallCaps) },
  superscript: { category: "small", apply: map(m.superscript) },
  subscript: { category: "small", apply: map(m.subscript) },

  circled: { category: "enclosed", apply: map(m.circled) },
  negativeCircled: { category: "enclosed", apply: map(m.negativeCircled) },
  squared: { category: "enclosed", apply: map(m.squared) },
  negativeSquared: { category: "enclosed", apply: map(m.negativeSquared) },
  parenthesized: { category: "enclosed", apply: map(m.parenthesized) },
  fullwidth: { category: "enclosed", apply: map(m.fullwidth) },

  strike: { category: "lines", apply: (t) => addCombining(t, "̶") },
  shortStrike: { category: "lines", apply: (t) => addCombining(t, "̵") },
  slash: { category: "lines", apply: (t) => addCombining(t, "̸") },
  underline: { category: "lines", apply: (t) => addCombining(t, "̲") },
  doubleUnderline: { category: "lines", apply: (t) => addCombining(t, "̳") },
  overline: { category: "lines", apply: (t) => addCombining(t, "̅") },
  crossAbove: { category: "lines", apply: (t) => addCombining(t, "̽") },

  upsideDown: { category: "flip", apply: (t) => applyMap(t, m.upsideDown, { reverse: true }) },
  mirrored: { category: "flip", apply: (t) => applyMap(t, m.mirrored, { reverse: true }) },
  reversed: { category: "flip", apply: reverseText },

  currency: { category: "rare", apply: map(m.currency) },
  greekish: { category: "rare", apply: map(m.greekish) },
  asian: { category: "rare", apply: map(m.asian) },
  hooked: { category: "rare", apply: map(m.hooked) },
  syllabic: { category: "rare", apply: map(m.syllabic) },

  javanese: { category: "decorated", apply: (t) => frame(applyMap(t, m.boldScript), "꧁༒ ", " ༒꧂") },
  cornerBrackets: { category: "decorated", apply: (t) => frame(t, "『", "』") },
  lenticular: { category: "decorated", apply: (t) => frame(applyMap(t, m.sansBold), "【", "】") },
  starWaves: { category: "decorated", apply: (t) => frame(applyMap(t, m.script), "★彡 ", " 彡★") },
  smile: { category: "decorated", apply: (t) => frame(applyMap(t, m.smallCaps), "×͜× ", "") },
  kanjiFrame: { category: "decorated", apply: (t) => frame(applyMap(t, m.fraktur), "亗 ", " 亗") },
  wings: { category: "decorated", apply: (t) => frame(t, "•´¯`•. ", " .•´¯`•") },
  lightning: { category: "decorated", apply: (t) => frame(applyMap(t, m.boldItalic), "⚡", "⚡") },
  hearts: { category: "decorated", apply: (t) => joinWith(t, "♡", "  ") },
  spaced: { category: "decorated", apply: (t) => joinWith(t, " ", "   ") },
  bracketEach: { category: "decorated", apply: (t) => wrapEach(t, "【", "】") },
  ornate: { category: "decorated", apply: (t) => frame(applyMap(t, m.doubleStruck), "﴾ ", " ﴿") },
  dotted: { category: "decorated", apply: (t) => joinWith(t, "·", " · ") },
  starFrame: { category: "decorated", apply: (t) => frame(applyMap(t, m.sansBoldItalic), "☆ ", " ☆") },
};

export const styles: StyleDef[] = styleIds.map((id) => ({ id, ...defs[id] }));

export const styleById = (id: StyleId): StyleDef => ({ id, ...defs[id] });

export function stylesInCategory(category: CategoryId): StyleDef[] {
  return styles.filter((s) => s.category === category);
}

export function transform(text: string, id: StyleId): string {
  return defs[id].apply(text);
}
