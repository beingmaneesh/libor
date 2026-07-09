"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { FUTURE_CATEGORIES } from "@/lib/content";

// constellation positions (percentages) for the five future categories
const NODES = [
  { x: 12, y: 62, delay: 0 },
  { x: 32, y: 30, delay: 0.6 },
  { x: 52, y: 55, delay: 1.2 },
  { x: 72, y: 26, delay: 1.8 },
  { x: 90, y: 48, delay: 2.4 },
];

/** Dark roadmap section — the ecosystem beyond the first product. */
export function FutureVision() {
  const reduced = useReducedMotion();

  return (
    <section
      className="dark-section grain relative overflow-hidden bg-navy-deep py-32 text-white md:py-44"
      aria-label="Future roadmap"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_110%,#0d2c66_0%,transparent_60%)]"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="text-eyebrow text-white/40">The Road Ahead</p>
        </Reveal>
        <div className="mt-8 max-w-4xl">
          <LineReveal
            as="h2"
            className="text-display text-4xl sm:text-5xl md:text-6xl"
            lines={[
              <span key="1">Today, one product.</span>,
              <span key="2">
                Tomorrow, a complete{" "}
                <span className="serif-accent text-green">ecosystem.</span>
              </span>,
            ]}
          />
        </div>

        {/* constellation of future categories */}
        <div className="relative mt-20 h-64 md:h-72" role="list" aria-label="Future product categories">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d={`M ${NODES.map((n) => `${n.x} ${n.y}`).join(" L ")}`}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </svg>
          {NODES.map((n, i) => (
            <motion.div
              key={FUTURE_CATEGORIES[i]}
              role="listitem"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="relative flex h-4 w-4 items-center justify-center md:h-5 md:w-5">
                  <span
                    className={`absolute inset-0 rounded-full ${
                      i === 0 ? "bg-green" : "bg-blue"
                    } ${reduced ? "" : "animate-ping"} opacity-25`}
                    style={{ animationDuration: "3s", animationDelay: `${n.delay}s` }}
                  />
                  <span
                    className={`relative h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${
                      i === 0
                        ? "bg-green shadow-[0_0_20px_4px_rgba(82,180,75,0.5)]"
                        : "bg-white/80 shadow-[0_0_18px_3px_rgba(120,160,255,0.4)]"
                    }`}
                  />
                </span>
                <span
                  className={`whitespace-nowrap text-xs font-bold tracking-[0.18em] uppercase md:text-sm ${
                    i === 0 ? "text-green" : "text-white/55"
                  }`}
                >
                  {FUTURE_CATEGORIES[i]}
                </span>
                {i === 0 && (
                  <span className="rounded-full border border-green/40 px-2.5 py-0.5 text-[0.6rem] font-bold tracking-widest text-green">
                    NOW
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
