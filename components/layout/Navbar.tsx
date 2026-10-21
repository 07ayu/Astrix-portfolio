"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

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
                py-2.5
                bg-black/85
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(0,0,0,0.6)]
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
        <Link href="/" className="font-syne font-extrabold tracking-wider text-white">
          ASTRIX
        </Link>

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

        <button
          className="
            rounded-full
            bg-[#6D5DFC]
            px-6
            py-2.5
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
      </nav>
    </header>
  );
}
