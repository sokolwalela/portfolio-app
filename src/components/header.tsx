"use client";

import { useState, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Intro", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="mx-auto flex min-h-[var(--touch-min)] max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="min-h-[var(--touch-min)] min-w-[var(--touch-min)] flex items-center text-sm font-medium tracking-tight text-[var(--foreground)] sm:min-w-0"
        >
          Portfolio
        </a>

        <nav className="hidden items-center gap-6 md:flex md:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          className="flex min-h-[var(--touch-min)] min-w-[var(--touch-min)] flex-col items-center justify-center gap-1.5 rounded md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--foreground)] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <nav className="flex flex-col gap-0.5 px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="min-h-[var(--touch-min)] flex items-center rounded-lg px-3 text-[length:var(--type-scale-4)] text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] active:bg-[var(--muted-bg)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
