"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // 1. Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 2. Repeat visit check
    const hasVisited = sessionStorage.getItem("astrix_preloader_seen");

    if (hasVisited || prefersReducedMotion) {
      setLoading(false);
      return;
    }

    setShouldRender(true);

    const startTime = performance.now();
    const duration = 1400; // ~1.4s

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const currentVal = Math.floor(eased * 100);
      setProgress(currentVal);

      if (progressRatio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        sessionStorage.setItem("astrix_preloader_seen", "true");
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => setShouldRender(false), 600);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] transition-all duration-700 ${
        loading ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6D5DFC22,transparent_60%)]" />

      {/* Futuristic assembling core visual */}
      <div className="relative flex items-center justify-center">
        {/* Orbital ring 1 */}
        <div className="h-44 w-44 rounded-full border border-[#6D5DFC]/30 animate-[spin_8s_linear_infinite]" />
        {/* Orbital ring 2 */}
        <div className="absolute h-56 w-56 rounded-full border border-dashed border-[#A89BFF]/25 animate-[spin_12s_linear_infinite_reverse]" />
        {/* Particle nodes */}
        <div className="absolute -top-3 h-2 w-2 rounded-full bg-[#A89BFF] shadow-[0_0_12px_#A89BFF] animate-pulse" />
        <div className="absolute -bottom-3 h-2 w-2 rounded-full bg-[#6D5DFC] shadow-[0_0_12px_#6D5DFC] animate-pulse" />

        {/* Central Assembling Octahedron Glass Core */}
        <div className="absolute flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-[#12101e]/85 backdrop-blur-xl shadow-[0_0_40px_rgba(109,93,252,0.45)]">
          <div className="h-8 w-8 rotate-45 border-2 border-[#A89BFF] bg-[#6D5DFC]/40 shadow-[0_0_20px_#6D5DFC]" />
        </div>
      </div>

      {/* Progress Counter & System Telemetry */}
      <div className="relative mt-12 text-center">
        <div className="font-syne text-5xl font-extrabold tracking-tight text-white md:text-6xl">
          {progress.toString().padStart(2, "0")}
          <span className="text-xl text-[#A89BFF] font-mono ml-1">%</span>
        </div>

        {/* Progress track */}
        <div className="mt-4 mx-auto h-1 w-48 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#6D5DFC] to-[#A89BFF] transition-all duration-75 shadow-[0_0_10px_#6D5DFC]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
          Astrix Core // Initializing
        </p>
      </div>
    </div>
  );
}
