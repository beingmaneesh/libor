import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { BRAND, DEALER_POINTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Join the Journey",
  description:
    "Talk to LIBOR India — product enquiries, dealer & distribution partnerships, and the Return & Earn ₹20 programme.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={[
          <span key="1">Every generation</span>,
          <span key="s" className="serif-accent text-green">
            starts with a conversation.
          </span>,
        ]}
        sub="A question about a product, a partnership proposal, or an old fan to return — we answer everything, usually within a working day."
      />

      {/* form + details */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <Reveal>
            <div className="rounded-[2rem] border border-navy/8 bg-white p-8 md:p-12">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                Write to us.
              </h2>
              <p className="mt-2 text-sm text-navy/50">
                Fields marked * are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-eyebrow text-navy/40">Customer Care</h2>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="group block"
                    >
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                        Email
                      </span>
                      <span className="mt-1 block text-lg font-extrabold tracking-tight text-navy transition-colors group-hover:text-blue md:text-xl">
                        {BRAND.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                      className="group block"
                    >
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                        Customer Care No.
                      </span>
                      <span className="mt-1 block text-lg font-extrabold tracking-tight text-navy transition-colors group-hover:text-blue md:text-xl">
                        {BRAND.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`https://${BRAND.website}`} className="group block">
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                        Website
                      </span>
                      <span className="mt-1 block text-lg font-extrabold tracking-tight text-navy transition-colors group-hover:text-blue md:text-xl">
                        {BRAND.website}
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="mt-9 space-y-6 border-t border-navy/10 pt-8">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                      Marketed by
                    </span>
                    <p className="mt-1.5 text-sm font-bold text-navy">
                      {BRAND.marketedBy.name}
                    </p>
                    <p className="mt-1 max-w-xs text-sm leading-relaxed text-navy/60">
                      {BRAND.marketedBy.address}
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
                      Manufactured at
                    </span>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-navy/60">
                      {BRAND.manufacturedAt}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grain relative overflow-hidden rounded-3xl bg-green-deep p-8 text-white">
                <p className="text-eyebrow text-white/50">Return &amp; Earn</p>
                <p className="mt-4 text-lg font-bold leading-snug">
                  Have an old fan? Any brand, any age — bring it in and earn
                  ₹20 while it re-enters the loop.
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Mention &ldquo;Return &amp; Earn&rdquo; in your message and
                  we&rsquo;ll point you to the nearest partner.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* dealer section */}
      <section
        id="dealer"
        className="dark-section grain relative scroll-mt-24 overflow-hidden bg-navy py-28 text-white md:py-36"
        aria-label="Become a dealer"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(241,39,42,0.25),transparent_70%)] blur-2xl"
        />
        <div className="container-x relative">
          <Reveal>
            <p className="text-eyebrow text-red">Become a Dealer</p>
            <h2 className="text-display mt-8 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
              Own your territory in India&rsquo;s first circular electrical
              ecosystem.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {DEALER_POINTS.map((d, i) => (
              <StaggerItem key={d.title} className="h-full">
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="text-xs font-extrabold tracking-widest text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{d.body}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="h-full">
              <a
                href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                  "Dealer / Partnership Enquiry — LIBOR India"
                )}`}
                className="group flex h-full min-h-44 flex-col justify-between rounded-3xl bg-red p-7 transition-colors duration-300 hover:bg-[#d31d20]"
              >
                <span className="text-lg font-extrabold leading-snug">
                  Ready to talk?
                  <br />
                  Write to our partnerships desk.
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  {BRAND.email}
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 8h13M9 3l5 5-5 5" />
                  </svg>
                </span>
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
