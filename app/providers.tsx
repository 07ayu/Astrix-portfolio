"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import gsap from "gsap";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
