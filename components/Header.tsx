"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Dictionary } from "@/types/dictionary";
import { LanguageSwitcher, useAlternateLinks } from "./LanguageSwitcher";
import { siteConfig } from "@/lib/site-config";
import { publicPath } from "@/lib/routes";

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  homeHref: string;
  labels: Dictionary["nav"];
  letterStyles: NavLink[];
  platforms: NavLink[];
  links: NavLink[];
}

export function Header({ homeHref, labels, letterStyles, platforms, links }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // mobile
  const [stylesOpen, setStylesOpen] = useState(false); // desktop dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileId = useId();
  const stylesId = useId();

  // Close menus after navigating.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setStylesOpen(false);
  }

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!stylesOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStylesOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setStylesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [stylesOpen, menuOpen]);

  const isActive = (href: string) => {
    const p = publicPath(pathname ?? "/");
    // The blog link stays active on every post (/blog/…).
    return p === href || (href.endsWith("/blog") && p.startsWith(`${href}/`));
  };

  // z-50: an opened mobile menu must cover the cookie banner (z-40).
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100/80 bg-white/85 shadow-sm shadow-purple-900/[0.02] backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={homeHref} className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={`LetrasHub — ${labels.home}`}
            width={623}
            height={160}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={labels.mainNav} className="hidden items-center gap-1 md:flex">
          <Link
            href={homeHref}
            aria-current={isActive(homeHref) ? "page" : undefined}
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink aria-[current=page]:text-accent"
          >
            {labels.home}
          </Link>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={stylesOpen}
              aria-controls={stylesId}
              onClick={() => setStylesOpen((v) => !v)}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
            >
              {labels.styles}
              <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${stylesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              id={stylesId}
              hidden={!stylesOpen}
              className="absolute left-1/2 top-full mt-2 w-[42rem] -translate-x-1/2 rounded-2xl border border-line bg-page p-4 shadow-lg"
            >
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                <MenuGroup title={labels.letterStyles} items={letterStyles} isActive={isActive} columns />
                <MenuGroup title={labels.platforms} items={platforms} isActive={isActive} />
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink aria-[current=page]:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher label={labels.language} />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl text-ink hover:bg-surface md:hidden"
          aria-expanded={menuOpen}
          aria-controls={mobileId}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          <span className="sr-only">{menuOpen ? labels.closeMenu : labels.openMenu}</span>
        </button>
      </div>

      {/* Mobile panel */}
      <div id={mobileId} hidden={!menuOpen} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-page md:hidden">
        <nav aria-label={labels.mainNav} className="mx-auto max-w-6xl space-y-5 px-4 py-5">
          <MobileLanguages label={labels.language} />
          <ul className="space-y-1">
            {[{ href: homeHref, label: labels.home }, ...links].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-surface aria-[current=page]:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <MenuGroup title={labels.letterStyles} items={letterStyles} isActive={isActive} large />
          <MenuGroup title={labels.platforms} items={platforms} isActive={isActive} large />
        </nav>
      </div>
    </header>
  );
}

function MenuGroup({
  title,
  items,
  isActive,
  large,
  columns,
}: {
  title: string;
  items: NavLink[];
  isActive: (href: string) => boolean;
  large?: boolean;
  /** Two columns in the desktop dropdown (long lists). */
  columns?: boolean;
}) {
  return (
    <div>
      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted">{title}</p>
      <ul className={`mt-2 ${large ? "grid grid-cols-2 gap-1" : columns ? "grid grid-cols-2 gap-x-2 gap-y-0.5" : "space-y-0.5"}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block rounded-lg px-3 text-ink-soft hover:bg-surface hover:text-ink aria-[current=page]:font-semibold aria-[current=page]:text-accent ${
                large ? "py-2.5" : "py-1.5 text-sm"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLanguages({ label }: { label: string }) {
  const links = useAlternateLinks();
  return (
    <div>
      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
      <ul className="mt-2 flex gap-1 rounded-full border border-line bg-surface p-1">
        {links.map((l) => {
          const meta = siteConfig.localeMeta[l.locale];
          return (
            <li key={l.locale} className="flex-1">
              <Link
                href={l.href}
                hrefLang={meta.hreflang}
                lang={meta.htmlLang}
                aria-current={l.current ? "true" : undefined}
                className={`flex h-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  l.current ? "bg-brand text-white shadow-sm shadow-purple-200" : "text-ink-soft hover:bg-page hover:text-ink"
                }`}
              >
                {meta.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
