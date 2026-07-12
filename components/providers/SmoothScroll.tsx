"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Height of the fixed navbar — anchor targets land just below it. */
const NAV_OFFSET = 0;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/** Glide to a section element or absolute Y. Falls back gracefully. */
export function smoothScrollTo(
  target: HTMLElement | number,
  offset: number = typeof target === "number" ? 0 : NAV_OFFSET
) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (lenis && !reduced) {
    lenis.scrollTo(target, { offset, duration: 1.4, easing: easeOutExpo });
    return;
  }
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    lenis = new Lenis({
      duration: 1.15,
      easing: easeOutExpo,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Intercept same-page anchor clicks and glide instead of jumping.
  // Capture phase so this runs before Next's <Link> router handling.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor || anchor.target === "_blank") return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const [path, rawHash] = href.split("#");
      if (!rawHash) return;
      const samePage =
        path === "" || path === window.location.pathname ||
        (path.endsWith("/") && path.slice(0, -1) === window.location.pathname);
      if (!samePage) return;

      const el = document.getElementById(rawHash);
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", `#${rawHash}`);
      smoothScrollTo(el);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // On route change: land on the hash target (if any) or jump to top,
  // then refresh scroll-driven animations once layout has settled.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const t = setTimeout(() => {
        ScrollTrigger.refresh();
        const el = document.getElementById(hash.slice(1));
        if (el) smoothScrollTo(el);
      }, 150);
      return () => clearTimeout(t);
    }
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
