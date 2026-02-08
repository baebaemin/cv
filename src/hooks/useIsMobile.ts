"use client";

import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 768;

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches;
}

function subscribe(callback: () => void): () => void {
  const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/** 모바일 여부 판별 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
