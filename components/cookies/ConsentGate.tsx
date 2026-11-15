"use client";

import { siteConfig } from "@/lib/site-config";
import type { OptionalCategory } from "@/lib/consent";
import { useConsent } from "./ConsentProvider";

/**
 * Renders children (e.g. an analytics <Script>) only when the service is
 * enabled in lib/site-config.ts AND the visitor consented to its category.
 * Nothing renders on the server or before a choice is made.
 *
 * Not used anywhere today, because the site loads no optional scripts.
 * Example:
 *   <ConsentGate category="analytics"><Script src="…" /></ConsentGate>
 */
export function ConsentGate({ category, children }: { category: OptionalCategory; children: React.ReactNode }) {
  const { consent } = useConsent();
  if (!siteConfig.optionalServices[category]) return null;
  if (!consent || !consent[category]) return null;
  return <>{children}</>;
}
