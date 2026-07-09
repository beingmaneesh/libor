import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { DEALER_POINTS } from "@/lib/content";

/** Partnership invitation for dealers and distributors. */
export function Dealers() {
  return (
    <section className="bg-mist py-28 md:py-40" aria-label="For dealers">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="text-eyebrow text-blue">For Dealers &amp; Partners</p>
              <h2 className="text-display mt-8 text-3xl text-navy sm:text-4xl md:text-5xl">
                Grow with a brand built to{" "}
                <span className="serif-accent text-blue">give back.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-navy/60">
                We&rsquo;re not signing stockists. We&rsquo;re building
                long-term partners for India&rsquo;s first
                sustainability-driven electrical ecosystem.
              </p>
              <div className="mt-10">
                <CTA href="/contact#dealer" variant="primary">
                  Become a Dealer
                </CTA>
              </div>
            </Reveal>
          </div>

          <Stagger className="space-y-4" stagger={0.1}>
            {DEALER_POINTS.map((d, i) => (
              <StaggerItem key={d.title}>
                <div className="group flex items-start gap-6 rounded-3xl border border-navy/8 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(8,29,73,0.3)]">
                  <span className="mt-0.5 text-sm font-extrabold tracking-widest text-red/60 transition-colors group-hover:text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-navy">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/55">
                      {d.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
