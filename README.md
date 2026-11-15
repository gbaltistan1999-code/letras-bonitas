# LetrasHub

Multilingual fancy-letters generator ("letras bonitas") built with Next.js 16 (App Router), TypeScript and Tailwind CSS 4.

- Spanish (default) at `/`, Brazilian Portuguese at `/pt`, English at `/en`
- 51 Unicode text styles in 12 categories, converted live in the browser
- 10 style/platform pages + 7 trust/legal pages per language (54 static pages)
- Cookie banner + settings panel, localized 404, sitemap with hreflang, robots.txt, JSON-LD

No `.env` files, API keys, database, accounts or backend. Everything public is configured in [`lib/site-config.ts`](lib/site-config.ts).

---

## 1. Getting started

Requirements: Node.js 20.9+ (tested with Node 24).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (prerenders all 54 pages) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm test` | Unit tests for the Unicode engine (Node's built-in test runner) |
| `npm run test:seo -- http://localhost:3000` | Crawls the running site: status codes, one H1, unique titles/descriptions, canonicals, reciprocal hreflang, JSON-LD, internal links |

## 2. Deployment

The site needs a Node.js runtime, because `proxy.ts` (formerly "middleware") runs on each request. A pure static export (`output: "export"`) is **not** supported.

- **Vercel**: import the repo, no settings needed.
- **Any Node host** (Railway, Render, a VPS…): `npm ci && npm run build && npm start` (set `PORT` if needed).

All pages are prerendered at build time. The proxy only redirects `/es/*` to `/*` and tells the 404 page which language to use.

## 3. Project structure

```
app/
  (es)/layout.tsx, page.tsx, [slug]/page.tsx     Spanish routes  (/ , /letras-goticas …)
  (pt)/pt/…                                       Portuguese      (/pt, /pt/nick-bonito …)
  (en)/en/…                                       English         (/en, /en/gothic-text …)
  global-not-found.tsx                            Localized 404 for every unknown URL
  sitemap.ts, robots.ts, icon.svg, globals.css
components/
  generator/       Generator (client) + StyleCard
  cookies/         ConsentProvider, CookieBanner, CookieSettingsDialog, ConsentGate
  pages/           HomeView, StylePageView, InfoPageView, SlugRoute helpers
  Header, Footer, LanguageSwitcher, Breadcrumbs, Faqs, ContentSections, RichText …
lib/
  site-config.ts   Public config: domain, locales, owner details, optional services
  routes.ts        Page keys ↔ localized slugs, URL helpers
  unicode/         maps.ts (mapping tables), transform.ts (engine), styles.ts (catalogue)
  seo.ts, schema.ts, consent.ts, clipboard.ts, i18n.ts
dictionaries/      es.ts, pt.ts, en.ts: all short UI strings (typed)
data/{es,pt,en}/   home.ts, styles.ts (style/platform pages), info.ts (about, contact, FAQ, legal)
types/             Shared types (Dictionary, page content)
tests/             unicode.test.ts, seo-check.mjs
proxy.ts           /es redirect + 404 language header
```

Each language has its own root layout so `<html lang>` is correct in the static HTML. The three route folders are thin wrappers: the real page code lives in `components/pages/`.

### How the generator works

`lib/unicode/maps.ts` holds character tables built from the Unicode code charts (Mathematical Alphanumeric Symbols, Letterlike Symbols, Enclosed Alphanumerics, Fullwidth forms, phonetic letters). `lib/unicode/transform.ts`:

1. normalizes to NFD so `ñ` = `n` + combining tilde;
2. splits text into grapheme clusters (`Intl.Segmenter`, falling back to code-point iteration, never UTF-16 indices), so emoji are never split;
3. maps only the base letter and keeps the accent (`ñ` → `𝐧̃`);
4. **keeps any character a style has no equivalent for** (e.g. `q` in superscript, `x` in small caps);
5. recomposes to NFC.

Input is limited to 200 code points (`generatorMaxLength` in site config). Typed text is never sent anywhere or stored.

## 4. How to add a style

1. Add the id to `styleIds` in `lib/unicode/styles.ts` and an entry in `defs` (category + `apply` function). Add a map to `maps.ts` if needed.
2. Add its display name to `styleNames` in **all three** dictionaries. TypeScript will fail until you do.
3. Run `npm test`.

## 5. How to add a style or platform page

1. Add a key to `stylePageKeys` in `lib/routes.ts` (and to `letterStyleKeys` or `platformKeys` for the menu).
2. Add its slug for every language to `slugs` (lowercase, no accents).
3. Add the content in `data/es/styles.ts`, `data/pt/styles.ts` and `data/en/styles.ts`, plus a teaser in each `data/*/home.ts`. TypeScript enforces every field.
4. Write genuinely different content per page and language. Inline links use `[anchor](pageKey)`; unknown keys fail the build.

The page, menu entries, footer link, sitemap entry, hreflang and breadcrumbs are generated automatically.

## 6. How to add a language

1. `lib/site-config.ts`: add the code to `locales` and an entry to `localeMeta` (hreflang, html lang, og locale, labels).
2. `lib/routes.ts`: add a slug for that language to every entry in `slugs`, and handle the prefix in `parsePath`.
3. Create `dictionaries/xx.ts` and `data/xx/{home,styles,info}.ts`, and register them in `lib/i18n.ts`.
4. Copy `app/(en)` to `app/(xx)/xx` and replace `"en"` with `"xx"` in the three files.
5. `proxy.ts`: add the prefix to the locale detection.
6. Build and run `npm run test:seo`.

## 7. Cookies and privacy

The site only uses `localStorage` key `letrashub-consent` (necessary: it remembers the banner choice). There is no analytics or advertising. If you add a service:

1. Set it to `true` in `siteConfig.optionalServices`.
2. Load it **only** inside `<ConsentGate category="analytics">…</ConsentGate>`, so nothing runs before consent.
3. Update the Privacy and Cookie policies in all three languages.

## 8. Keyword map and information architecture

Search intent for every primary keyword is the same: *type text → see many styles instantly → copy in one tap.* That's why the generator sits above the fold on every page. No search volumes are claimed here.

| Page | ES (primary market) | PT-BR | EN |
| --- | --- | --- | --- |
| Home | letras bonitas, para copiar y pegar, generador de letras, letras diferentes, tipos de letras | letras bonitas, letras diferentes, copiar e colar, gerador de letras | fancy text generator, cool fonts copy and paste, fancy letters |
| Cursive | letras cursivas | letras cursivas | cursive text / cursive fonts |
| Gothic | letras góticas | letras góticas | gothic text / old english font |
| Small | letras pequeñas | letras pequenas | small text / tiny text |
| Strikethrough | letras tachadas | letras riscadas | strikethrough text |
| Nick | letras para nick | nick bonito, fontes para nick | nickname fonts |
| Free Fire | letras para Free Fire | letras para Free Fire, nick Free Fire | free fire fonts |
| Instagram / TikTok / WhatsApp / Discord | letras para … | letras para … | … fonts |

**Cannibalization:** there is deliberately no separate "generador de letras" or "letras raras" page; those intents live on the homepage (its title and H1 cover them). "Nick" is about gaming nicknames in general, "Free Fire" about that game's specifics, and each page links to the other.

**Internal linking:** each homepage links to all 10 style/platform pages. Each style page links to 4 related pages plus the homepage generator, and has breadcrumbs. The footer links to every style page and all trust/legal pages. The language switcher links to the equivalent page in each language.

## 9. Launch checklist: owner-supplied items still missing

These are intentionally **not invented**. Until they're supplied, the site shows clearly marked "PENDIENTE / PENDENTE / PENDING" notices.

- [ ] **Contact email**: `siteConfig.contactEmail` (enables the mailto link and the contact form).
- [ ] **Owner/author name and short bio** (per language): `siteConfig.owner` (shown on About; also enables `publisher` in JSON-LD).
- [ ] **Hosting provider** name, privacy-policy link and log retention: the "PENDING" note in section 4 of each privacy policy (`data/*/info.ts`).
- [ ] **Governing law and jurisdiction**: section 8 of the Terms in each language.
- [ ] **Legal review** of the privacy policy, terms and cookie policy for your jurisdiction (GDPR/Spain, LGPD/Brazil, Latin American and US state laws).
- [ ] Optional: a 1200×630 share image as `app/opengraph-image.png` (then switch the Twitter card to `summary_large_image` in `lib/seo.ts`).
- [ ] After deploying: submit `https://letrashub.com/sitemap.xml` in Google Search Console and check PageSpeed Insights on the live URL.
