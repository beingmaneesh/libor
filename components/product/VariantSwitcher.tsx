"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variant } from "@/lib/products";
import { SpecTable, DimensionTable, FeatureList } from "./ProductTables";

/** Casa ships as two fronts — same motor, different face. */
export function VariantSwitcher({ variants }: { variants: Variant[] }) {
  const [active, setActive] = useState(0);
  const v = variants[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose a Casa model"
        className="flex flex-wrap gap-2.5"
      >
        {variants.map((variant, i) => (
          <button
            key={variant.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative rounded-full border px-6 py-3 text-sm font-bold transition-all duration-300 ${
              i === active
                ? "border-navy bg-navy text-white"
                : "border-navy/15 bg-white text-navy/60 hover:border-navy/40 hover:text-navy"
            }`}
          >
            {variant.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-navy/8 bg-white">
              <Image
                src={v.image}
                alt={v.subtitle}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain p-8"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
                {v.subtitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/60">
                {v.description}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <SpecTable specs={v.specs} />
            <div className="space-y-10">
              <FeatureList features={v.features} />
              <DimensionTable rows={v.dimensions} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
