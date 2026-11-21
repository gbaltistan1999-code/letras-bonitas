/** Guards the claims made on /nombres-para-free-fire. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { FF_MAX_LENGTH, INVISIBLE_SPACE, allFfNames, applyTemplate, ffFilters, ffLength, ffTemplates, namesForFilter } from "../lib/free-fire-names.ts";

test("page promises +400 names: at least 400, all unique", () => {
  const all = allFfNames();
  assert.ok(all.length >= 400, `only ${all.length} names`);
  assert.equal(new Set(all).size, all.length, "duplicate names");
});

test("every ready-made name fits the 12-character counter", () => {
  const long = allFfNames().filter((n) => ffLength(n) > FF_MAX_LENGTH);
  assert.deepEqual(long, []);
});

test("30 generator templates, each with one X placeholder", () => {
  assert.equal(ffTemplates.length, 30);
  for (const t of ffTemplates) assert.equal(t.pattern.split("X").length, 2, t.pattern);
  assert.equal(applyTemplate("꧁X꧂", "Lobo"), "꧁Lobo꧂");
});

test("counter counts astral characters as 2 and the invisible space as 1", () => {
  assert.equal(ffLength("Lobo"), 4);
  assert.equal(ffLength("𝐋𝐨𝐛𝐨"), 8);
  assert.equal(ffLength(INVISIBLE_SPACE), 1);
  assert.equal(INVISIBLE_SPACE.codePointAt(0), 0x3164);
});

test("every filter has names for the random button", () => {
  for (const f of ffFilters) assert.ok(namesForFilter(f).length > 0, f);
});
