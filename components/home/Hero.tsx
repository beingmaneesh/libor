"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { LineReveal } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";

const HeroFanCanvas = dynamic(
  () => import("@/components/three/FanCanvas").then((m) => m.HeroFanCanvas),
  { ssr: false }
);

// deterministic pseudo-random so SSR and client agree
const rand = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
// values rounded so SSR and browser serialize styles identically
const round = (n: number) => Math.round(n * 100) / 100;
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: round(rand(i, 1) * 100),
  top: round(rand(i, 2) * 88),
  size: round(1 + rand(i, 3) * 2.4),
  duration: round(6 + rand(i, 4) * 9),
  delay: round(rand(i, 5) * 6),
  opacity: round(0.25 + rand(i, 6) * 0.5),
}));

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="dark-section grain relative flex min-h-svh flex-col overflow-hidden bg-navy-deep text-white"
      aria-label="LIBOR India — Let's Live for Generations"
    >
      {/* deep space wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#0d2c66_0%,#081d49_45%,#04102e_100%)]"
      />

      {/* curved earth horizon with sunrise */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[38vh] overflow-hidden">
        <div className="absolute left-1/2 top-[26%] aspect-square w-[240vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#0a2a63_0%,#071a41_58%,#04102e_100%)] shadow-[0_-2px_80px_10px_rgba(82,180,75,0.28),0_-1px_0_1.5px_rgba(140,220,140,0.55)] md:w-[170vw]" />
        {/* sunrise bloom */}
        <div className="absolute left-1/2 top-[8%] h-48 w-[70vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(82,180,75,0.32),rgba(18,61,138,0.12),transparent_75%)] blur-2xl" />
      </div>

      {/* floating dust / light particles */}
      <div aria-hidden="true" className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: reduced
                ? undefined
                : `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* soft glow behind the fan */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[46%] h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,160,255,0.28),rgba(82,180,75,0.08),transparent_72%)] blur-xl"
      />

      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pb-28 pt-36 text-center">
        {/* 3D fan centerpiece */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none h-[38vmin] min-h-56 w-full max-w-xl md:h-[44vmin]"
        >
          <HeroFanCanvas />
        </motion.div>

        <div className="mt-2 md:mt-4">
          <LineReveal
            as="h1"
            className="text-display text-[13vw] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            lines={[
              <span key="l1">Let&rsquo;s Live for</span>,
              <span key="g" className="serif-accent text-green">
                Generations.
              </span>,
            ]}
          />
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-xl text-balance text-sm font-medium leading-relaxed text-white/60 md:text-base"
          >
            {BRAND.positioning}
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <CTA href="#manifesto" variant="primary">
              Explore Our Vision
            </CTA>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/70"
            animate={reduced ? undefined : { y: [0, 18, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
