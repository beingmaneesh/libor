"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BRAND, MISSION_PILLARS } from "@/lib/content";

/** Four mission pillars, connected by an animated line. */
export function Mission() {
  return (
    <section
      className="relative overflow-hidden bg-mist py-28 md:py-40"
      aria-label="Our mission"
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-eyebrow text-blue">Mission</p>
              <h2 className="text-display mt-8 text-3xl text-navy sm:text-4xl md:text-5xl">
                One responsible ecosystem, four connected pillars.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-navy/60">
                {BRAND.mission}
              </p>
            </Reveal>
          </div>

          <div className="relative">
            {/* connective line drawn on scroll */}
            <motion.div
              aria-hidden="true"
              className="absolute bottom-8 left-[1.4rem] top-8 w-px origin-top bg-gradient-to-b from-blue via-green to-green"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <Stagger className="space-y-5" stagger={0.14}>
              {MISSION_PILLARS.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="group relative flex gap-6 rounded-3xl border border-navy/8 bg-white p-6 pl-4 transition-all duration-500 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_24px_60px_-30px_rgba(8,29,73,0.35)] md:p-8 md:pl-5">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue/20 bg-mist text-sm font-extrabold text-blue transition-colors duration-500 group-hover:border-green group-hover:bg-green group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-navy md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-navy/55">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
