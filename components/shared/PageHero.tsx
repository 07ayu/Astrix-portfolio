"use client";

// import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {/* glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-transparent via-[#6D5DFC]/20 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <div
          className={`max-w-4xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && (
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {eyebrow}
            </p>
          )}

          <h1 className="font-syne text-5xl font-bold leading-[0.9] text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {description && (
            <p className="mt-8 max-w-xl text-zinc-400 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
