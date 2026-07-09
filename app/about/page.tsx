import type { Metadata } from "next";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { BRAND, MISSION_PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — A Brand Built for Generations",
  description:
    "LIBOR India is not an exhaust fan company. It's a sustainability-driven electrical brand that started with an exhaust fan — built on trust, responsibility and a circular future.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Trust before transactions",
    body: "Every warranty honoured, every claim verifiable. We'd rather grow slowly than grow carelessly.",
  },
  {
    title: "Design with intent",
    body: "Nothing decorative, nothing wasteful. If a detail doesn't serve the person using it, it doesn't ship.",
  },
  {
    title: "The loop over the line",
    body: "Linear business takes, makes and discards. We design for return, recovery and rebirth.",
  },
  {
    title: "India first, generations always",
    body: "Made in India, for Indian homes — with decisions weighed against the next fifty years, not the next quarter.",
  },
];

const TIMELINE = [
  {
    phase: "Chapter One",
    title: "The Kamet 150mm",
    body: "One product, made exceptionally well. A ventilation fan that carries every value we stand for.",
    active: true,
  },
  {
    phase: "Next",
    title: "The fan family grows",
    body: "More sizes, more formats — the same quiet reliability and circular design.",
  },
  {
    phase: "Then",
    title: "Lighting, switches & accessories",
    body: "The everyday electrical essentials, rebuilt around responsibility.",
  },
  {
    phase: "Beyond",
    title: "A smart, circular ecosystem",
    body: "Connected electricals and a nationwide return network where nothing is wasted.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="dark-section grain relative flex min-h-[92svh] items-end overflow-hidden bg-navy-deep pb-24 pt-40 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_80%_at_80%_0%,#0d2c66_0%,#081d49_50%,#04102e_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-24 h-[55vmin] w-[55vmin] rounded-full border border-white/8 animate-spin-slow"
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green shadow-[0_0_18px_4px_rgba(82,180,75,0.5)]" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="text-eyebrow text-green">About LIBOR</p>
          </Reveal>
          <div className="mt-8 max-w-5xl">
            <LineReveal
              as="h1"
              className="text-display text-4xl sm:text-6xl md:text-7xl"
              lines={[
                <span key="1">We are not an</span>,
                <span key="2">exhaust fan company.</span>,
                <span key="l" className="serif-accent text-green">
                  We just started with one.
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.5}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60">
              LIBOR is a sustainability-driven electrical brand — an ecosystem
              designed so that every product we make, sell and take back leaves
              India a little better than we found it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the question we started with */}
      <section className="bg-white py-28 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-eyebrow text-blue">The Question</p>
            <h2 className="text-display mt-8 text-3xl text-navy sm:text-4xl md:text-5xl">
              What if an electrical brand{" "}
              <span className="serif-accent text-blue">gave back</span> more
              than it took?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-6 text-base leading-relaxed text-navy/60 lg:pt-24">
              <p>
                India buys millions of electrical products every year. Most are
                built to a price, sold without accountability, and discarded
                without a second thought. The industry calls that normal.
              </p>
              <p>
                We call it a design flaw. LIBOR exists to prove that an
                electrical brand can be premium in quality, honest in trade and
                circular by design — and that customers, dealers and the planet
                can all be on the same side of the transaction.
              </p>
              <p className="font-semibold text-navy">
                That belief has a name: {BRAND.line}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* vision + mission statements */}
      <section className="bg-mist py-28 md:py-36">
        <div className="container-x space-y-6">
          <Reveal>
            <article className="grain relative overflow-hidden rounded-[2rem] bg-navy p-10 text-white md:p-16">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(82,180,75,0.25),transparent_70%)] blur-xl"
              />
              <p className="text-eyebrow text-green">Vision</p>
              <p className="text-display relative mt-6 max-w-4xl text-2xl sm:text-3xl md:text-[2.6rem] md:leading-[1.1]">
                {BRAND.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="relative overflow-hidden rounded-[2rem] border border-navy/8 bg-white p-10 md:p-16">
              <p className="text-eyebrow text-blue">Mission</p>
              <p className="text-display mt-6 max-w-4xl text-2xl text-navy sm:text-3xl md:text-[2.6rem] md:leading-[1.1]">
                {BRAND.mission}
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {MISSION_PILLARS.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-2xl bg-mist px-5 py-4 text-sm font-bold text-navy"
                  >
                    {p.title}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.1}>
              <article className="h-full rounded-[2rem] bg-blue p-10 text-white md:p-12">
                <p className="text-eyebrow text-white/50">Brand Purpose</p>
                <p className="mt-6 text-xl font-bold leading-snug md:text-2xl">
                  {BRAND.purpose}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.2}>
              <article className="h-full rounded-[2rem] bg-green-deep p-10 text-white md:p-12">
                <p className="text-eyebrow text-white/50">Brand Promise</p>
                <p className="mt-6 text-xl font-bold leading-snug md:text-2xl">
                  {BRAND.promise}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-white py-28 md:py-40">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">How we work</p>
            <h2 className="text-display mt-8 max-w-2xl text-3xl text-navy sm:text-4xl md:text-5xl">
              Four values behind every decision.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-5 md:grid-cols-2" stagger={0.1}>
            {VALUES.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group h-full rounded-3xl border border-navy/8 bg-mist/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_60px_-32px_rgba(8,29,73,0.35)] md:p-10">
                  <span className="text-sm font-extrabold tracking-widest text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-navy md:text-2xl">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/55">
                    {v.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* roadmap timeline */}
      <section className="dark-section grain relative overflow-hidden bg-navy-deep py-28 text-white md:py-40">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-white/40">The Journey</p>
            <h2 className="text-display mt-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
              A fifty-year brand,{" "}
              <span className="serif-accent text-green">
                one chapter at a time.
              </span>
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {TIMELINE.map((t) => (
              <StaggerItem key={t.title} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-3xl border p-7 ${
                    t.active
                      ? "border-green/40 bg-green/10"
                      : "border-white/10 bg-white/4"
                  }`}
                >
                  <span
                    className={`text-xs font-extrabold tracking-[0.25em] uppercase ${
                      t.active ? "text-green" : "text-white/35"
                    }`}
                  >
                    {t.phase}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {t.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-wrap gap-4">
              <CTA href="/products" variant="light">
                See Chapter One
              </CTA>
              <CTA href="/contact#dealer" variant="outline">
                Partner With Us
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* company details */}
      <section className="bg-mist py-20 md:py-24" aria-label="Company details">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">The Company</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-navy/8 bg-white p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                  Marketed by
                </h2>
                <p className="mt-3 font-bold text-navy">{BRAND.marketedBy.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {BRAND.marketedBy.address}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl border border-navy/8 bg-white p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                  Manufactured at
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {BRAND.manufacturedAt}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.19}>
              <div className="h-full rounded-3xl border border-navy/8 bg-white p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                  Customer Care
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm font-semibold text-navy">
                  <li>
                    <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-blue">
                      {BRAND.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BRAND.email}`} className="hover:text-blue">
                      {BRAND.email}
                    </a>
                  </li>
                  <li>
                    <a href={`https://${BRAND.website}`} className="hover:text-blue">
                      {BRAND.website}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
