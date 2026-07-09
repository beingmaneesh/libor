import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const BADGES = [
  { src: "/icons/low-noise.svg", alt: "Low noise operation", w: 61, h: 100 },
  { src: "/icons/plastic-body.svg", alt: "High grade plastic body", w: 80, h: 100 },
  { src: "/icons/sweep-150mm.svg", alt: "Sweep 150mm", w: 64, h: 100 },
  { src: "/icons/warranty-3-years.svg", alt: "3 year warranty", w: 64, h: 100 },
  { src: "/icons/made-in-india.svg", alt: "Made in India", w: 103, h: 100 },
];

/** Official product badges on a dark band — the ISI mark leads. */
export function BadgeStrip() {
  return (
    <section
      className="dark-section grain relative overflow-hidden bg-navy py-20 text-white md:py-28"
      aria-label="Certifications and product badges"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(120,160,255,0.22),transparent_70%)] blur-2xl"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1.6fr]">
          {/* ISI certification — featured */}
          <Reveal>
            <div className="flex items-center gap-7 rounded-3xl border border-white/12 bg-white/5 p-7 md:p-9">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/isi-mark.svg"
                alt="ISI mark — IS:302-2-80:2017, CM/L 8100188709"
                width={92}
                height={100}
                loading="lazy"
                className="h-24 w-auto shrink-0 md:h-28"
              />
              <div>
                <p className="text-eyebrow text-green">BIS Certified</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  ISI Marked.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Tested to <strong className="text-white">IS:302-2-80:2017</strong>{" "}
                  and licensed under{" "}
                  <strong className="text-white">CM/L 8100188709</strong> — the
                  Bureau of Indian Standards&rsquo; benchmark for ventilation
                  fan safety.
                </p>
              </div>
            </div>
          </Reveal>

          {/* the rest of the badge family */}
          <Stagger
            className="grid grid-cols-3 gap-4 sm:grid-cols-5"
            stagger={0.08}
          >
            {BADGES.map((b) => (
              <StaggerItem key={b.src} className="h-full">
                <div className="flex h-full items-center justify-center rounded-2xl border border-white/8 bg-white/4 p-4 transition-colors duration-300 hover:bg-white/8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.src}
                    alt={b.alt}
                    width={b.w}
                    height={b.h}
                    loading="lazy"
                    className="h-20 w-auto md:h-24"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
