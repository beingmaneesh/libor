"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import futureOfIndia from "@/public/images/hero/wfuture-of-india.jpg";
import circularEcosystem from "@/public/images/hero/circular-ecosystem.jpg";
import circularElements from "@/public/images/hero/circular-elements.png";
import responsibilityScene from "@/public/images/hero/banner1.jpg";
import genarationScene from "@/public/images/hero/genarations.jpg";
 



/**
 * Full-bleed backdrops for the hero slides — a photographic scene for
 * slide one, illustrated SVG (drawn at 1440x810, cropped with `slice`)
 * for the rest. All are decorative; the slider marks them aria-hidden.
 */

const SCENE = "h-full w-full";
const FONT = "var(--font-manrope), sans-serif";

/* 1 - Future of India: sustainable-energy globe photograph */
export function FutureOfIndiaScene() {
  return (
    <Image
      src={futureOfIndia}
      alt=""
      fill
      priority
      placeholder="blur"
      sizes="100vw"
      className="object-cover object-[70%_center]"
    />


    
  );
}

/* 2 — Circular Ecosystem: the LIBOR loop diagram, brought to life */
export function CircularScene() {
  const reduced = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 14 });
  const sy = useSpring(py, { stiffness: 40, damping: 14 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * -22);
      py.set((e.clientY / window.innerHeight - 0.5) * -14);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py, reduced]);

  return (



    
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#edf3fb_48%,#e2f2e6_100%)]">


        <Image
      src={circularEcosystem}
      alt=""
      fill
      priority
      placeholder="blur"
      sizes="100vw"
      className="object-cover object-[70%_center]"
    />
      {/* ambient colour washes */}
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(33,81,224,0.14),transparent_70%)]" />
      <div className="absolute -bottom-52 right-[30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.16),transparent_70%)]" />

      {/* the living diagram — parallax follows the pointer */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute right-[-8%] top-1/2 w-[620px] max-w-[100vw] -translate-y-1/2 sm:right-[2%] lg:right-[4%] lg:w-[46vw] lg:max-w-[760px]"
      >
        <div className="animate-float" style={{ animationDuration: "9s" }}>
          <div className="relative aspect-[1164/882]">
            {/* breathing heart glow behind the LIBOR centre */}
            <div className="absolute left-[54%] top-[52.5%] h-[46%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.35),transparent_70%)] blur-xl animate-pulse-soft" />

            {/* rotating dashed aura */}
            <div className="absolute left-[54%] top-[52.5%] aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="49" fill="none" stroke="#52b44b" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="1.5 4" strokeLinecap="round" />
              </svg>
            </div>
            {/* counter-rotating fine blue ring */}
            <div
              className="absolute left-[54%] top-[52.5%] aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
              style={{ animationDuration: "38s", animationDirection: "reverse" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="49.4" fill="none" stroke="#2151e0" strokeOpacity="0.25" strokeWidth="0.35" strokeDasharray="0.4 6" strokeLinecap="round" />
              </svg>
            </div>

            {/* energy pulses travelling the loop (sized to the diagram ring) */}
            <div
              className="absolute left-[54%] top-[52.5%] aspect-square w-[57%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
              style={{ animationDuration: "12s" }}
            >
              <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green shadow-[0_0_16px_5px_rgba(82,180,75,0.65)]" />
            </div>
            <div
              className="absolute left-[54%] top-[52.5%] aspect-square w-[57%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
              style={{ animationDuration: "18s", animationDirection: "reverse" }}
            >
              <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue shadow-[0_0_14px_4px_rgba(33,81,224,0.55)]" />
            </div>

            <Image
              src={circularElements}
              alt=""
              fill
              loading="eager"
              placeholder="blur"
              sizes="(min-width: 1200px) 60vw, 720px"
              className="object-contain"
            />

             
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* 3 — Nature + Infrastructure: technology on the left, forest on the right */
export function NatureTechScene() {
  return (
    <Image
      src={responsibilityScene}
      alt=""
      fill
      priority
      placeholder="blur"
      sizes="100vw"
      className="object-cover object-[70%_center]"
    />
  );
}

/* 4 — Generations: grandfather, father and child walking toward the light */
export function GenerationsScene() {
  return (
    
    //  <Image
    //   src={genarationScene}
    //   alt=""
    //   fill
    //   priority
    //   placeholder="blur"
    //   sizes="100vw"
    //   className="object-cover object-[70%_center]"
    // />


    <video
 autoPlay
  muted
  loop
  playsInline
  preload="metadata" 
  poster={genarationScene.src}
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/whero.mp4"  type="video/mp4" />
</video>


  );
}
