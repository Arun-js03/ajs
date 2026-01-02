"use client";

import Lenis from "@studio-freight/lenis";
import { type ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
}
