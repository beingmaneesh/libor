"use client";

import { ComponentType, ReactNode, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CTA } from "@/components/ui/Button";
import { BRAND } from "@/lib/content";
import {
  CircularScene,
  FutureOfIndiaScene,
  GenerationsScene,
  NatureTechScene,
} from "./HeroScenes";

const EASE = [0.16, 1, 0.3, 1] as const;
const SLIDE_SECONDS = 8;

type Slide = {
  id: string;
  eyebrow: string;
  title: ReactNode[];
  titleClass?: string;
  sub: string;
  cta: { label: string; href: string };
  light?: boolean;
  Scene: ComponentType;
  extra?: ReactNode;
};

const SLIDES: Slide[] = [

  {
    id: "generations",
    eyebrow: "The Promise",
    title: [
      <span key="1">Let&rsquo;s Live for</span>,
      <span key="2" className="serif-accent text-green">
        Generations.
      </span>,
    ],
    sub: "Every electrical decision today creates tomorrow's world.",
   cta: { label: "Explore Our Vision", href: "#manifesto" },
    Scene: GenerationsScene,
  },
  {
    id: "future-of-india",
    eyebrow: "Building Tomorrow",
    title: [
      <span key="1">Powering a</span>,
      <span key="2" className="serif-accent text-green">
        Sustainable Future.
      </span>,
    ],
    sub: BRAND.positioning,
     cta: { label: "Our Story", href: "/about" },
    Scene: FutureOfIndiaScene,
  },
  {
    id: "circular-future",
    eyebrow: "The Circular Ecosystem",
    title: [
      <span key="1">Building a</span>,
      <span key="2" className="serif-accent text-green-deep">
        Circular Future.
      </span>,
    ],
    sub: "Dealers, customers, returns, recycling — one connected loop where nothing is wasted.",
    cta: { label: "See How It Works", href: "#sustainability" },
    light: true,
    Scene: CircularScene,
  },
  {
    id: "nature-technology",
    eyebrow: "Our Purpose",
    title: [
      <span key="1">Where Technology</span>,
      <span key="2">
        Meets <span className="serif-accent text-green">Responsibility.</span>
      </span>,
    ],
    sub: "Every LIBOR product is engineered for performance — and designed for the planet.",
    cta: { label: "Our Purpose", href: "#purpose" },
    Scene: NatureTechScene,
  },
  
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const touch = useRef<number | null>(null);
  const slide = SLIDES[index];

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // fallback autoplay for reduced-motion users is intentionally off
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="LIBOR highlights"
      className="relative min-h-svh overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onPointerDown={(e) => (touch.current = e.clientX)}
      onPointerUp={(e) => {
        if (touch.current === null) return;
        const dx = e.clientX - touch.current;
        touch.current = null;
        if (dx > 70) prev();
        if (dx < -70) next();
      }}
    >
      {/* backgrounds: smooth crossfade + slow drift */}
      <div aria-hidden="true" className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="relative h-full w-full will-change-transform"
              style={
                reduced
                  ? undefined
                  : { animation: `hero-drift ${SLIDE_SECONDS + 4}s ease-out forwards` }
              }
            >
              <slide.Scene />
            </div>
            {/* readability scrim */}
            <div
              className={
                slide.light
                  ? "absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-transparent"
                  : "absolute inset-0 bg-gradient-to-r from-[#1846d6]/90 via-[#1846d6]/70 to-transparent"
              }
            />
            <div
              className={
                slide.light
                  ? "absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/70 to-transparent"
                  : "absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#1846d6]/75 to-transparent"
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* slide content */}
      <div className="container-x relative z-10 flex min-h-svh flex-col justify-center pb-40 pt-36">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
            initial={reduced ? false : "hidden"}
            animate="show"
            exit={reduced ? undefined : "exit"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
              exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: "easeIn" } },
            }}
            className={`max-w-3xl ${slide.light ? "text-ink" : "text-white"}`}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className={`text-eyebrow ${slide.light ? "text-red" : "text-green"}`}
            >
              {slide.eyebrow}
            </motion.p>
            <h1
              className={`text-display mt-6 ${
                slide.titleClass ?? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              }`}
            >
              {slide.title.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: "105%" },
                      show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
                    }}
                    className="block will-change-transform"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className={`mt-7 max-w-xl text-base font-medium leading-relaxed md:text-xl ${
                slide.light ? "text-ink/65" : "text-white/75"
              }`}
            >
              {slide.sub}
            </motion.p>
            {slide.extra && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
                }}
              >
                {slide.extra}
              </motion.div>
            )}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="mt-10"
            >
              <CTA href={slide.cta.href} variant="primary" className="px-9 py-4 text-base">
                {slide.cta.label}
              </CTA>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* status for screen readers */}
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {SLIDES.length}: {slide.eyebrow}
      </p>

      {/* controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 pb-8">
        <div className="container-x flex items-center justify-between gap-6">
          {/* dots with autoplay progress */}
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
            {SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                  onClick={() => goTo(i)}
                  className={`relative h-3 overflow-hidden rounded-full transition-all duration-500 ${
                    active
                      ? `w-16 ${slide.light ? "bg-navy/20" : "bg-white/25"}`
                      : `w-3 ${
                          slide.light
                            ? "bg-navy/25 hover:bg-navy/50"
                            : "bg-white/35 hover:bg-white/70"
                        }`
                  }`}
                >
                  {active && !reduced && (
                    <span
                      key={`${s.id}-progress`}
                      onAnimationEnd={next}
                      className={`absolute inset-0 origin-left rounded-full ${
                        slide.light ? "bg-red" : "bg-white"
                      }`}
                      style={{
                        animation: `hero-progress ${SLIDE_SECONDS}s linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                  {active && reduced && (
                    <span
                      className={`absolute inset-0 rounded-full ${
                        slide.light ? "bg-red" : "bg-white"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* arrows — large targets */}
          <div className="flex items-center gap-3">
            {[
              { label: "Previous slide", onClick: prev, d: "M15 4l-7 8 7 8" },
              { label: "Next slide", onClick: next, d: "M9 4l7 8-7 8" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-label={b.label}
                onClick={b.onClick}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 md:h-14 md:w-14 ${
                  slide.light
                    ? "border-navy/25 text-navy hover:bg-navy hover:text-white"
                    : "border-white/35 text-white hover:bg-white hover:text-navy"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={b.d} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
