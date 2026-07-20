import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";

/** Emotional close — the brand line, huge. */
export function Closing() {
  return (
    <section
      className="dark-section relative flex min-h-[90svh] items-center overflow-hidden bg-navy text-white"
      aria-label="Let's live for generations"
    >
      {/* rising sun over the horizon */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[30vh] bg-[radial-gradient(60%_100%_at_50%_100%,rgba(82,180,75,0.18),transparent_70%)]"
      />
      <div className="container-x relative py-32 text-center">
        <LineReveal
          as="h2"
          stagger={0.18}
          className="text-display text-[15vw] leading-[0.95] sm:text-8xl md:text-9xl"
          lines={[
            <span key="l1">Let&rsquo;s Live</span>,
            <span key="for" className="serif-accent text-white/60">
              for
            </span>,
            <span key="gen" className="text-green">
              Generations.
            </span>,
          ]}
        />
        <Reveal delay={0.7}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <CTA href="/products" variant="light">
              See Products
            </CTA>
            <CTA href="/contact" variant="outline">
              Join the Journey
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
