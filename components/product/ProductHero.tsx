"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { LineReveal, Reveal } from "@/components/motion/Reveal";

const ProductFanCanvas = dynamic(
  () => import("@/components/three/FanCanvas").then((m) => m.ProductFanCanvas),
  { ssr: false }
);

export function ProductHero() {
  const reduced = useReducedMotion();

  return (
    <section className="dark-section grain relative flex min-h-svh flex-col overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_90%_at_50%_-10%,#1946c8_0%,#0b2c8f_48%,#071f63_100%)]"
      />
      <div className="container-x relative z-10 grid flex-1 items-center gap-10 pb-20 pt-36 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-eyebrow text-green">Chapter One · Ventilation</p>
          </Reveal>
          <div className="mt-7">
            <LineReveal
              as="h1"
              className="text-display text-5xl sm:text-6xl md:text-7xl"
              lines={[
                <span key="k">Kamet</span>,
                <span key="s" className="text-white/55">
                  150mm Exhaust Fan
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/60">
              Named after a Himalayan peak, built for Indian homes. Seven
              balanced blades, whisper-quiet and rust-proof — the first
              product in a circular electrical ecosystem.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/isi-mark.svg"
                alt="ISI mark"
                width={46}
                height={50}
                className="h-12 w-auto"
              />
              <p className="text-xs font-bold leading-relaxed tracking-wide text-white/60">
                BIS Certified · ISI Marked
                <span className="block text-white/40">
                  IS:302-2-80:2017 · CM/L 8100188709
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12">
              {[
                ["150mm", "Sweep"],
                ["3 yrs", "Warranty"],
                ["₹20", "Return & Earn"],
              ].map(([v, l]) => (
                <div key={l} className="bg-navy-deep/90 px-5 py-4">
                  <dt className="order-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
                    {l}
                  </dt>
                  <dd className="text-xl font-extrabold tracking-tight md:text-2xl">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#specs"
                className="inline-flex items-center gap-3 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_34px_-12px_rgba(241,39,42,0.55)] transition-colors hover:bg-[#d31d20]"
              >
                Full Specifications
              </a>
              <a
                href="#return-earn"
                className="text-sm font-bold text-green underline-offset-4 hover:underline"
              >
                Return &amp; Earn ₹20 →
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,160,255,0.25),transparent_70%)] blur-xl"
          />
          <div className="relative h-[46vh] min-h-72 w-full lg:h-[62vh]">
            <ProductFanCanvas />
          </div>
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-white/35">
            Drag to explore · 360°
          </p>
        </motion.div>
      </div>
    </section>
  );
}
