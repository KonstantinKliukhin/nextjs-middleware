"use client";

import { useEffect, useMemo, useState } from "react";

import { getIsClient } from "./get-is-client";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const sizesMap: Record<string, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export type BreakpointKey = `${"min" | "max"}-${keyof typeof sizesMap}`;

export function useMediaQuery(
  key: BreakpointKey,
  options?: UseMediaQueryOptions
): boolean;

export function useMediaQuery(
  key: BreakpointKey,
  { defaultValue = false }: UseMediaQueryOptions = {}
): boolean {
  const query = useMemo(() => {
    const [direction, size] = key.split("-");

    return `(${direction}-width: ${sizesMap[size]})`;
  }, [key]);

  const getMatches = (query: string): boolean => {
    if (!getIsClient()) {
      return defaultValue;
    }

    let resultQuery = query;
    if (query in sizesMap) {
      resultQuery = `(max-width: ${sizesMap[query]})`;
    }

    return window.matchMedia(resultQuery).matches;
  };

  const [matches, setMatches] = useState<boolean>(defaultValue);

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    //eslint-disable-next-line
  }, [query]);

  return matches;
}
