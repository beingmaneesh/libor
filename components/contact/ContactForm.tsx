"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "@/lib/content";

const FIELD =
  "w-full rounded-2xl border border-navy/12 bg-white px-5 py-4 text-sm font-semibold text-navy placeholder:text-navy/35 transition-colors focus:border-blue focus:outline-none";

export function ContactForm({ defaultTopic = "general" }: { defaultTopic?: string }) {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(defaultTopic);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject =
      topic === "dealer"
        ? "Dealer / Partnership Enquiry — LIBOR India"
        : topic === "product"
          ? "Kamet Product Enquiry — LIBOR India"
          : "Enquiry — LIBOR India";
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `City: ${data.get("city") || "—"}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-96 flex-col items-center justify-center rounded-3xl border border-green/30 bg-green/5 p-10 text-center"
            role="status"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-white">
              <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 8.5l3.5 3.5 7-8" />
              </svg>
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-navy">
              Your email is on its way.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/55">
              We&rsquo;ve opened your mail client with everything pre-filled.
              If it didn&rsquo;t open, write to us directly at{" "}
              <a href={`mailto:${BRAND.email}`} className="font-bold text-blue underline-offset-2 hover:underline">
                {BRAND.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-8 rounded-full border border-navy/15 px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:border-navy/40"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            exit={{ opacity: 0, y: -12 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <fieldset>
              <legend className="text-eyebrow mb-4 text-navy/40">I&rsquo;m reaching out about</legend>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Enquiry topic">
                {[
                  ["general", "General"],
                  // ["product", "The Kamet Fan"],
                  ["dealer", "Becoming a Dealer"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={topic === value}
                    onClick={() => setTopic(value)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      topic === value
                        ? "border-navy bg-navy text-white"
                        : "border-navy/15 bg-white text-navy/60 hover:border-navy/40"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="sr-only">Full name</label>
                <input id="cf-name" name="name" required placeholder="Full name *" className={FIELD} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="cf-email" className="sr-only">Email address</label>
                <input id="cf-email" name="email" type="email" required placeholder="Email address *" className={FIELD} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="cf-phone" className="sr-only">Phone number</label>
                <input id="cf-phone" name="phone" type="tel" placeholder="Phone number" className={FIELD} autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="cf-city" className="sr-only">City</label>
                <input id="cf-city" name="city" placeholder="City" className={FIELD} autoComplete="address-level2" />
              </div>
            </div>
            <div>
              <label htmlFor="cf-message" className="sr-only">Message</label>
              <textarea
                id="cf-message"
                name="message"
                required
                rows={5}
                placeholder={
                  topic === "dealer"
                    ? "Tell us about your business, territory and current brands… *"
                    : "How can we help? *"
                }
                className={`${FIELD} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-red px-8 py-4 text-sm font-bold text-white shadow-[0_10px_34px_-12px_rgba(241,39,42,0.55)] transition-colors hover:bg-[#d31d20]"
            >
              Send Message
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 8h13M9 3l5 5-5 5" />
              </svg>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
