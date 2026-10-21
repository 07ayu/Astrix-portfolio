"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic import with ssr: false for zero SSR performance penalty
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroCanvasFallback />,
});

function HeroCanvasFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial from-[#6D5DFC]/10 via-transparent to-transparent opacity-80" />

      {/* Futuristic technical vector fallback */}
      <div className="relative flex items-center justify-center">
        <div className="h-64 w-64 rounded-full border border-white/10 animate-[spin_40s_linear_infinite]" />
        <div className="absolute h-80 w-80 rounded-full border border-dashed border-[#6D5DFC]/20 animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute h-48 w-48 rounded-full border border-[#A89BFF]/25" />
        <div className="absolute flex h-28 w-28 items-center justify-center rounded-2xl border border-white/20 bg-[#12101e]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(109,93,252,0.3)]">
          <div className="h-10 w-10 rotate-45 border-2 border-[#A89BFF] bg-[#6D5DFC]/30" />
        </div>
      </div>
    </div>
  );
}

export default function HeroCanvas() {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check for WebGL support
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!prefersReducedMotion && gl) {
      setShouldRender3D(true);
    }
  }, []);

  return (
    <div className="relative h-full w-full select-none overflow-hidden">
      {shouldRender3D ? <HeroScene /> : <HeroCanvasFallback />}
    </div>
  );
}
