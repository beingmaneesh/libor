"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x relative z-[60]">
        <div
          className={`mt-4 flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-7 ${
            scrolled || open
              ? "border-navy/10 bg-white/85 shadow-[0_18px_50px_-24px_rgba(8,29,73,0.35)] backdrop-blur-xl"
              : "border-white/0 bg-white/60 backdrop-blur-md"
          }`}
        >
          <Link href="/" aria-label="LIBOR India — home" className="relative z-[60]">
            <Logo className="text-lg" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-navy" : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact#dealer"
              className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue"
            >
              Become a Dealer
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45 bg-navy" : "bg-navy"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 rounded transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45 bg-navy" : "bg-navy"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-navy px-8 pb-10 pt-32 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className={`block py-2 text-4xl font-bold tracking-tight ${
                      pathname === l.href ? "text-white" : "text-white/50"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Link
                href="/contact#dealer"
                className="inline-flex rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white"
              >
                Become a Dealer
              </Link>
              <p className="serif-accent text-lg text-white/60">
                Let&rsquo;s Live for Generations.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
