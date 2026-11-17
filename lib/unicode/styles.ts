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
  // ---- set 2 (grouped by category; display order inside each category)
  "scriptStarsAesthetic",
  "scriptCrown",
  "scriptPastelHearts",
  "scriptMoon",
  "scriptCloud",
  "scriptConstellation",
  "scriptMix",
  "italicHearts",
  "italicBow",
  "italicMix",
  "italicStarWave",
  "boldSparkle",
  "boldStarLine",
  "boldBox",
  "boldClean",
  "boldItalicPro",
  "boldMinimal",
  "boldSerifFrame",
  "boldQuotes",
  "boldAesthetic",
  "gothicCrown",
  "gothicSkull",
  "gothicStars",
  "gothicAngle",
  "gothicBracket",
  "gothicCross",
  "gothicMix",
  "gothicClassic",
  "monoBoldMix",
  "monoSparkle",
  "smallHearts",
  "smallMoon",
  "subscriptFrame",
  "superscriptStars",
  "bubbleMix",
  "squareAesthetic",
  "bubbleDarkAesthetic",
  "bubbleDarkFrame",
  "flags",
  "tildeBelow",
  "hookAbove",
  "doubleMacronBelow",
  "doubleOverline",
  "diaeresisMarks",
  "curveOver",
  "crossMarks",
  "crownMarks",
  "ringAbove",
  "circumflexMarks",
  "dotAbove",
  "arrowsBelow",
  "nebula",
  "lightPulse",
  "dottedRings",
  "movingWave",
  "thai",
  "fairy",
  "cyrillicLower",
  "kaoLenny",
  "kaoConfused",
  "kaoHappy",
  "kaoHappySmall",
  "cuteSakura",
  "cuteButterflyItalic",
  "cuteHeartsItalic",
  "cuteGhost",
  "cuteMonkeys",
  "gameLightning",
  "gameRoyal",
  "gameProX",
  "gameSport",
  "retro",
  "retroWave",
  "musicLine",
  "nightStars",
  "ocean",
  "moonlight",
  "barcodeLines",
  "miniStars",
  "heartLine",
  "floralLine",
  "floralBorder",
  "floralOrnaments",
  "elegantStars",
  "fade",
  "decoHearts",
  "diamondLine",
  "curveLine",
  "tenderStars",
  "dashLine",
  "risingBars",
  "curl",
  "chevron",
  "bubbleDots",
  "blocks",
  "arrows",
  "crownBorder",
  "glowBorder",
  "diamondsBetween",
  "pointedArch",
  "rootsFrame",
  "oceanCrest",
  "mirrorFrame",
  "loopsFrame",
  "mathBorder",
  "bouncy",
  "layerBox",
  "lightCaps",
  "thickBox",
  "gemCut",
  "fluidBracket",
  "fluidChain",
  "thinBorders",
  "equalsFrame",
  "doubleAngle",
  "halfMoonWrap",
  "boldBlocks",
  "arrowWrap",
  "angularFrame",
  "archedFrame",
  "wavesBetween",
] as const;
export type StyleId = (typeof styleIds)[number];

export interface StyleDef {
  id: StyleId;
  category: CategoryId;
  apply: (text: string) => string;
}

const map = (cm: m.CharMap) => (t: string) => applyMap(t, cm);
/** Wrap each letter and leave a space after it (wide per-letter frames). */
const boxEach = (t: string, left: string, right: string) => wrapEach(t, left, `${right} `).trimEnd();

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
  // ---- set 2
  scriptStarsAesthetic: { category: "cursive", apply: (t) => frame(applyMap(t, m.boldScript), "˚₊‧꒰ა ☆ ", " ☆ ໒꒱ ‧₊˚") },
  scriptCrown: { category: "cursive", apply: (t) => frame(applyMap(t, m.script), "♕ ", " ♕") },
  scriptPastelHearts: { category: "cursive", apply: (t) => frame(applyMap(t, m.script), "˖♡˖ ", " ˖♡˖") },
  scriptMoon: { category: "cursive", apply: (t) => frame(applyMap(t, m.boldScript), "☾⋆ ", " ⋆☽") },
  scriptCloud: { category: "cursive", apply: (t) => frame(applyMap(t, m.script), "☁️ ୨୧ ", " ୨୧ ☁️") },
  scriptConstellation: { category: "cursive", apply: (t) => joinWith(applyMap(t, m.script), "⋆", "⋆ ⋆") },
  scriptMix: { category: "cursive", apply: (t) => cycleMaps(t, [m.boldScript, m.script]) },
  italicHearts: { category: "italic", apply: (t) => joinWith(applyMap(t, m.italic), "♡", "♡ ♡") },
  italicBow: { category: "italic", apply: (t) => frame(applyMap(t, m.italic), "୨୧ — ", " — ୨୧") },
  italicMix: { category: "italic", apply: (t) => cycleMaps(t, [m.sansBoldItalic, m.sansItalic]) },
  italicStarWave: { category: "italic", apply: (t) => joinWith(applyMap(t, m.boldItalic), "⋆✧", "⋆✧ ⋆✧") },
  boldSparkle: { category: "bold", apply: (t) => frame(applyMap(t, m.sansBold), "✦ ", " ✦") },
  boldStarLine: { category: "bold", apply: (t) => frame(applyMap(t, m.bold), "★彡 ", " 彡★") },
  boldBox: { category: "bold", apply: (t) => frame(applyMap(t, m.bold), "【 ", " 】") },
  boldClean: { category: "bold", apply: (t) => frame(applyMap(t, m.bold), "〈 ", " 〉") },
  boldItalicPro: { category: "bold", apply: (t) => frame(applyMap(t, m.boldItalic), "✧ ", " ✧") },
  boldMinimal: { category: "bold", apply: (t) => frame(applyMap(t, m.sansBold), "· ", " ·") },
  boldSerifFrame: { category: "bold", apply: (t) => frame(applyMap(t, m.boldItalic), "《 ", " 》") },
  boldQuotes: { category: "bold", apply: (t) => frame(applyMap(t, m.sansBold), "❝ ", " ❞") },
  boldAesthetic: { category: "bold", apply: (t) => frame(applyMap(t, m.boldItalic), "└────⊱ ", " ⊰────┘") },
  gothicCrown: { category: "gothic", apply: (t) => frame(applyMap(t, m.fraktur), "♕ ", " ♕") },
  gothicSkull: { category: "gothic", apply: (t) => frame(applyMap(t, m.boldFraktur), "☠ ", " ☠") },
  gothicStars: { category: "gothic", apply: (t) => frame(applyMap(t, m.boldFraktur), "✦ ", " ✦") },
  gothicAngle: { category: "gothic", apply: (t) => frame(applyMap(t, m.fraktur), "〈 ", " 〉") },
  gothicBracket: { category: "gothic", apply: (t) => frame(applyMap(t, m.fraktur), "〚 ", " 〛") },
  gothicCross: { category: "gothic", apply: (t) => frame(applyMap(t, m.fraktur), "† ", " †") },
  gothicMix: { category: "gothic", apply: (t) => cycleMaps(t, [m.boldFraktur, m.fraktur]) },
  gothicClassic: { category: "gothic", apply: (t) => frame(applyMap(t, m.boldFraktur), "☆⁺₊☆☽⋆ ", " ⋆☾☆⁺₊☆") },
  monoBoldMix: { category: "mono", apply: (t) => cycleMaps(t, [m.monospace, m.bold]) },
  monoSparkle: { category: "mono", apply: (t) => frame(applyMap(t, m.monospace), "✧･ﾟ: ✧･ﾟ: ", " :･ﾟ✧:･ﾟ✧") },
  smallHearts: { category: "small", apply: (t) => frame(applyMap(t, m.smallCaps), "♡ ", " ♡") },
  smallMoon: { category: "small", apply: (t) => frame(applyMap(t, m.smallCaps), "☾ ", " ☽") },
  subscriptFrame: { category: "small", apply: (t) => frame(applyMap(t, m.subscript), "+ ", " +") },
  superscriptStars: { category: "small", apply: (t) => frame(applyMap(t, m.superscript), "⁺ ", " ⁺") },
  bubbleMix: { category: "enclosed", apply: (t) => cycleMaps(t, [m.negativeCircled, m.circled]) },
  squareAesthetic: { category: "enclosed", apply: (t) => frame(applyMap(t, m.squared), "▚▞▚▞ ", " ▚▞▚▞") },
  bubbleDarkAesthetic: { category: "enclosed", apply: (t) => frame(applyMap(t, m.negativeCircled), "✦▄✦▀✦▄ ", " ▄✦▀✦▄✦") },
  bubbleDarkFrame: { category: "enclosed", apply: (t) => frame(applyMap(t, m.negativeCircled), "【", "】") },
  flags: { category: "enclosed", apply: (t) => joinWith(applyMap(t, m.regional), "\u200b", "   ") },
  tildeBelow: { category: "lines", apply: (t) => addCombining(t, "\u0330") },
  hookAbove: { category: "lines", apply: (t) => addCombining(t, "\u0309") },
  doubleMacronBelow: { category: "lines", apply: (t) => addCombining(t, "\u035f") },
  doubleOverline: { category: "lines", apply: (t) => addCombining(t, "\u033f") },
  diaeresisMarks: { category: "lines", apply: (t) => addCombining(t, "\u0308\u0324") },
  curveOver: { category: "lines", apply: (t) => addCombining(t, "\u0311\u032e") },
  crossMarks: { category: "lines", apply: (t) => addCombining(t, "\u033d\u0353") },
  crownMarks: { category: "lines", apply: (t) => addCombining(t, "\u035b") },
  ringAbove: { category: "lines", apply: (t) => addCombining(t, "\u030a") },
  circumflexMarks: { category: "lines", apply: (t) => addCombining(t, "\u0302") },
  dotAbove: { category: "lines", apply: (t) => addCombining(t, "\u0307") },
  arrowsBelow: { category: "lines", apply: (t) => addCombining(t, "\u034d") },
  nebula: { category: "lines", apply: (t) => addCombining(t, "\u0314") },
  lightPulse: { category: "lines", apply: (t) => addCombining(t, "\u0306") },
  dottedRings: { category: "lines", apply: (t) => joinWith(addCombining(t, "\u030a"), ":", ": ") },
  movingWave: { category: "lines", apply: (t) => joinWith(addCombining(t, "\u0301"), "⸾", "⸾ ") },
  thai: { category: "rare", apply: map(m.thai) },
  fairy: { category: "rare", apply: map(m.fairy) },
  cyrillicLower: { category: "rare", apply: map(m.cyrillicLower) },
  kaoLenny: { category: "kaomoji", apply: (t) => frame(t, "( ͡° ͜ʖ ͡°) ", "") },
  kaoConfused: { category: "kaomoji", apply: (t) => frame(t, "(°ロ°) ", "") },
  kaoHappy: { category: "kaomoji", apply: (t) => frame(t, "(ᵔ◡ᵔ) ", "") },
  kaoHappySmall: { category: "kaomoji", apply: (t) => frame(applyMap(t, m.smallCaps), "(◕‿◕) ", "") },
  cuteSakura: { category: "cute", apply: (t) => frame(applyMap(t, m.boldScript), "🌸 ", " 🌸") },
  cuteButterflyItalic: { category: "cute", apply: (t) => frame(applyMap(t, m.italic), "🦋 ", " 🦋") },
  cuteHeartsItalic: { category: "cute", apply: (t) => frame(applyMap(t, m.italic), "💗 ", " 💗") },
  cuteGhost: { category: "cute", apply: (t) => frame(t, "👻 ", " 👻") },
  cuteMonkeys: { category: "cute", apply: (t) => frame(applyMap(t, m.monospace), "", " 🙈🙊") },
  gameLightning: { category: "gaming", apply: (t) => frame(applyMap(t, m.sansBold), "⚡ 〚", "〛 ⚡") },
  gameRoyal: { category: "gaming", apply: (t) => frame(applyMap(t, m.sansBold), "♕亗 ", " 亗♕") },
  gameProX: { category: "gaming", apply: (t) => frame(applyMap(t, m.boldFraktur), "乂 ", " 乂") },
  gameSport: { category: "gaming", apply: (t) => frame(t, "▐█═══ ", " ═══█▌") },
  retro: { category: "decorated", apply: (t) => frame(t, "×º°”˜`”°º× ", " ×º°”˜`”°º×") },
  retroWave: { category: "decorated", apply: (t) => frame(t, "|!¤*'~``~'*¤!| ", " |!¤*'~``~'*¤!|") },
  musicLine: { category: "decorated", apply: (t) => frame(t, "·.¸¸.·♩♪♫ ", " ♫♪♩·.¸¸.·") },
  nightStars: { category: "decorated", apply: (t) => frame(t, "★.¸¸.•´¯`•.¸¸.★ ", " ★.¸¸.•´¯`•.¸¸.★") },
  ocean: { category: "decorated", apply: (t) => frame(t, "¸,ø¤º°`°º¤ø,¸¸,ø¤º° ", " °º¤ø,¸¸,ø¤º°`°º¤ø,¸") },
  moonlight: { category: "decorated", apply: (t) => frame(t, "✦⁺₊☆☽⋆ ", " ⋆☾☆⁺₊✦") },
  barcodeLines: { category: "decorated", apply: (t) => frame(t, "ıllıllı ", " ıllıllı") },
  miniStars: { category: "decorated", apply: (t) => frame(t, "⋆☆⋆ ", " ⋆☆⋆") },
  heartLine: { category: "decorated", apply: (t) => frame(t, "*•.¸♡ ", " ♡¸.•*") },
  floralLine: { category: "decorated", apply: (t) => frame(t, "(¯`*•.¸,¤°´✿.｡.:* ", " *.:｡.✿`°¤,¸.•*´¯)") },
  floralBorder: { category: "decorated", apply: (t) => frame(t, "⊱❀⊰ ", " ⊱❀⊰") },
  floralOrnaments: { category: "decorated", apply: (t) => frame(t, "⋆.·:¨¨★¨¨:·.⋆ ✼ ", " ✼ ⋆.·:¨¨★¨¨:·.⋆") },
  elegantStars: { category: "decorated", apply: (t) => frame(t, "✦•·.·¯°·.·• ", " •·.·°¯·.·•✦") },
  fade: { category: "decorated", apply: (t) => frame(t, "░▒▓█ ", " █▓▒░") },
  decoHearts: { category: "decorated", apply: (t) => frame(t, "•°•❤•°• ", " •°•❤•°•") },
  diamondLine: { category: "decorated", apply: (t) => frame(t, "-·=»‡«=·- ", " -·=»‡«=·-") },
  curveLine: { category: "decorated", apply: (t) => frame(t, "╭⊰ ", " ⊱╮") },
  tenderStars: { category: "decorated", apply: (t) => frame(t, "╰☆☆ ", " ☆☆╮") },
  dashLine: { category: "decorated", apply: (t) => frame(t, "°°°·.°·..·°¯°·._.· ", " ·._.·°¯°·..·°.·°°°") },
  risingBars: { category: "decorated", apply: (t) => frame(t, "▁▂▃▄▅▆▇█ ", " █▇▆▅▄▃▂▁") },
  curl: { category: "decorated", apply: (t) => frame(t, "(¯`·.¸¸.·´¯`·.¸¸.-> ", " <-.¸¸.·´¯`·.¸¸.·´¯)") },
  chevron: { category: "decorated", apply: (t) => frame(t, "•´¯`•» ", " «•´¯`•") },
  bubbleDots: { category: "decorated", apply: (t) => frame(t, "∘•●◉✿ ", " ✿◉●•∘") },
  blocks: { category: "decorated", apply: (t) => frame(t, "▌│█║▌║▌║ ", " ║▌║▌║█│▌") },
  arrows: { category: "decorated", apply: (t) => frame(t, "➶ ➶ ➶ ", " ➴ ➴ ➴") },
  crownBorder: { category: "decorated", apply: (t) => frame(t, "꧁◊✷ ", " ✷◊꧂") },
  glowBorder: { category: "decorated", apply: (t) => frame(t, "✦ ", " ✦") },
  diamondsBetween: { category: "decorated", apply: (t) => joinWith(t, "◇", "◇ ◇") },
  pointedArch: { category: "decorated", apply: (t) => wrapEach(addCombining(t, "\u032b"), "⦑", "⦒") },
  rootsFrame: { category: "decorated", apply: (t) => boxEach(t, "╘", "╛") },
  oceanCrest: { category: "decorated", apply: (t) => joinWith(t, "∿", "∿ ∿") },
  mirrorFrame: { category: "decorated", apply: (t) => wrapEach(t, "⇜", "⇝") },
  loopsFrame: { category: "decorated", apply: (t) => boxEach(t, "ʃ", "ʅ") },
  mathBorder: { category: "decorated", apply: (t) => boxEach(t, "⌈", "⌋") },
  bouncy: { category: "decorated", apply: (t) => wrapEach(t, "", "ゞ") },
  layerBox: { category: "decorated", apply: (t) => boxEach(t, "〚", "〛") },
  lightCaps: { category: "decorated", apply: (t) => boxEach(t, "┎", "┒") },
  thickBox: { category: "decorated", apply: (t) => boxEach(t, "╠", "╣") },
  gemCut: { category: "decorated", apply: (t) => wrapEach(t, "⦙", "⦙") },
  fluidBracket: { category: "decorated", apply: (t) => wrapEach(t, "❰", "❱") },
  fluidChain: { category: "decorated", apply: (t) => wrapEach(t, "", "⊶") },
  thinBorders: { category: "decorated", apply: (t) => wrapEach(t, "⟨", "⟩") },
  equalsFrame: { category: "decorated", apply: (t) => wrapEach(t, "⋞", "⋟") },
  doubleAngle: { category: "decorated", apply: (t) => wrapEach(t, "⟪", "⟫") },
  halfMoonWrap: { category: "decorated", apply: (t) => wrapEach(t, "⦅", "⦆") },
  boldBlocks: { category: "decorated", apply: (t) => boxEach(t, "╔", "╗") },
  arrowWrap: { category: "decorated", apply: (t) => boxEach(t, "➶", "➴") },
  angularFrame: { category: "decorated", apply: (t) => boxEach(t, "『", "』") },
  archedFrame: { category: "decorated", apply: (t) => wrapEach(t, "❴", "❵") },
  wavesBetween: { category: "decorated", apply: (t) => joinWith(t, "⁓", "⁓ ⁓") },
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
