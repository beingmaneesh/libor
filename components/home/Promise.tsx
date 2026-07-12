"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { BRAND } from "@/lib/content";

const PANELS = [
  {
    title: "Quality",
    line: "you can trust.",
    body: "Materials chosen for decades, not seasons. Every Kamet is tested beyond standards and backed by a 3-year warranty.",
    surface:
      "bg-[linear-gradient(160deg,#2151e0_0%,#0b2c8f_60%,#071f63_100%)]",
    glow: "bg-[radial-gradient(closest-side,rgba(120,160,255,0.4),transparent_70%)]",
  },
  {
    title: "Responsibility",
    line: "you can see.",
    body: "A visible circular loop — return your old fan, watch it become raw material, earn ₹20 for closing the circle.",
    surface:
      "bg-[linear-gradient(160deg,#2e7d33_0%,#1d4a24_55%,#0d2413_100%)]",
    glow: "bg-[radial-gradient(closest-side,rgba(140,230,130,0.4),transparent_70%)]",
  },
  {
    title: "Value",
    line: "that returns.",
    body: "Fair prices, honest margins for partners, and rewards that flow back to the people who choose responsibly.",
    surface:
      "bg-[linear-gradient(160deg,#f1272a_0%,#a3161c_55%,#4a0a10_100%)]",
    glow: "bg-[radial-gradient(closest-side,rgba(255,150,140,0.4),transparent_70%)]",
  },
];

/** Three large brand-promise panels. */
export function Promise() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Brand promise">
      <div className="container-x">
        <Reveal>
          <p className="text-eyebrow text-blue">Brand Promise</p>
          <h2 className="text-display mt-8 max-w-4xl text-3xl text-navy sm:text-4xl md:text-5xl">
            {BRAND.promise}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {PANELS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`grain group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-white md:min-h-[30rem] ${p.surface}`}
            >
              {/* material glow that breathes on hover */}
              <div
                aria-hidden="true"
                className={`absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-90 ${p.glow}`}
              />
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-xs font-bold text-white/70"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <h3 className="text-display text-4xl md:text-5xl">
                  {p.title}
                  <span className="serif-accent mt-1 block text-2xl text-white/75 md:text-3xl">
                    {p.line}
                  </span>
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
