"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        ref={navRef}
        className={`
    flex
    items-center
    gap-8
    rounded-full
    border
    border-white/10
    transition-all
    duration-500

    ${
      scrolled
        ? `
          px-5
          py-2
          bg-black/80
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
        `
        : `
          px-8
          py-4
          bg-black/60
          backdrop-blur-xl
        `
    }
  `}
      >
        <Link href="/" className="font-bold">
          ASTRIX
        </Link>

        <Link
          href="/about"
          className="
    relative
    transition-colors
    hover:text-[#6D5DFC]
  "
        >
          About
        </Link>
        <Link
          href="/services"
          className="
    relative
    transition-colors
    hover:text-[#6D5DFC]
  "
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="
    relative
    transition-colors
    hover:text-[#6D5DFC]
  "
        >
          Portfolio
        </Link>
        <button
          className="
    rounded-full
    bg-[#6D5DFC]
    px-6
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(109,93,252,0.5)]
  "
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </button>
      </nav>
    </header>
  );
}
