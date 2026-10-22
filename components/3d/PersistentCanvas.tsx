"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor, View } from "@react-three/drei";

const ScrollCoreScene = dynamic(() => import("./ScrollCoreScene"), {
  ssr: false,
});

function StaticFallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070707]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DFC15,transparent_55%)]" />
      <div className="absolute right-10 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6D5DFC]/10 blur-[180px]" />
    </div>
  );
}

export default function PersistentCanvas() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [dpr, setDpr] = useState<number | [number, number]>([1, 1.5]);

  useEffect(() => {
    // 1. Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 2. Mobile screen check (disable heavy persistent 3D on small screens)
    const isMobile = window.innerWidth < 768;

    // 3. WebGL check
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!prefersReducedMotion && !isMobile && gl) {
      setCanRender3D(true);
    }

    // 4. Tab visibility listener to pause rendering when tab is hidden
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!canRender3D) {
    return <StaticFallback />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0.8, 0, 6.2], fov: 45 }}
        dpr={dpr}
        frameloop={isTabVisible ? "always" : "never"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          depth: true,
        }}
        className="h-full w-full"
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(1.5)}
        />
        <AdaptiveDpr pixelated={false} />
        <ScrollCoreScene />
        <View.Port />
      </Canvas>
    </div>
  );
}
