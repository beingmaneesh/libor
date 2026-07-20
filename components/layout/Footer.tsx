import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { BRAND } from "@/lib/content";

const NAV = [
  { href: "/#vision", label: "Vision" },
  { href: "/#purpose", label: "Purpose" },
  { href: "/products", label: "Our Product" },
  { href: "/#sustainability", label: "Sustainability" },
  { href: "/contact#dealer", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden bg-navy-deep text-white">
      {/* sunrise sliver on the horizon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/60 to-transparent"
      />
      <div className="container-x relative py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light className="h-7 w-auto" />
            <p className="serif-accent mt-6 max-w-sm text-2xl leading-snug text-white/85">
              Let&rsquo;s Live for Generations.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/sustainability-lockup.svg"
              alt="India's first sustainability-driven electrical distribution ecosystem"
              width={212}
              height={58}
              loading="lazy"
              className="mt-6 h-12 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              Sustainable products, stronger partnerships, a circular future.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-eyebrow text-white/40">Explore</h2>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow text-white/40">Customer Care</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-semibold transition-colors hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="font-semibold transition-colors hover:text-white"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${BRAND.website}`}
                  className="font-semibold transition-colors hover:text-white"
                >
                  {BRAND.website}
                </a>
              </li>
              <li className="pt-2 text-white/40">
                Chiyyaram, Thrissur, Kerala 680026
              </li>
            </ul>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide text-green">
                Return  
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide text-green">
                Reward 
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide text-green">
                 Recycle
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LIBOR India. All rights reserved.</p>
          <p>Designed for generations. Made in India.</p>
        </div>
      </div>
    </footer>
  );
}
