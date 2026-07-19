import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";

const STEPS = [
  ["01", "Return", "Hand in any old fan at a LIBOR partner store."],
  ["02", "Earn", "Get ₹20 instantly — a thank-you for closing the loop."],
  ["03", "Reborn", "Materials are recovered and re-enter production."],
];

/** Return & Earn ₹20 — the circular initiative, on every product page. */
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
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-eyebrow text-green">Sustainability Initiative</p>
            <h2 className="text-display mt-6 text-3xl sm:text-4xl md:text-5xl">
              Return &amp; Earn{" "}
              <span className="serif-accent text-green">₹20.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              When your fan — any brand, any age — reaches the end of its life,
              bring it to a LIBOR partner. You earn ₹20. The fan enters our
              recycling loop and becomes raw material for future products.
              Nothing goes to landfill.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <CTA href="/contact" variant="green">
                Find a Return Point
              </CTA>
            </div>
          </Reveal>
        </div>
        <Stagger className="grid gap-4" stagger={0.12}>
          {STEPS.map(([n, t, b]) => (
            <StaggerItem key={n}>
              <div className="flex items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="text-sm font-extrabold tracking-widest text-green">
                  {n}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {b}
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
