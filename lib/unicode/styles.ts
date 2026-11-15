/**
 * Style catalogue. Each style is a pure function from text to text.
 * Display names live in the dictionaries (dictionaries/*.ts → styleNames),
 * so this file stays language-neutral and small enough for the browser.
 *
 * To add a style: add its id to `styleIds`, give it an entry in `styles`,
 * then add a name for it in every dictionary (TypeScript will remind you).
 */
import * as m from "./maps.ts";
import { addCombining, applyMap, cycleMaps, frame, joinWith, pick, reverseText, wrapEach, zalgo } from "./transform.ts";

// Emoji pools for the "crazy" styles. Chosen per text with a deterministic hash.
const CRAZY = ["🍄", "👽", "🔥", "🐸", "🍕", "🦖", "👻", "🎃", "🍩", "🤡", "🐙", "🌵", "🦄", "💥", "🍉", "🤖"];
const crazyFrame = (styled: string, seed: string) =>
  frame(styled, `${pick(CRAZY, seed, 1)}${pick(CRAZY, seed, 2)} `, ` ${pick(CRAZY, seed, 3)}${pick(CRAZY, seed, 4)}`);

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
  "kaomoji",
  "cute",
  "crazy",
  "gaming",
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
  "circled", "negativeCircled", "squared", "negativeSquared", "parenthesized", "fullwidth", "boxed",
  // lines
  "strike", "shortStrike", "slash", "underline", "doubleUnderline", "overline", "crossAbove",
  "tildeStrike", "seagullBelow", "bridgeBelow", "dotBelow", "arrowBelow", "glitch",
  // flip
  "upsideDown", "mirrored", "reversed",
  // rare
  "currency", "greekish", "asian", "hooked", "syllabic",
  "fauxCyrillic", "cherokee", "runic", "barred", "accented", "mixed",
  // decorated
  "javanese", "cornerBrackets", "lenticular", "starWaves", "smile", "kanjiFrame", "wings",
  "lightning", "hearts", "spaced", "bracketEach", "ornate", "dotted", "starFrame",
  // kaomoji
  "kaoHug", "kaoBear", "kaoSparkle", "kaoShrug", "kaoFlip", "kaoLove", "kaoCry", "kaoDance",
  // cute
  "cuteBow", "cuteBlossom", "cuteSparkles", "cuteStrawberry", "cuteHearts", "cuteButterfly",
  // crazy
  "crazyEmoji", "crazyScript", "crazyBoxes",
  // gaming
  "gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro",
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
  boxed: { category: "enclosed", apply: (t) => addCombining(t, "⃞") },

  tildeStrike: { category: "lines", apply: (t) => addCombining(t, "̴") },
  seagullBelow: { category: "lines", apply: (t) => addCombining(t, "̼") },
  bridgeBelow: { category: "lines", apply: (t) => addCombining(t, "̪") },
  dotBelow: { category: "lines", apply: (t) => addCombining(t, "̣") },
  arrowBelow: { category: "lines", apply: (t) => addCombining(t, "⃯") },
  glitch: { category: "lines", apply: zalgo },

  fauxCyrillic: { category: "rare", apply: map(m.fauxCyrillic) },
  cherokee: { category: "rare", apply: map(m.cherokee) },
  runic: { category: "rare", apply: map(m.runic) },
  barred: { category: "rare", apply: map(m.barred) },
  accented: { category: "rare", apply: map(m.accented) },
  mixed: { category: "rare", apply: (t) => cycleMaps(t, [m.bold, m.script, m.fraktur, m.doubleStruck, m.sansBoldItalic]) },

  kaoHug: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.script), "(づ｡◕‿‿◕｡)づ ", "") },
  kaoBear: { category: "kaomoji", apply: (t) => frame(t, "ʕ•ᴥ•ʔ ", "") },
  kaoSparkle: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.boldScript), "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ", "") },
  kaoShrug: { category: "kaomoji", apply: (t) => frame(t, "¯\\_(ツ)_/¯ ", "") },
  kaoFlip: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.upsideDown, { reverse: true }), "(╯°□°)╯︵ ", "") },
  kaoLove: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.circled), "(っ◔◡◔)っ ♥ ", " ♥") },
  kaoCry: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.smallCaps), "(ಥ﹏ಥ) ", "") },
  kaoDance: { category: "kaomoji", apply: (t) => frame(t, "♪┏(・o･)┛♪ ", " ┗(・o･)┓♪") },

  cuteBow: { category: "cute", apply: (t) => frame(applyMap(t, m.script), "🎀 ", " 🎀") },
  cuteBlossom: { category: "cute", apply: (t) => frame(applyMap(t, m.smallCaps), "🌸 ", " 🌸") },
  cuteSparkles: { category: "cute", apply: (t) => frame(applyMap(t, m.boldScript), "✨ ", " ✨") },
  cuteStrawberry: { category: "cute", apply: (t) => frame(applyMap(t, m.superscript), "🍓 ", " 🍓") },
  cuteHearts: { category: "cute", apply: (t) => frame(applyMap(t, m.sansItalic), "💖 ", " 💖") },
  cuteButterfly: { category: "cute", apply: (t) => frame(applyMap(t, m.fraktur), "🦋 ", " 🦋") },

  crazyEmoji: { category: "crazy", apply: (t) => crazyFrame(t, t) },
  crazyScript: { category: "crazy", apply: (t) => crazyFrame(applyMap(t, m.boldScript), `${t}#2`) },
  crazyBoxes: { category: "crazy", apply: (t) => crazyFrame(applyMap(t, m.negativeSquared), `${t}#3`) },

  gameSniper: { category: "gaming", apply: (t) => frame(t, "▄︻デ ", " ══━一") },
  gameSwords: { category: "gaming", apply: (t) => frame(applyMap(t, m.boldFraktur), "⚔ ", " ⚔") },
  gameSkull: { category: "gaming", apply: (t) => frame(applyMap(t, m.smallCaps), "☠ ", " ☠") },
  gameCrown: { category: "gaming", apply: (t) => frame(applyMap(t, m.sansBold), "♛ ", " ♛") },
  gamePro: { category: "gaming", apply: (t) => frame(applyMap(t, m.smallCaps), "ᴾᴿᴼ ", " ✓") },

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

/**
 * Optional decoration the visitor can add around every result
 * (the generator's "Decoration" picker). `label` is shown as-is.
 */
export const decorations = [
  { id: "none", label: "", prefix: "", suffix: "" },
  { id: "stars", label: "★彡 彡★", prefix: "★彡 ", suffix: " 彡★" },
  { id: "javanese", label: "꧁ ꧂", prefix: "꧁ ", suffix: " ꧂" },
  { id: "yinyang", label: "☯", prefix: "☯ ", suffix: " ☯" },
  { id: "fleur", label: "⚜", prefix: "⚜ ", suffix: " ⚜" },
  { id: "wheel", label: "☸", prefix: "☸ ", suffix: " ☸" },
  { id: "hearts", label: "♡", prefix: "♡ ", suffix: " ♡" },
  { id: "sparkle", label: "✧.*", prefix: "✧.* ", suffix: " *.✧" },
  { id: "brackets", label: "[ ]", prefix: "[ ", suffix: " ]" },
  { id: "tilde", label: "~", prefix: "~ ", suffix: " ~" },
  { id: "flowers", label: "❀", prefix: "❀ ", suffix: " ❀" },
] as const;
export type DecorationId = (typeof decorations)[number]["id"];

export function decorate(output: string, id: DecorationId): string {
  const d = decorations.find((x) => x.id === id);
  return !d || d.id === "none" ? output : frame(output, d.prefix, d.suffix);
}
