/**
 * SEO crawl check against a running server.
 *   npm run build && npm start   (in one terminal)
 *   npm run test:seo             (in another; defaults to http://localhost:3000)
 *
 * For every URL in sitemap.xml it verifies: 200 status, <html lang>, exactly
 * one <h1>, unique <title> and meta description, self-referencing canonical,
 * reciprocal hreflang (es, pt-BR, en, x-default), parseable JSON-LD, and that
 * every internal link on the page returns 200.
 */
const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://letrashub.com";
const LANG = { es: "es", "pt-BR": "pt-BR", en: "en" };

const errors = [];
const fail = (url, msg) => errors.push(`${url}: ${msg}`);
const local = (abs) => abs.replace(SITE, BASE);
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
  const loc = m[1].match(/<loc>([^<]+)<\/loc>/)[1];
  const alts = Object.fromEntries([...m[1].matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)].map((a) => [a[1], a[2]]));
  return { loc, alts };
});
console.log(`sitemap: ${entries.length} URLs`);

const titles = new Map();
const descriptions = new Map();
const pageAlternates = new Map();
const internalLinks = new Set();

for (const { loc, alts } of entries) {
  const res = await fetch(local(loc), { redirect: "manual" });
  if (res.status !== 200) {
    fail(loc, `status ${res.status}`);
    continue;
  }
  const html = await res.text();
  const head = html.slice(0, html.indexOf("</head>"));

  const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1];
  const altLang = Object.entries(alts).find(([k, v]) => v === loc && k !== "x-default")?.[0];
  if (!lang || lang !== LANG[altLang]) fail(loc, `html lang "${lang}" vs hreflang "${altLang}"`);

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fail(loc, `${h1} <h1> elements`);

  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (!title) fail(loc, "missing title");
  if (!desc) fail(loc, "missing description");
  if (titles.has(title)) fail(loc, `duplicate title with ${titles.get(title)}`);
  if (descriptions.has(desc)) fail(loc, `duplicate description with ${descriptions.get(desc)}`);
  titles.set(title, loc);
  descriptions.set(desc, loc);
  if (/noindex/.test(head.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "")) fail(loc, "noindex on sitemap URL");

  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== loc) fail(loc, `canonical ${canonical}`);

  const headAlts = Object.fromEntries([...head.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((a) => [a[1], a[2]]));
  for (const key of ["es", "pt-BR", "en", "x-default"]) {
    if (!headAlts[key]) fail(loc, `missing hreflang ${key}`);
    if (headAlts[key] !== alts[key]) fail(loc, `hreflang ${key} differs between <head> and sitemap`);
  }
  pageAlternates.set(loc, headAlts);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      if (data["@context"] !== "https://schema.org") fail(loc, "JSON-LD without schema.org context");
      if (JSON.stringify(data).includes("aggregateRating")) fail(loc, "unexpected rating markup");
    } catch {
      fail(loc, "invalid JSON-LD");
    }
  }

  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)) internalLinks.add(m[1]);
}

// Reciprocity: every alternate must point back to this page.
for (const [loc, alts] of pageAlternates) {
  for (const [key, target] of Object.entries(alts)) {
    if (key === "x-default") continue;
    const back = pageAlternates.get(target);
    if (!back) fail(loc, `alternate ${key} → ${target} not in sitemap`);
    else if (!Object.values(back).includes(loc)) fail(loc, `alternate ${target} does not link back`);
  }
}

for (const link of internalLinks) {
  const res = await fetch(`${BASE}${link}`, { redirect: "manual" });
  if (res.status !== 200) fail(link, `internal link returns ${res.status}`);
}
console.log(`internal links checked: ${internalLinks.size}`);

const robots = await (await fetch(`${BASE}/robots.txt`)).text();
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail("/robots.txt", "missing sitemap line");

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
