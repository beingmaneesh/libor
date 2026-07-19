import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LineReveal, Reveal } from "@/components/motion/Reveal";
import { Installation } from "@/components/product/Installation";
import { ReturnEarn } from "@/components/product/ReturnEarn";
import {
  DimensionTable,
  FeatureList,
  SizeTable,
  SpecTable,
} from "@/components/product/ProductTables";
import { VariantSwitcher } from "@/components/product/VariantSwitcher";
import { PRODUCTS, getProduct } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.category}`,
    description: p.description,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

/** Headline stats pulled from whichever spec shape the product uses. */
function heroStats(p: NonNullable<ReturnType<typeof getProduct>>) {
  if (p.sizes) {
    const powers = p.sizes.map((s) => Number(s.power));
    return [
      { value: p.sizes.map((s) => s.fanSize.replace(" INCH", '"')).join(" · "), label: "Sizes" },
      { value: `${Math.min(...powers)}–${Math.max(...powers)}W`, label: "Power" },
      { value: p.sizes[0].voltage + "V", label: "Voltage" },
    ];
  }
  const get = (label: string) =>
    p.specs?.find((s) => s.label.toLowerCase().startsWith(label))?.value ?? "—";
  return [
    { value: get("power") + "W", label: "Power" },
    { value: get("speed"), label: "Speed" },
    { value: get("fan size"), label: "Fan Size" },
  ];
}

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const stats = heroStats(p);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${p.name} — ${p.category}`,
    brand: { "@type": "Brand", name: "LIBOR" },
    description: p.description,
    countryOfOrigin: "IN",
    category: p.category,
    additionalProperty: (p.specs ?? []).map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* hero */}
      <section className="dark-section grain relative overflow-hidden bg-navy-deep pb-20 pt-36 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_90%_at_20%_0%,#1946c8_0%,#0b2c8f_50%,#071f63_100%)]"
        />
        <div className="container-x relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs font-bold tracking-wide">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 3L5 8l5 5" />
                </svg>
                ALL PRODUCTS
              </Link>
            </nav>
          </Reveal>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Reveal>
                <p className="text-eyebrow text-green">
                  {p.category}
                  {p.qualifier ? ` · ${p.qualifier}` : ""}
                </p>
              </Reveal>
              <div className="mt-5">
                <LineReveal
                  as="h1"
                  className="text-display text-5xl sm:text-6xl"
                  lines={[<span key="n">{p.name}</span>]}
                />
              </div>
              <Reveal delay={0.25}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
                  {p.description}
                </p>
              </Reveal>

              {p.isi && (
                <Reveal delay={0.35}>
                  <div className="mt-8 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/isi-mark.svg"
                      alt="ISI mark"
                      width={40}
                      height={44}
                      className="h-11 w-auto"
                    />
                    <p className="text-xs font-bold leading-relaxed tracking-wide text-white/60">
                      BIS Certified · ISI Marked
                      <span className="block text-white/40">
                        IS:302-2-80:2017 · CM/L 8100188709
                      </span>
                    </p>
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.45}>
                <dl className="mt-8 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-navy-deep/90 px-5 py-4">
                      <dt className="order-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/40">
                        {s.label}
                      </dt>
                      <dd className="text-lg font-extrabold tracking-tight md:text-xl">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.55}>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="#specs"
                    className="inline-flex items-center gap-3 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_34px_-12px_rgba(241,39,42,0.55)] transition-colors hover:bg-[#d31d20]"
                  >
                    Full Specifications
                  </a>
                  <a
                    href="#return-earn"
                    className="text-sm font-bold text-green underline-offset-4 hover:underline"
                  >
                    Return &amp; Earn ₹20 →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* product photograph, cropped from the official sheet */}
            <Reveal delay={0.2}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,160,255,0.28),transparent_70%)] blur-xl"
                />
                <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-white p-8">
                  <Image
                    src={p.image}
                    alt={`${p.name} ${p.category}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* specifications */}
      <section
        id="specs"
        className="scroll-mt-24 bg-mist py-24 md:py-32"
        aria-label="Technical specifications"
      >
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">Technical Specifications</p>
            <h2 className="text-display mt-6 max-w-2xl text-3xl text-navy sm:text-4xl md:text-5xl">
              {p.variants ? "Two models, one standard." : "The numbers behind the air."}
            </h2>
          </Reveal>

          <div className="mt-12">
            {p.variants ? (
              <VariantSwitcher variants={p.variants} />
            ) : (
              <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
                <Reveal>
                  {p.sizes ? <SizeTable rows={p.sizes} /> : <SpecTable specs={p.specs ?? []} />}
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="space-y-10">
                    <FeatureList features={p.features} />
                    <DimensionTable rows={p.dimensions} />
                    {p.note && (
                      <p className="rounded-2xl border border-green/25 bg-green/8 px-5 py-4 text-sm font-bold text-green-deep">
                        {p.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              </div>
            )}
          </div>

        </div>
      </section>

      <Installation />

      <ReturnEarn />

      {/* other products */}
      <section className="bg-mist py-20 md:py-28" aria-label="More products">
        <div className="container-x">
          <Reveal>
            <p className="text-eyebrow text-blue">The Rest of the Range</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {PRODUCTS.filter((o) => o.slug !== p.slug).map((o) => (
              <Link
                key={o.slug}
                href={`/products/${o.slug}`}
                className="group rounded-full border border-navy/12 bg-white px-6 py-3 text-sm font-bold text-navy/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/35 hover:text-navy"
              >
                {o.name}
                <span className="ml-2 text-navy/35 transition-colors group-hover:text-red">
                  {o.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
