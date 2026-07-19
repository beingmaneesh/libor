import Image from "next/image";
import Link from "next/link";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";

/** Range teaser — a shortcut from the brand story into the products. */
export function Range() {
  return (
    <section
      className="relative overflow-hidden bg-mist py-24 md:py-32"
      aria-label="The range"
    >
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <p className="text-eyebrow text-blue">The Range</p>
            </Reveal>
            <div className="mt-6 max-w-xl">
              <LineReveal
                as="h2"
                className="text-display text-3xl text-navy sm:text-4xl md:text-5xl"
                lines={[
                  <span key="1">Six categories.</span>,
                  <span key="2">
                    One <span className="serif-accent text-blue">standard.</span>
                  </span>,
                ]}
              />
            </div>
          </div>
          <Reveal delay={0.2}>
            <CTA href="/products" variant="navy">
              View All Products
            </CTA>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          stagger={0.07}
        >
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-blue/25 hover:shadow-[0_22px_50px_-26px_rgba(11,44,143,0.4)]"
              >
                <div className="relative aspect-square bg-gradient-to-b from-white to-mist/60">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 45vw"
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                </div>
                <div className="border-t border-navy/8 px-4 py-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-blue/70">
                    {p.category}
                  </p>
                  <p className="mt-1.5 text-lg font-extrabold tracking-tight text-navy transition-colors group-hover:text-red">
                    {p.name}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
