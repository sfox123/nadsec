"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

type IconProps = {
  readonly className?: string;
};

const SunIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 7.05-1.41-1.41M6.46 6.46 5.05 5.05m0 13.9 1.41-1.41m13.9-13.9-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
  </svg>
);

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#values", label: "Core Values" },
  { href: "#board", label: "Vision & Mission" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-surface/70 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#hero" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/30">
            <Image
              src="/logo.png"
              alt="NADSEC logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </span>
          <span className="text-lg">NADSEC</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-4 py-2 text-sm font-medium text-muted shadow-sm transition hover:border-accent/60 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Toggle color mode"
        >
          {theme === "dark" ? (
            <>
              <SunIcon />
              Light mode
            </>
          ) : (
            <>
              <MoonIcon />
              Dark mode
            </>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
