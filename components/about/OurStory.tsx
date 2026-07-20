import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const GROWTH = ["One dealer became ten.", "Ten became one hundred.", "One hundred became thousands."];

const LEARNINGS = [
  "what customers truly expect.",
  "what retailers need to grow.",
  "how electricians make decisions.",
  "where the industry could do better.",
];

const LESSONS = ["Every conversation.", "Every service call.", "Every customer visit.", "Every challenge."];

/**
 * Our Story — the brand's origin, told as a blue-field narrative that flows
 * down from the About banner before the page hands off to the white sections.
 */
export function OurStory() {
  return (
    <section
      className="dark-section grain relative overflow-hidden bg-[linear-gradient(180deg,#071f63_0%,#0b2c8f_45%,#1846d6_100%)] py-24 text-white md:py-32"
      aria-label="Our story"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.14),transparent_70%)] blur-2xl"
      />

      <div className="container-x relative">
        <Reveal>
          <p className="text-eyebrow text-green">Our Story</p>
          <h2 className="text-display mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Every company has a beginning. Ours didn&rsquo;t start in a{" "}
            <span className="serif-accent text-green">factory.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {/* left column — the beginning */}
          <div className="space-y-6 text-lg leading-relaxed text-white/75">
            <Reveal>
              <p>
                It started in a small office in Kerala in{" "}
                <strong className="font-bold text-white">2014</strong>, with a
                simple belief: if we serve customers with honesty, expertise, and
                consistency, opportunities will follow.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We began as an electrical products distributor. There were no
                grand buildings. No manufacturing plants. No big promises — just
                a passionate team, a commitment to our channel partners, and an
                obsession with serving the electrical industry better every
                single day.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-semibold text-white">
                Over time, that commitment earned trust.
              </p>
            </Reveal>

            <Stagger className="space-y-1 pt-2" stagger={0.12}>
              {GROWTH.map((g) => (
                <StaggerItem key={g}>
                  <p className="text-display text-2xl text-white sm:text-3xl">{g}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* right column — where we are, and what it taught us */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-3xl border border-white/12 bg-white/5 p-8 backdrop-blur">
                <p className="text-display text-5xl text-green md:text-6xl">2,000+</p>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  dealers served across Kerala today — partnering with some of
                  India&rsquo;s leading electrical and paint brands, while
                  supporting thousands of electricians, contractors, builders,
                  architects and homeowners.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-base leading-relaxed text-white/75">
                  Our journey taught us something important. We weren&rsquo;t
                  simply distributing products —{" "}
                  <strong className="font-bold text-white">we were learning.</strong>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {LEARNINGS.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-white/70">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                      />
                      <span className="text-base">
                        <span className="font-semibold text-white">Learning</span> {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* closing rhythm */}
        <div className="mt-16 border-t border-white/12 pt-12">
          <Stagger className="flex flex-wrap gap-x-8 gap-y-2" stagger={0.1}>
            {LESSONS.map((l) => (
              <StaggerItem key={l}>
                <span className="text-xl font-semibold text-white/55 sm:text-2xl">
                  {l}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.3}>
            <p className="text-display mt-8 max-w-3xl text-2xl sm:text-3xl md:text-4xl">
              Became a lesson. And those lessons shaped our{" "}
              <span className="serif-accent text-green">next chapter.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
