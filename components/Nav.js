"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Mark from "./Mark";
import Wordmark from "./Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";
const NAV_LINKS = [
  ["Festivals", "/festival"],
  ["About", "/about"],
  ["Destinations", "/destinations"],
  ["Packages", "/packages"],
  ["Corporate", "/#corporate"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-neutral-800" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between h-[84px]">
        <Link href="/" className="flex items-center gap-3.5">
          <Mark size={34} />
          <Wordmark size={20} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 text-[13px] tracking-wide text-neutral-300 hover:text-ivory transition-colors"
            >
              {label === "Festivals" && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
              )}
              {label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        <Link
          href="/reserve"
          className="hidden md:inline-flex items-center border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
        >
          Reserve
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ivory text-sm tracking-wide"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-neutral-800 py-6">
          <div className="max-w-[1240px] mx-auto px-8 flex flex-col gap-5">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-lg"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/reserve"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest mt-2"
            >
              Reserve
            </Link>
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
