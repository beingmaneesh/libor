import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import ecosystem from "@/public/images/hero/future-of-india.png";

const STEPS = [
  {
    n: "01",
    t: "Return",
    b: "Bring the packaging of any LIBOR product to an authorized LIBOR dealer.",
  },
  {
    n: "02",
    t: "Reward",
    b: "Get ₹20 back, instantly — a thank-you for closing the loop.",
  },
  {
    n: "03",
    t: "Recycle",
    b: "Your packaging re-enters the loop as raw material. Nothing reaches a landfill.",
  },
];

/**
 * Return & Earn ₹20 — the circular-economy initiative. The reward criteria
 * (return LIBOR packaging to an authorized dealer) is spelled out, alongside
 * the ecosystem diagram that shows where a returned pack goes.
 */
export function ReturnEarn() {
  return (
    <section
      id="return-earn"
      className="dark-section grain relative scroll-mt-24 overflow-hidden bg-[linear-gradient(160deg,#12341a_0%,#0d2413_60%,#071f63_140%)] py-24 text-white md:py-32"
      aria-label="Return and Earn initiative"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/2 h-[60vmin] w-[60vmin] -translate-y-1/2 rounded-full border border-green/15 animate-spin-slow"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green shadow-[0_0_20px_5px_rgba(82,180,75,0.5)]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* the offer + criteria */}
          <div>
            <Reveal>
              <p className="text-eyebrow text-green">Sustainability Initiative</p>
              <h2 className="text-display mt-6 text-3xl sm:text-4xl md:text-5xl">
                Return &amp; Earn{" "}
                <span className="serif-accent text-green">₹20.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Every LIBOR product is designed to come full circle.{" "}
                <strong className="font-semibold text-white">
                  Return the packaging of any LIBOR product to an authorized
                  LIBOR dealer and get ₹20 back
                </strong>{" "}
                — packaging that would have been waste becomes raw material for
                tomorrow&rsquo;s products. That&rsquo;s how, one pack at a time,
                we&rsquo;re{" "}
                <strong className="font-semibold text-green">
                  building a circular economy.
                </strong>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green/30 bg-green/10 px-5 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide text-green">
                  Reward eligible on LIBOR product packaging only
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <CTA href="/contact" variant="green">
                  Find a Return Point
                </CTA>
              </div>
            </Reveal>
          </div>

          {/* the ecosystem — where a returned pack goes */}
          <Reveal delay={0.15}>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.28),transparent_70%)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem]   ">
                <Image
                  src={ecosystem}
                  alt="The LIBOR circular ecosystem — manufacturing, dealers, customers, returns, recycling and products connected in one loop"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 46vw, 90vw"
                />
              </div>
              <figcaption className="mt-4 text-center text-xs font-semibold tracking-wide text-white/45">
                Returned packaging re-enters the loop — recycled into future
                products.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* the three moves: return · reward · recycle */}
        <Stagger className="mt-16 grid gap-4 md:grid-cols-3" stagger={0.12}>
          {STEPS.map((s) => (
            <StaggerItem key={s.n} className="h-full">
              <div className="flex h-full items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="text-sm font-extrabold tracking-widest text-green">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {s.b}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
