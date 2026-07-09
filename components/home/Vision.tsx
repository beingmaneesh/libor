import { LineReveal, Reveal } from "@/components/motion/Reveal";

/** Full-screen vision statement, revealed line by line. */
export function Vision() {
  return (
    <section
      id="vision"
      className="relative flex min-h-svh items-center overflow-hidden bg-white py-32"
      aria-label="Our vision"
    >
      {/* orbiting ring motif */}
      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-[-30%] h-[80vmin] w-[80vmin] rounded-full border border-blue/10"
      >
        <div className="absolute inset-14 rounded-full border border-blue/5" />
      </div>

      <div className="container-x relative">
        <Reveal>
          <p className="text-eyebrow text-blue">Vision</p>
        </Reveal>
        <div className="mt-10 max-w-6xl">
          <LineReveal
            as="h2"
            stagger={0.16}
            className="text-display text-3xl text-navy sm:text-5xl md:text-6xl lg:text-[4.4rem]"
            lines={[
              <span key="1">To build India&rsquo;s most trusted</span>,
              <span key="2">
                <span className="text-blue">sustainability-driven</span> electrical
                brand,
              </span>,
              <span key="3">creating better products,</span>,
              <span key="4">stronger partnerships</span>,
              <span key="5">and a circular future&hellip;</span>,
            ]}
          />
          <Reveal delay={0.8} className="mt-12">
            <p className="serif-accent text-3xl text-green sm:text-4xl md:text-5xl">
              &hellip;for generations to come.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
