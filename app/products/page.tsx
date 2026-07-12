import type { Metadata } from "next";
import { ProductHero } from "@/components/product/ProductHero";
import { FeatureExplorer } from "@/components/product/FeatureExplorer";
import { BadgeStrip } from "@/components/product/BadgeStrip";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { FanIllustration } from "@/components/ui/FanIllustration";
import { Logo } from "@/components/ui/Logo";
import { PRODUCT, FUTURE_CATEGORIES } from "@/lib/content";
import fanPhoto from "@/public/images/kamet-fan.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kamet 150mm Exhaust Fan — Where Our Journey Begins",
  description:
    "The Kamet 150mm exhaust fan: smooth, low-noise, rust & shock proof, Made in India, 3-year warranty — and part of LIBOR's Return & Earn ₹20 circular initiative.",
  alternates: { canonical: "/products" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kamet 150mm Exhaust Fan",
  brand: { "@type": "Brand", name: "LIBOR" },
  description:
    "Smooth, low-noise 150mm ventilation fan with high-grade rust & shock proof body. Made in India. 3-year warranty.",
  countryOfOrigin: "IN",
  category: "Ventilation Fan",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Voltage", value: "220–240V" },
    { "@type": "PropertyValue", name: "Frequency", value: "50Hz" },
    { "@type": "PropertyValue", name: "Sweep", value: "150mm" },
    { "@type": "PropertyValue", name: "Blades", value: "7" },
    {
      "@type": "PropertyValue",
      name: "Certification",
      value: "ISI Marked · IS:302-2-80:2017 · CM/L 8100188709",
    },
  ],
};

const GALLERY = [
  {
    title: "The blade profile",
    caption: "Seven balanced blades tuned for airflow over noise.",
    surface: "bg-[linear-gradient(150deg,#eef3f9_0%,#c9d6e6_100%)]",
    dark: false,
  },
  {
    title: "The polymer shell",
    caption: "High-grade plastic. Rust-proof, shock-proof, recyclable.",
    surface: "bg-[linear-gradient(150deg,#2151e0_0%,#0b2c8f_100%)]",
    dark: true,
  },
  {
    title: "The red mark",
    caption: "One small badge, one large promise of accountability.",
    surface: "bg-[linear-gradient(150deg,#f1272a_0%,#7c0f14_100%)]",
    dark: true,
  },
  {
    title: "The mounting frame",
    caption: "Four studs, minutes to install, decades on the wall.",
    surface: "bg-[linear-gradient(150deg,#dfe8f2_0%,#aebfd4_100%)]",
    dark: false,
  },
];

const INSTALL_STEPS = [
  {
    title: "Switch off the mains",
    body: "Safety first — isolate the circuit before you begin.",
  },
  {
    title: "Position the frame",
    body: "Place the Kamet into a standard 150mm wall or window cut-out.",
  },
  {
    title: "Fix the four studs",
    body: "Secure the mounting studs — the compact frame self-aligns.",
  },
  {
    title: "Connect & test",
    body: "Wire to 220–240V / 50Hz supply, restore power, feel the air move.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <ProductHero />

      {/* positioning strip */}
      <section className="border-b border-navy/8 bg-white py-16">
        <div className="container-x">
          <Reveal>
            <p className="text-display max-w-4xl text-2xl text-navy sm:text-3xl md:text-4xl">
              {PRODUCT.tagline}{" "}
              <span className="text-navy/40">{PRODUCT.subline}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <BadgeStrip />

      <FeatureExplorer />

      {/* specifications + warranty */}
      <section id="specs" className="bg-mist py-28 md:py-40" aria-label="Technical specifications">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-eyebrow text-blue">Technical Specifications</p>
              <h2 className="text-display mt-8 text-3xl text-navy sm:text-4xl md:text-5xl">
                The numbers behind the quiet.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-12 overflow-hidden rounded-3xl border border-navy/8 bg-white">
                {PRODUCT.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`grid grid-cols-[1fr_1.4fr] gap-6 px-7 py-5 transition-colors hover:bg-mist/70 md:px-9 ${
                      i > 0 ? "border-t border-navy/6" : ""
                    }`}
                  >
                    <dt className="text-sm font-bold uppercase tracking-[0.15em] text-navy/40">
                      {s.label}
                    </dt>
                    <dd className="text-base font-extrabold tracking-tight text-navy md:text-lg">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href="/downloads/kamet-150mm-spec-sheet.txt"
                download
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-navy/40"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 1v9M4.5 6.5L8 10l3.5-3.5M2 13h12" />
                </svg>
                Download Spec Sheet
              </a>
            </Reveal>
          </div>

          {/* warranty card */}
          <Reveal delay={0.2}>
            <aside className="grain relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy p-9 text-white md:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(120,160,255,0.3),transparent_70%)] blur-xl"
              />
              <div className="relative mb-5">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-eyebrow text-white/40">Warranty</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/warranty-3-years.svg"
                    alt="3 year warranty badge"
                    width={58}
                    height={90}
                    loading="lazy"
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-display mt-2 text-7xl md:text-8xl">
                  3<span className="serif-accent text-4xl text-green md:text-5xl"> years</span>
                </p>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
                  Every Kamet is covered for three full years against
                  manufacturing defects — honoured through any LIBOR partner,
                  no fine print gymnastics.
                </p>
              </div>

              <Image
              src={fanPhoto}
              alt="Kamet 150mm exhaust fan — square white body with louvered grille and seven blades"
              placeholder="blur"
              sizes="(min-width: 300px) 8rem, 20vw"
              className="relative border border-navy/8 shadow-[0_30px_70px_-35px_rgba(8,29,73,0.4)]"
            />
              <ul className="relative mt-10 space-y-3 text-sm font-semibold text-white/75">
                {[
                  "Doorstep replacement via dealer network",
                  "No-questions coverage on motor & body",
                  "Warranty card inside every pack",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Return & Earn */}
      <section
        id="return-earn"
        className="dark-section grain relative overflow-hidden bg-[linear-gradient(160deg,#12341a_0%,#0d2413_60%,#071f63_140%)] py-28 text-white md:py-40"
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
              <h2 className="text-display mt-8 text-4xl sm:text-5xl md:text-6xl">
                Return &amp; Earn{" "}
                <span className="serif-accent text-green">₹20.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/65">
                When your fan — any brand, any age — reaches the end of its
                life, bring it to a LIBOR partner. You earn ₹20. The fan enters
                our recycling loop and becomes raw material for future
                products. Nothing goes to landfill.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <CTA href="/contact" variant="green">
                  Find a Return Point
                </CTA>
              </div>
            </Reveal>
          </div>
          <Stagger className="grid gap-4" stagger={0.12}>
            {[
              ["01", "Return", "Hand in any old fan at a LIBOR partner store."],
              ["02", "Earn", "Get ₹20 instantly — a thank-you for closing the loop."],
              ["03", "Reborn", "Materials are recovered and re-enter production."],
            ].map(([n, t, b]) => (
              <StaggerItem key={n}>
                <div className="flex items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <span className="text-sm font-extrabold tracking-widest text-green">
                    {n}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{b}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* packaging showcase */}
      <section className="bg-white py-28 md:py-40" aria-label="Packaging">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            {/* stylised packaging box */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-0 h-8 rounded-[100%] bg-navy/15 blur-xl"
              />
              <div className="grain relative flex h-full flex-col overflow-hidden rounded-2xl bg-[linear-gradient(155deg,#2151e0_0%,#0b2c8f_75%)] p-8 shadow-[0_40px_80px_-30px_rgba(8,29,73,0.5)]">
                <div className="flex items-center justify-between">
                  <Logo light className="h-6 w-auto" />
                  <span className="rounded-full border border-green/50 px-3 py-1 text-[0.6rem] font-bold tracking-widest text-green">
                    RECYCLABLE
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center py-6">
                  <FanIllustration className="w-3/4" spinning={false} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-white">
                    Kamet <span className="text-white/50">150mm</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
                    Ventilation Fan · Made in India
                  </p>
                  <p className="serif-accent mt-4 text-sm text-green">
                    Let&rsquo;s Live for Generations.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-eyebrow text-blue">The Packaging</p>
              <h2 className="text-display mt-8 text-3xl text-navy sm:text-4xl md:text-5xl">
                The box tells the truth{" "}
                <span className="serif-accent text-blue">before the fan does.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-navy/60">
                Deep royal blue, honest typography, and a recyclable shell.
                Every Kamet arrives in packaging designed to be admired first —
                and returned to the loop after.
              </p>
              <ul className="mt-8 space-y-3 text-sm font-semibold text-navy/70">
                {[
                  "100% recyclable board and inks",
                  "Warranty card and installation guide inside",
                  "QR link to the Return & Earn programme",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* detail gallery */}
      <section className="bg-mist py-28 md:py-36" aria-label="Detail gallery">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">Up Close</p>
            <h2 className="text-display mt-8 max-w-2xl text-3xl text-navy sm:text-4xl md:text-5xl">
              Details worth leaning into.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {GALLERY.map((g) => (
              <StaggerItem key={g.title} className="h-full">
                <figure
                  className={`grain group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl p-7 ${g.surface}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  />
                  <figcaption
                    className={`relative transition-transform duration-500 group-hover:-translate-y-1 ${
                      g.dark ? "text-white" : "text-navy"
                    }`}
                  >
                    <p className="text-lg font-extrabold tracking-tight">{g.title}</p>
                    <p className={`mt-1.5 text-xs leading-relaxed ${g.dark ? "text-white/60" : "text-navy/55"}`}>
                      {g.caption}
                    </p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* installation */}
      <section className="bg-white py-28 md:py-40" aria-label="Installation guide">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">Installation</p>
            <h2 className="text-display mt-8 max-w-2xl text-3xl text-navy sm:text-4xl md:text-5xl">
              On the wall in four steps.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {INSTALL_STEPS.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="relative h-full rounded-3xl border border-navy/8 bg-mist/60 p-7 pt-9">
                  <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-navy">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy/55">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm text-navy/45">
              Always use a licensed electrician for mains connections. Full
              guide included in every box.
            </p>
          </Reveal>
        </div>
      </section>

      {/* what's next teaser */}
      <section className="dark-section grain relative overflow-hidden bg-navy-deep py-28 text-white md:py-36">
        <div className="container-x text-center">
          <Reveal>
            <p className="text-eyebrow text-white/40">And this is just chapter one</p>
            <h2 className="text-display mx-auto mt-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
              The ecosystem the Kamet{" "}
              <span className="serif-accent text-green">begins.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-3" aria-label="Future categories">
              {FUTURE_CATEGORIES.map((c, i) => (
                <li
                  key={c}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold ${
                    i === 0
                      ? "border-green/50 bg-green/10 text-green"
                      : "border-white/15 text-white/45"
                  }`}
                >
                  {c}
                  {i === 0 && <span className="ml-2 text-[0.6rem] tracking-widest">NOW</span>}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <CTA href="/contact#dealer" variant="primary">
                Partner for What&rsquo;s Next
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
