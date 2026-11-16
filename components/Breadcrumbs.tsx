import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/** Visual breadcrumb trail. The last item is the current page (not a link). */
export function Breadcrumbs({ items, label, tone = "light" }: { items: Crumb[]; label: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <nav aria-label={label} className={`text-sm ${dark ? "text-slate-400" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className={dark ? "text-slate-200" : "text-ink-soft"}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={`underline-offset-2 hover:underline ${dark ? "hover:text-white" : "hover:text-accent"}`}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5 shrink-0" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
