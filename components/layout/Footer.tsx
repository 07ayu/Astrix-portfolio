"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACT_INFO } from "@/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07070A]">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <Link href="/" className="font-syne text-2xl font-extrabold tracking-wider text-white">
              ASTRIX
            </Link>
            <p className="mt-3 font-medium text-xs text-[#A89BFF]">
              {CONTACT_INFO.motto}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {CONTACT_INFO.tagline}. We craft high-speed web apps, mobile solutions, desktop software, AR experiences, and AI integrations.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-4 font-syne text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-neutral-400">
              <Link href="/about" className="hover:text-white transition-colors">
                About Studio
              </Link>
              <Link href="/services" className="hover:text-white transition-colors">
                Services & Solutions
              </Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Start a Project
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-syne text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-400">
              <p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#A89BFF] transition-colors font-medium">
                  {CONTACT_INFO.phone}
                </a>
                <span className="block text-[11px] text-neutral-500">{CONTACT_INFO.phoneActionText}</span>
              </p>
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#A89BFF] transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
                <span className="block text-[11px] text-neutral-500">{CONTACT_INFO.emailActionText}</span>
              </p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-4 font-syne text-sm font-bold uppercase tracking-wider text-white">
              Engineering Dispatch
            </h4>
            <p className="mb-3 text-xs text-neutral-400">
              Insights on modern web architecture, mobile engineering, AR, and AI development.
            </p>

            {subscribed ? (
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                ✓ Subscribed to Astrix Architecture Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#121218] px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#6D5DFC]/60"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#6D5DFC] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#7c6dff]"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Astrix. {CONTACT_INFO.motto} — {CONTACT_INFO.tagline}.</p>
          <div className="flex gap-6">
            <span className="hover:text-neutral-400 transition-colors">{CONTACT_INFO.phoneActionText}</span>
            <span>•</span>
            <span className="hover:text-neutral-400 transition-colors">{CONTACT_INFO.emailActionText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
