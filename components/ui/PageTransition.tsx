"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reducedMotion);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="relative w-full flex-1">
        {/* Subtle Violet Route Wipe Overlay */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          style={{ originY: 0 }}
          className="fixed inset-0 z-[80] pointer-events-none bg-gradient-to-b from-[#6D5DFC]/60 via-[#1a1236] to-[#070707]"
        />

        {/* Content Fade / Rise */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
