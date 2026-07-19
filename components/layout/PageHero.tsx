import Image from "next/image";
import { ReactNode } from "react";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import banner from "@/public/images/hero/kitchen-freshness.jpg";

/**
 * Shared banner for the interior pages (About, Products, Contact).
 * The photograph runs full-bleed behind a left-weighted royal scrim so the
 * page headline stays legible over it.
 */
export function PageHero({
  eyebrow,
  lines,
  sub,
  children,
  headingClass = "text-display text-4xl sm:text-5xl md:text-6xl",
}: {
  eyebrow: string;
  lines: ReactNode[];
  sub?: string;
  children?: ReactNode;
  headingClass?: string;
}) {
  return (
    <section className="dark-section relative flex min-h-[62svh] items-end overflow-hidden bg-navy-deep pb-16 pt-40 text-white md:min-h-[68svh] md:pb-20">
      <Image
        src={banner}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />.


 

      {/* readability scrim — dense at the left where the headline sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r  from-[#1846d6]/92 via-[#1846d6]/30 to-[#1846d6]/00"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1846d6]/80 to-transparent"
      />

      <div className="container-x relative">
        <Reveal>
          <p className="text-eyebrow text-green">{eyebrow}</p>
        </Reveal>
        <div className="mt-6 max-w-4xl">
          <LineReveal as="h1" className={headingClass} lines={lines} />
        </div>
        {sub && (
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70">
              {sub}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
