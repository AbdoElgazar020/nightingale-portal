import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/news", label: "الأخبار" },
  { to: "/results", label: "النتائج" },
  { to: "/about", label: "عن المدرسة" },
  { to: "/gallery", label: "المعرض" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/75 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="size-10 bg-medical-dark rounded-2xl grid place-items-center ring-1 ring-medical-dark/10">
            <span className="size-4 rounded-full border-2 border-medical-teal" />
          </span>
          <span className="font-display font-bold text-lg text-medical-dark tracking-tight leading-tight">
            أكاديمية النخبة
            <span className="block text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
              للتمريض
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? "text-medical-teal"
                    : "text-foreground/70 hover:text-medical-dark"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-medical-teal rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/results"
            className="hidden sm:inline-flex items-center gap-2 bg-medical-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-medical-blue transition-all active:scale-[0.97]"
          >
            بوابة الطالب
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-10 grid place-items-center rounded-xl border border-border"
            aria-label="القائمة"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-lg text-sm font-medium ${
                  pathname === l.to
                    ? "bg-medical-teal/10 text-medical-teal"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
