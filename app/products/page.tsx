import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { ReturnEarn } from "@/components/product/ReturnEarn";
import { CTA } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Six Categories, One Standard",
  description:
    "Explore the LIBOR range: axial fans, BLDC exhaust fans, ceiling exhaust fans, BLDC axial fans, fresh air fans and low speed ventilation fans. Rust proof bodies, 100% copper winding, Made in India.",
  alternates: { canonical: "/products" },
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LIBOR Product Range",
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name} — ${p.category}`,
    url: `https://www.liborindia.com/products/${p.slug}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />

      <PageHero
        eyebrow="The Range"
        lines={[
          <span key="1">Six categories.</span>,
          <span key="2" className="serif-accent text-green">
            One standard.
          </span>,
        ]}
        sub="Every LIBOR fan is built on the same promise — rust proof bodies, 100% copper winding, and a place in a circular ecosystem that takes them back when their long life is done."
      />

      {/* catalog grid */}
      <section className="bg-mist py-20 md:py-28" aria-label="Product catalog">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
            {PRODUCTS.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy/8 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-blue/25 hover:shadow-[0_30px_70px_-32px_rgba(11,44,143,0.4)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-mist/70 p-8">
                    <Image
                      src={p.image}
                      alt={`${p.name} ${p.category}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {p.isi && (
                      <span className="absolute right-4 top-4 rounded-full border border-navy/15 bg-white/90 px-3 py-1 text-[0.6rem] font-extrabold tracking-widest text-navy backdrop-blur">
                        ISI
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col border-t border-navy/8 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
                      {p.category}
                    </p>
                    <h2 className="text-display mt-3 text-3xl text-navy">
                      {p.name}
                      {p.qualifier && (
                        <span className="ml-2 text-lg font-semibold text-navy/40">
                          {p.qualifier}
                        </span>
                      )}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/55">
                      {p.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors group-hover:text-red">
                      View details
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 8h13M9 3l5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ReturnEarn />

      {/* dealer close */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-display mx-auto max-w-2xl text-2xl text-navy sm:text-3xl md:text-4xl">
              Stock the range that gives back.
            </h2>
            <div className="mt-8">
              <CTA href="/contact#dealer" variant="primary">
                Become a Dealer
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
