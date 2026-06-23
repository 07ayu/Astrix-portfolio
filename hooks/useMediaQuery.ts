"use client";

import { useCallback, useEffect, useState } from "react";

const queryCache = new Map<string, boolean>();

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      const cached = queryCache.get(query);
      if (cached !== undefined) return cached;
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const cached = queryCache.get(query);
    if (cached !== mql.matches) {
      queryCache.set(query, mql.matches);
    }

    const handler = (e: MediaQueryListEvent) => {
      queryCache.set(query, e.matches);
      setMatches(e.matches);
    };

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
