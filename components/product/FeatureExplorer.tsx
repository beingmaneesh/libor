"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCT } from "@/lib/content";
import fanPhoto from "@/public/images/kamet-fan.png";

// hotspot anchor positions on the product photo (percentages)
const HOTSPOTS = [
  { x: 50, y: 50 }, // low noise → centre cap
  { x: 12, y: 20 }, // body → frame corner
  { x: 68, y: 28 }, // high speed → blade
  { x: 89, y: 58 }, // rust & shock proof → frame right
  { x: 16, y: 84 }, // easy mount → lower frame
  { x: 50, y: 8 }, // compact → top frame
  { x: 76, y: 88 }, // made in india → lower right
];

/** Interactive feature highlights — pick a feature, see it on the product. */
export function FeatureExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-28 md:py-40" aria-label="Feature highlights">
      <div className="container-x">
        <Reveal>
          <p className="text-eyebrow text-blue">Feature Highlights</p>
          <h2 className="text-display mt-8 max-w-3xl text-3xl text-navy sm:text-4xl md:text-5xl">
            Every detail earns its place.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* product photo with hotspots */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(closest-side,rgba(18,61,138,0.12),transparent_72%)]"
            />
            <Image
              src={fanPhoto}
              alt="Kamet 150mm exhaust fan — square white body with louvered grille and seven blades"
              placeholder="blur"
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="relative w-full rounded-[2rem] border border-navy/8 shadow-[0_30px_70px_-35px_rgba(8,29,73,0.4)]"
            />
            {HOTSPOTS.map((h, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={PRODUCT.features[i].title}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  {i === active && (
                    <motion.span
                      layoutId="hotspot-ring"
                      className="absolute inset-0 rounded-full border-2 border-red"
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    />
                  )}
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.6rem] font-extrabold transition-colors duration-300 ${
                      i === active
                        ? "bg-red text-white"
                        : "bg-white text-navy shadow-[0_4px_14px_rgba(8,29,73,0.25)] hover:bg-mist"
                    }`}
                  >
                    {i + 1}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* feature detail + list */}
          <div>
            <div className="min-h-40 rounded-3xl bg-mist p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-6"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold tracking-[0.25em] text-red">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(PRODUCT.features.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy">
                      {PRODUCT.features[active].title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/60 md:text-base">
                      {PRODUCT.features[active].story}
                    </p>
                  </div>
                  {PRODUCT.features[active].icon && (
                    <div className="hidden shrink-0 items-center justify-center rounded-2xl bg-navy p-4 sm:flex">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PRODUCT.features[active].icon}
                        alt=""
                        aria-hidden="true"
                        width={64}
                        height={90}
                        loading="lazy"
                        className="h-20 w-auto"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {PRODUCT.features.map((f, i) => (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    i === active
                      ? "border-navy bg-navy text-white"
                      : "border-navy/15 bg-white text-navy/60 hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
