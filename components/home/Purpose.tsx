"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollHint } from "@/components/ui/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { text: "Making every electrical purchase", accent: false },
  { text: "a better choice", accent: true },
  { text: "for people", accent: false },
  { text: "for business", accent: false },
  { text: "for the planet.", accent: "green" },
];

/** Cinematic pinned sequence stepping through the brand purpose. */
export function Purpose() {
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      if (reduced) {
        gsap.set(steps, { autoAlpha: 1, scale: 1, filter: "none" });
        gsap.set("[data-hint]", { autoAlpha: 0 });
        return;
      }
      gsap.set(steps, { autoAlpha: 0, scale: 0.94, filter: "blur(8px)" });
      // first line is visible before any scrolling — the section never looks empty
      gsap.set(steps[0], { autoAlpha: 1, scale: 1, filter: "blur(0px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: `+=${STEPS.length * 70}%`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set("[data-hint-fill]", { scaleX: self.progress });
            gsap.to("[data-hint]", {
              autoAlpha: self.progress > 0.95 ? 0 : 1,
              duration: 0.3,
              overwrite: "auto",
            });
          },
        },
      });

      // scroll swaps each line for the next; the first already shows
      for (let i = 1; i < steps.length; i++) {
        tl.to(
          steps[i - 1],
          { autoAlpha: 0, scale: 1.05, filter: "blur(8px)", duration: 1, ease: "power2.in" },
          "+=0.5"
        );
        tl.to(
          steps[i],
          { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
          "<0.3"
        );
      }
      // gentle green bloom on the final line
      tl.to("[data-bloom]", { opacity: 1, duration: 1.4 }, "<");
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="purpose"
      ref={section}
      className="dark-section grain relative flex min-h-svh items-center overflow-hidden bg-navy text-white"
      aria-label="Brand purpose"
    >
      <div
        aria-hidden="true"
        data-bloom
        className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.22),transparent_70%)] opacity-0 blur-2xl"
      />
      <div className="container-x relative text-center">
        <p className="text-eyebrow text-white/40">Brand Purpose</p>
        <div className="relative mt-10 grid min-h-[40vh] items-center">
          {STEPS.map((s, i) => (
            <p
              key={i}
              data-step
              className={`text-display col-start-1 row-start-1 mx-auto max-w-4xl text-4xl sm:text-5xl md:text-7xl ${
                s.accent === "green"
                  ? "serif-accent text-green"
                  : s.accent
                    ? "serif-accent text-white"
                    : "text-white"
              }`}
            >
              {s.text}
            </p>
          ))}
        </div>
      </div>

      <ScrollHint dark />
    </section>
  );
}
