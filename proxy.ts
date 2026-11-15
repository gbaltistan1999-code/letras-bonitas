import { NextResponse, type NextRequest } from "next/server";

/**
 * URL scheme: Spanish (default) at "/", Portuguese at "/pt", English at "/en".
 * Each language has real routes (app/(es), app/(pt)/pt, app/(en)/en), so no
 * rewriting is needed. This proxy only:
 *  - permanently redirects "/es" and "/es/…" to the unprefixed URL (no duplicates);
 *  - tells app/global-not-found.tsx which language a 404 should be shown in.
 * No detection by IP or Accept-Language: visitors choose their language via
 * the switcher, and crawlers can reach every version directly.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const first = pathname.split("/")[1];
  const locale = first === "pt" || first === "en" ? first : "es";
  const headers = new Headers(request.headers);
  headers.set("x-letrashub-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension.
  matcher: ["/((?!_next/|api/|sitemap\\.xml|robots\\.txt|icon|apple-icon|opengraph-image|.*\\..*).*)"],
};
