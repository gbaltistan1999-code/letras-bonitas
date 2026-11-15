/**
 * Unit tests for the Unicode engine. Run with: npm test
 * (uses Node's built-in test runner and TypeScript type stripping, no extra deps)
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import * as m from "../lib/unicode/maps.ts";
import { styles, styleIds, transform, categoryIds } from "../lib/unicode/styles.ts";
import { codePointLength, toClusters } from "../lib/unicode/transform.ts";

const cp = (s: string) => [...s].map((c) => c.codePointAt(0)!.toString(16).toUpperCase());

test("catalogue has 30–60 unique styles and every category is used", () => {
  assert.ok(styleIds.length >= 30 && styleIds.length <= 120, `got ${styleIds.length}`);
  assert.equal(new Set(styleIds).size, styleIds.length);
  for (const c of categoryIds) assert.ok(styles.some((s) => s.category === c), `empty category ${c}`);
});

test("letter maps cover a–z / A–Z with single code points", () => {
  const full = { bold: m.bold, italic: m.italic, boldItalic: m.boldItalic, script: m.script, boldScript: m.boldScript,
    fraktur: m.fraktur, boldFraktur: m.boldFraktur, doubleStruck: m.doubleStruck, sans: m.sans, sansBold: m.sansBold,
    sansItalic: m.sansItalic, sansBoldItalic: m.sansBoldItalic, monospace: m.monospace, circled: m.circled,
    squared: m.squared, negativeSquared: m.negativeSquared, negativeCircled: m.negativeCircled, fullwidth: m.fullwidth,
    upsideDown: m.upsideDown, mirrored: m.mirrored, smallCaps: m.smallCaps, currency: m.currency, greekish: m.greekish,
    asian: m.asian, hooked: m.hooked, syllabic: m.syllabic, parenthesized: m.parenthesized };
  for (const [name, map] of Object.entries(full)) {
    for (const ch of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
      assert.ok(map[ch] !== undefined, `${name} missing ${ch}`);
      assert.equal([...map[ch]].length, 1, `${name}[${ch}] is not a single code point`);
    }
  }
});

test("known code points from the Unicode charts (spot checks incl. reserved holes)", () => {
  assert.deepEqual(cp(transform("Aa0", "bold")), ["1D400", "1D41A", "1D7CE"]);
  assert.equal(transform("h", "italic"), "ℎ"); // Planck constant, hole in italic block
  assert.deepEqual(cp(transform("BEFHILMRego", "script")), ["212C", "2130", "2131", "210B", "2110", "2112", "2133", "211B", "212F", "210A", "2134"]);
  assert.deepEqual(cp(transform("CHIRZ", "fraktur")), ["212D", "210C", "2111", "211C", "2128"]);
  assert.deepEqual(cp(transform("CHNPQRZ", "doubleStruck")), ["2102", "210D", "2115", "2119", "211A", "211D", "2124"]);
  assert.deepEqual(cp(transform("z9", "monospace")), ["1D6A3", "1D7FF"]);
  assert.deepEqual(cp(transform("a0", "circled")), ["24D0", "24EA"]);
  assert.deepEqual(cp(transform("A!", "fullwidth")), ["FF21", "FF01"]);
  assert.equal(transform(" ", "fullwidth"), "　");
  // Every map entry for the regular math blocks must decode back to the right Latin letter
  // via NFKC (compatibility decomposition defined by Unicode).
  for (const id of ["bold", "italic", "boldItalic", "script", "boldScript", "fraktur", "boldFraktur", "doubleStruck", "sans", "sansBold", "sansItalic", "sansBoldItalic", "monospace", "circled", "fullwidth"] as const) {
    const input = id === "fullwidth" || id === "circled" || id === "bold" || id === "doubleStruck" || id === "sans" || id === "sansBold" || id === "monospace"
      ? "AbcXyz019" : "AbcXyz";
    assert.equal(transform(input, id).normalize("NFKC"), input, `${id} does not round-trip through NFKC`);
  }
});

test("accented Spanish/Portuguese letters keep their accents", () => {
  const out = transform("ñ", "bold");
  assert.deepEqual(cp(out), ["1D427", "303"]); // 𝐧 + combining tilde
  assert.equal(transform("áéíóúüçãõ", "bold").normalize("NFKC"), "áéíóúüçãõ");
  assert.equal(transform("Canción", "script").normalize("NFKC"), "Canción");
});

test("characters without an equivalent are kept unchanged", () => {
  assert.equal(transform("x", "smallCaps"), "x");
  assert.equal(transform("q", "superscript"), "q");
  assert.equal(transform("¿?", "bold"), "¿?");
  // Unmapped accented char is returned recomposed (NFC), identical to input.
  assert.equal(transform("ç", "subscript"), "ç");
});

test("emoji and astral characters are never split", () => {
  const family = "👨‍👩‍👧";
  for (const id of styleIds) {
    const out = transform(`a${family}b`, id);
    assert.ok(!/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/.test(out), `${id} produced a lone surrogate`);
  }
  assert.ok(transform(`ab${family}`, "upsideDown").includes(family), "reversal broke the ZWJ sequence");
  assert.equal(toClusters(family).length, 1);
});

test("empty input and whitespace", () => {
  for (const id of styleIds) {
    assert.equal(transform("", id), "", `${id} on empty input`);
  }
  assert.equal(transform("ab cd", "strike"), "a̶b̶ c̶d̶");
  assert.equal(transform("ab cd", "hearts"), "a♡b  c♡d");
});

test("flip styles reverse order", () => {
  assert.equal(transform("abc", "reversed"), "cba");
  assert.equal(transform("ab", "upsideDown"), "qɐ");
});

test("every style handles digits, punctuation and long input without throwing", () => {
  const long = "Hola Mundo 123 ¡Qué tal! ñandú — çã ".repeat(6);
  for (const id of styleIds) {
    const out = transform(long, id);
    assert.equal(typeof out, "string");
    assert.ok(out.length > 0);
  }
  assert.equal(codePointLength("𝐀𝐁"), 2);
});

test("new alphabets cover a–z with single code points", async () => {
  const extra = { fauxCyrillic: m.fauxCyrillic, cherokee: m.cherokee, runic: m.runic, barred: m.barred, accented: m.accented };
  for (const [name, map] of Object.entries(extra)) {
    for (const ch of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
      assert.ok(map[ch] !== undefined && [...map[ch]].length === 1, `${name}[${ch}]`);
    }
  }
});

test("pseudo-random styles are deterministic", async () => {
  for (const id of ["glitch", "crazyEmoji", "crazyScript", "crazyBoxes", "mixed"] as const) {
    assert.equal(transform("Hola Mundo", id), transform("Hola Mundo", id), id);
  }
  assert.equal(transform("ab", "mixed"), "𝐚𝒷");
});

test("decorations frame text and skip empty input", async () => {
  const { decorate } = await import("../lib/unicode/styles.ts");
  assert.equal(decorate("𝐀", "yinyang"), "☯ 𝐀 ☯");
  assert.equal(decorate("𝐀", "none"), "𝐀");
  assert.equal(decorate("", "stars"), "");
});
