"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useStagger } from "@/hooks/useStagger";
import { SERVICES, CONTACT_INFO } from "@/data";
import Link from "next/link";

function renderServiceIcon(type: string) {
  switch (type) {
    case "web":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 10h16M4 14h16M4 18h16M8 6v12m8-12v12" />
        </svg>
      );
    case "mobile":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z" />
        </svg>
      );
    case "desktop":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "solutions":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "ar":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m8 0h1m-9 5h8a3 3 0 003-3v-4a3 3 0 00-3-3h-8a3 3 0 00-3 3v4a3 3 0 003 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 8a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "ai":
    default:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
  }
}

export default function Services() {
  const sectionRef = useStagger(".service-item", { stagger: 0.1 });

  return (
    <section ref={sectionRef} className="container-custom py-28 border-b border-white/5">
      <SectionHeader
        badge="OUR CAPABILITIES"
        title="Modern, Scalable & High-Impact Digital Solutions"
        description="From responsive web platforms and cross-platform mobile apps to immersive AR experiences and production AI integration."
      />

      {/* 6 Core Services Grid matching Astrix authentic services */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="service-item group relative flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#0E0E14] p-8 transition-all duration-300 hover:border-[#6D5DFC]/60 hover:bg-[#12111A] hover:shadow-[0_0_30px_rgba(109,93,252,0.15)]"
          >
            <div>
              {/* Top Row: Glowing Icon & Index Badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#141220] text-[#A89BFF] shadow-[0_0_20px_rgba(109,93,252,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#6D5DFC] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(109,93,252,0.45)]">
                  {renderServiceIcon(service.iconType)}
                </div>

                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Tagline from authentic details */}
              <h3 className="mt-6 font-syne text-2xl font-bold text-white transition-colors group-hover:text-[#A89BFF]">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-[#A89BFF]">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>

              {/* Capabilities checklist */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom link */}
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
              <span className="font-mono text-[11px] text-neutral-400">
                {service.metric}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#A89BFF] hover:text-white transition-colors"
              >
                <span>Inquire</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Authentic Astrix Bottom Quick-Connect Bar from the image */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B10] p-6 backdrop-blur-xl">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6D5DFC]/40 bg-[#6D5DFC]/10 text-[#A89BFF] shadow-[0_0_20px_rgba(109,93,252,0.3)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <a href={`tel:${CONTACT_INFO.phone}`} className="font-syne text-lg font-bold text-white hover:text-[#A89BFF] transition-colors">
                {CONTACT_INFO.phone}
              </a>
              <p className="text-xs text-neutral-400">{CONTACT_INFO.phoneActionText}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 border-t border-white/5 pt-4 md:border-t-0 md:border-l md:border-white/10 md:pt-0 md:pl-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6D5DFC]/40 bg-[#6D5DFC]/10 text-[#A89BFF] shadow-[0_0_20px_rgba(109,93,252,0.3)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-syne text-sm font-bold text-white hover:text-[#A89BFF] transition-colors break-all">
                {CONTACT_INFO.email}
              </a>
              <p className="text-xs text-neutral-400">{CONTACT_INFO.emailActionText}</p>
            </div>
          </div>

          {/* Motto / Tagline */}
          <div className="flex items-center gap-4 border-t border-white/5 pt-4 md:border-t-0 md:border-l md:border-white/10 md:pt-0 md:pl-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6D5DFC]/40 bg-[#6D5DFC]/10 text-[#A89BFF] shadow-[0_0_20px_rgba(109,93,252,0.3)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-syne text-sm font-bold text-white tracking-wide">
                {CONTACT_INFO.motto}
              </p>
              <p className="text-xs text-neutral-400">{CONTACT_INFO.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
