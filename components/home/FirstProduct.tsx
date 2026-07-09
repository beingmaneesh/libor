"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, LineReveal } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { FanIllustration } from "@/components/ui/FanIllustration";
import { PRODUCT } from "@/lib/content";

/** Chapter one: the Kamet exhaust fan, introduced after the brand story. */
export function FirstProduct() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mist py-28 md:py-40"
      aria-label="Our first product"
    >
      <div className="container-x">
        <Reveal>
          <p className="text-eyebrow text-blue">Chapter One</p>
        </Reveal>
        <div className="mt-8 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <LineReveal
              as="h2"
              className="text-display text-4xl text-navy sm:text-5xl md:text-6xl"
              lines={[
                <span key="1">Where our</span>,
                <span key="2">
                  journey{" "}
                  <span className="serif-accent text-blue">begins.</span>
                </span>,
              ]}
            />
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-navy/60">
                {PRODUCT.subline}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-navy/60">
                Meet the <strong className="text-navy">{PRODUCT.name}</strong> —
                quiet, compact, built in India, and designed to return to the
                loop when its long life is done.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Highlights">
                {["ISI Marked", "7 Blades", "150mm Sweep", "Low Noise", "3-Year Warranty", "Made in India"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-full border border-navy/12 bg-white px-4 py-2 text-xs font-bold tracking-wide text-navy/70"
                    >
                      {t}
                    </li>
                  )
                )}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTA href="/products" variant="navy">
                  Explore the Kamet
                </CTA>
              </div>
            </Reveal>
          </div>

          <motion.div
            style={reduced ? undefined : { y }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* stage */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(closest-side,rgba(18,61,138,0.14),transparent_72%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full border border-blue/10 animate-spin-slow"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green" />
            </div>
            <FanIllustration className="relative w-full drop-shadow-[0_40px_60px_rgba(8,29,73,0.25)]" spinning={!reduced} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
