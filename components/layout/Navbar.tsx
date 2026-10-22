"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-max">
      {/* Main Floating Pill Bar */}
      <nav
        ref={navRef}
        className={`
          flex
          items-center
          justify-between
          md:justify-start
          gap-4
          sm:gap-6
          md:gap-8
          rounded-full
          border
          border-white/10
          transition-all
          duration-500
          ${
            scrolled || mobileMenuOpen
              ? "px-5 py-2.5 bg-black/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
              : "px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-black/60 backdrop-blur-xl"
          }
        `}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-syne font-extrabold tracking-wider text-white text-sm sm:text-base hover:text-[#A89BFF] transition-colors"
        >
          ASTRIX
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative
                  text-sm
                  transition-colors
                  duration-200
                  ${isActive ? "text-[#A89BFF] font-medium" : "text-neutral-300 hover:text-white"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <button
          className="
            hidden
            md:inline-flex
            items-center
            rounded-full
            bg-[#6D5DFC]
            px-5
            lg:px-6
            py-2
            lg:py-2.5
            text-xs
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#7c6dff]
            hover:shadow-[0_0_25px_rgba(109,93,252,0.45)]
            active:scale-95
          "
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </button>

        {/* Mobile Right Controls: Compact Contact + Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => router.push("/contact")}
            className="rounded-full bg-[#6D5DFC] px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#7c6dff]"
          >
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Glassmorphism Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 w-full rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all ${
                    isActive
                      ? "bg-[#6D5DFC]/20 text-[#A89BFF] font-semibold border border-[#6D5DFC]/30"
                      : "text-neutral-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-500">→</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-center rounded-xl bg-[#6D5DFC] py-3 text-xs font-semibold text-white shadow-[0_0_20px_rgba(109,93,252,0.35)]"
            >
              Start a Project / Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
