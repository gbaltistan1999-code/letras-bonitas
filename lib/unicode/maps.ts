/**
 * Unicode mapping tables.
 *
 * Sources (Unicode Consortium code charts):
 *  - Mathematical Alphanumeric Symbols, U+1D400–U+1D7FF
 *    https://www.unicode.org/charts/PDF/U1D400.pdf
 *  - Letterlike Symbols, U+2100–U+214F (fills the "holes" of the block above)
 *    https://www.unicode.org/charts/PDF/U2100.pdf
 *  - Enclosed Alphanumerics, U+2460–U+24FF
 *  - Enclosed Alphanumeric Supplement, U+1F100–U+1F1FF
 *  - Halfwidth and Fullwidth Forms, U+FF00–U+FFEF
 *  - Phonetic Extensions / Spacing Modifier Letters / Superscripts and Subscripts
 *
 * A map is a plain object from one input character to one output string.
 * Characters missing from a map are left unchanged by the transform engine.
 */

export type CharMap = Readonly<Record<string, string>>;

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

interface OffsetSpec {
  upper?: number;
  lower?: number;
  digits?: number;
  /** Characters whose code point is reserved in the block and live elsewhere. */
  exceptions?: Record<string, number>;
}

/** Build a map for blocks laid out as contiguous A–Z, a–z, 0–9 ranges. */
function fromOffsets({ upper, lower, digits, exceptions = {} }: OffsetSpec): CharMap {
  const map: Record<string, string> = {};
  const add = (chars: string, start?: number) => {
    if (start === undefined) return;
    [...chars].forEach((ch, i) => {
      map[ch] = String.fromCodePoint(start + i);
    });
  };
  add(UPPER, upper);
  add(LOWER, lower);
  add(DIGITS, digits);
  for (const [ch, cp] of Object.entries(exceptions)) map[ch] = String.fromCodePoint(cp);
  return map;
}

/** Build a map by zipping two equal-length lists of characters. */
function zip(from: string, to: string): CharMap {
  const a = [...from];
  const b = [...to];
  if (a.length !== b.length) throw new Error(`zip(): length mismatch ${a.length} vs ${b.length}`);
  const map: Record<string, string> = {};
  a.forEach((ch, i) => {
    map[ch] = b[i];
  });
  return map;
}

/** Same output for upper and lower case input. */
function caseless(lowerTargets: string, digitsTarget?: string): CharMap {
  const lower = zip(LOWER, lowerTargets);
  const upper = zip(UPPER, lowerTargets);
  return { ...lower, ...upper, ...(digitsTarget ? zip(DIGITS, digitsTarget) : {}) };
}

/* ---------- Mathematical Alphanumeric Symbols ---------- */

export const bold = fromOffsets({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce });
export const italic = fromOffsets({ upper: 0x1d434, lower: 0x1d44e, exceptions: { h: 0x210e } });
export const boldItalic = fromOffsets({ upper: 0x1d468, lower: 0x1d482 });
export const script = fromOffsets({
  upper: 0x1d49c,
  lower: 0x1d4b6,
  exceptions: {
    B: 0x212c, E: 0x2130, F: 0x2131, H: 0x210b, I: 0x2110, L: 0x2112, M: 0x2133, R: 0x211b,
    e: 0x212f, g: 0x210a, o: 0x2134,
  },
});
export const boldScript = fromOffsets({ upper: 0x1d4d0, lower: 0x1d4ea });
export const fraktur = fromOffsets({
  upper: 0x1d504,
  lower: 0x1d51e,
  exceptions: { C: 0x212d, H: 0x210c, I: 0x2111, R: 0x211c, Z: 0x2128 },
});
export const boldFraktur = fromOffsets({ upper: 0x1d56c, lower: 0x1d586 });
export const doubleStruck = fromOffsets({
  upper: 0x1d538,
  lower: 0x1d552,
  digits: 0x1d7d8,
  exceptions: { C: 0x2102, H: 0x210d, N: 0x2115, P: 0x2119, Q: 0x211a, R: 0x211d, Z: 0x2124 },
});
export const sans = fromOffsets({ upper: 0x1d5a0, lower: 0x1d5ba, digits: 0x1d7e2 });
export const sansBold = fromOffsets({ upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec });
export const sansItalic = fromOffsets({ upper: 0x1d608, lower: 0x1d622 });
export const sansBoldItalic = fromOffsets({ upper: 0x1d63c, lower: 0x1d656 });
export const monospace = fromOffsets({ upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 });

/* ---------- Enclosed and fullwidth forms ---------- */

export const circled = fromOffsets({
  upper: 0x24b6,
  lower: 0x24d0,
  exceptions: { 0: 0x24ea, 1: 0x2460, 2: 0x2461, 3: 0x2462, 4: 0x2463, 5: 0x2464, 6: 0x2465, 7: 0x2466, 8: 0x2467, 9: 0x2468 },
});
// Negative circled / squared letters only exist in upper case.
export const negativeCircled = caseless(
  [...UPPER].map((_, i) => String.fromCodePoint(0x1f150 + i)).join(""),
  "⓿❶❷❸❹❺❻❼❽❾",
);
export const squared = caseless([...UPPER].map((_, i) => String.fromCodePoint(0x1f130 + i)).join(""));
export const negativeSquared = caseless([...UPPER].map((_, i) => String.fromCodePoint(0x1f170 + i)).join(""));
export const parenthesized = {
  ...zip(LOWER, [...LOWER].map((_, i) => String.fromCodePoint(0x249c + i)).join("")),
  ...zip(UPPER, [...LOWER].map((_, i) => String.fromCodePoint(0x249c + i)).join("")),
  ...zip("123456789", "⑴⑵⑶⑷⑸⑹⑺⑻⑼"),
} as CharMap;

/** ASCII ! … ~ map to U+FF01 … U+FF5E; space maps to the ideographic space. */
export const fullwidth: CharMap = (() => {
  const map: Record<string, string> = { " ": "　" };
  for (let cp = 0x21; cp <= 0x7e; cp++) map[String.fromCharCode(cp)] = String.fromCodePoint(cp + 0xfee0);
  return map;
})();

/* ---------- Small forms ---------- */

// "x" has no small-capital letter in Unicode, so it stays as a regular x.
export const smallCaps = caseless("ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ");

// Superscript lower case; "q" has no superscript form and is kept.
export const superscript: CharMap = {
  ...caseless("ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ", "⁰¹²³⁴⁵⁶⁷⁸⁹"),
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};

// Unicode only encodes some subscript letters; missing ones are kept as-is.
export const subscript: CharMap = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ",
  p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  ...zip(DIGITS, "₀₁₂₃₄₅₆₇₈₉"),
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

/* ---------- Flipped ---------- */

export const upsideDown: CharMap = {
  ...zip(LOWER, "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz"),
  ...zip(UPPER, "∀ꓭƆꓷƎℲ⅁HIſꓘ˥WNOԀῸꓤS⊥∩ΛMX⅄Z"),
  ...zip(DIGITS, "0ƖᄅƐㄣϛ9ㄥ86"),
  ".": "˙", ",": "'", "'": ",", "?": "¿", "¿": "?", "!": "¡", "¡": "!",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<",
  "&": "⅋", "_": "‾",
};

export const mirrored: CharMap = {
  ...zip(LOWER, "ɒdɔbɘʇϱʜiįʞlmnoqpɿƨƚuvwxyz"),
  ...zip(UPPER, "AᙠƆᗡƎꟻᎮHIႱ⋊⅃MИOꟼỌЯƧTUVWXYZ"),
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<", "?": "⸮",
};

/* ---------- Look-alike ("rare") alphabets ---------- */
// These reuse letters from other scripts (Greek, Cyrillic, CJK, Canadian
// syllabics, currency signs) that resemble Latin letters.

export const currency = caseless("₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ");
export const greekish = caseless("αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz");
export const asian = caseless("卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙");
export const hooked = caseless("ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ");
export const syllabic = caseless("ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ");
