"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { CIRCULAR_STAGES } from "@/lib/content";

const R = 150;
const CX = 200;
const CY = 200;

/** Interactive circular-economy loop with six stages. */
export function Sustainability() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % CIRCULAR_STAGES.length),
      3200
    );
    return () => clearInterval(id);
  }, [paused, reduced]);

  return (
    <section
      id="sustainability"
      className="dark-section grain relative overflow-hidden bg-[linear-gradient(170deg,#0d2413_0%,#12341a_50%,#081d49_130%)] py-28 text-white md:py-40"
      aria-label="Circular economy"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.2),transparent_70%)] blur-2xl"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="text-eyebrow text-green">The Circular Economy</p>
          <h2 className="text-display mt-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Building products with{" "}
            <span className="serif-accent text-green">tomorrow</span> in mind.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* the loop */}
          <div
            className="relative mx-auto w-full max-w-md"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <svg viewBox="0 0 400 400" className="w-full" aria-hidden="true">
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              />
              {/* progress arc */}
              <motion.circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="#52B44B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * R}
                animate={{
                  strokeDashoffset:
                    2 * Math.PI * R * (1 - (active + 1) / CIRCULAR_STAGES.length),
                }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                transform={`rotate(-90 ${CX} ${CY})`}
              />
              {/* directional arrows on the ring */}
              {[30, 90, 150, 210, 270, 330].map((deg) => (
                <path
                  key={deg}
                  d="M -5 -4 L 5 0 L -5 4"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  transform={`rotate(${deg} ${CX} ${CY}) translate(${CX + R} ${CY}) rotate(90)`}
                />
              ))}
            </svg>

            {/* stage nodes */}
            {CIRCULAR_STAGES.map((s, i) => {
              const angle = (i / CIRCULAR_STAGES.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + (Math.cos(angle) * R * 100) / 400;
              const y = 50 + (Math.sin(angle) * R * 100) / 400;
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`Stage ${i + 1}: ${s.title}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span
                    className={`block h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? "scale-150 border-green bg-green shadow-[0_0_24px_4px_rgba(82,180,75,0.5)]"
                        : "border-white/40 bg-navy hover:border-green"
                    }`}
                  />
                </button>
              );
            })}

            {/* active stage readout in the centre */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-[13rem] text-center"
                >
                  <p className="text-xs font-bold tracking-[0.25em] text-green">
                    {String(active + 1).padStart(2, "0")} / 06
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {CIRCULAR_STAGES[active].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* stage list */}
          <div>
            <ol className="space-y-1">
              {CIRCULAR_STAGES.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-start gap-5 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                      i === active ? "bg-white/8" : "hover:bg-white/4"
                    }`}
                  >
                    <span
                      className={`mt-1 text-xs font-extrabold tracking-widest ${
                        i === active ? "text-green" : "text-white/30"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span
                        className={`block font-bold transition-colors ${
                          i === active ? "text-white" : "text-white/55"
                        }`}
                      >
                        {s.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {i === active && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="block overflow-hidden text-sm leading-relaxed text-white/55"
                          >
                            <span className="block pt-1.5">{s.body}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-green/25 bg-green/10 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green text-lg font-extrabold text-white">
                ₹20
              </span>
              <p className="text-sm leading-relaxed text-white/75">
                <strong className="text-white">Return &amp; Earn.</strong> Bring
                back any old fan to a LIBOR partner and earn ₹20 — while we make
                sure it never reaches a landfill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
