"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollHint } from "@/components/ui/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "Every product matters.",
  "Every decision matters.",
  "Every purchase creates an impact.",
  "We're building an electrical brand that gives back more than it takes.",
];

/** Pinned scroll sequence — one manifesto sentence at a time, huge type. */
export function Manifesto() {
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-line]");
      if (reduced) {
        gsap.set(lines, { autoAlpha: 1, y: 0 });
        gsap.set("[data-hint]", { autoAlpha: 0 });
        return;
      }
      gsap.set(lines, { autoAlpha: 0, y: 60 });
      // first line is visible before any scrolling — the section never looks empty
      gsap.set(lines[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: `+=${LINES.length * 70}%`,
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            // live progress + fade the cue away as the story completes
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
      for (let i = 1; i < lines.length; i++) {
        tl.to(lines[i - 1], { autoAlpha: 0, y: -60, duration: 1, ease: "power3.in" }, "+=0.6");
        tl.to(lines[i], { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, "<0.35");
      }
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={section}
      className="relative flex min-h-svh items-center overflow-hidden bg-mist"
      aria-label="Brand manifesto"
    >
      {/* faint circular-economy motif */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/2 h-[70vmin] w-[70vmin] -translate-y-1/2 rounded-full border border-blue/8 animate-spin-slow"
      >
        <div className="absolute inset-10 rounded-full border border-green/10" />
        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/50" />
      </div>

      <div className="container-x relative">
        <p className="text-eyebrow text-blue">The LIBOR Manifesto</p>
        <div className="relative mt-8 grid min-h-[42vh] items-center md:min-h-[46vh]">
          {LINES.map((line, i) => (
            <p
              key={i}
              data-line
              className={`text-display col-start-1 row-start-1 max-w-5xl text-4xl text-navy sm:text-5xl md:text-7xl ${
                i === LINES.length - 1 ? "md:text-6xl lg:text-7xl" : ""
              }`}
            >
              {line.split(" impact.").length > 1 ? (
                <>
                  {line.replace(" impact.", " ")}
                  <span className="serif-accent text-green">impact.</span>
                </>
              ) : (
                line
              )}
            </p>
          ))}
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
