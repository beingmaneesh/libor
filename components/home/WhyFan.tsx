"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const STORIES = [
  {
    title: "Quiet Performance",
    body: "Because a home should sound like a home. Balanced blades, precision motor, near-silent air exchange.",
  },
  {
    title: "Thoughtful Design",
    body: "Compact enough to disappear into the wall, considered enough to be missed when it's gone.",
  },
  {
    title: "Reliable Build",
    body: "Rust-proof, shock-proof, and tested beyond standards — reliability is our first sustainability feature.",
  },
  {
    title: "Energy Conscious",
    body: "More air moved per watt. Efficiency isn't a spec line; it's a promise to the grid and the planet.",
  },
  {
    title: "Long Life",
    body: "Products that last longer waste less. Three years of warranty, many more of service.",
  },
  {
    title: "Easy Installation",
    body: "Mounted in minutes. We respect the electrician's afternoon as much as the customer's air.",
  },
  {
    title: "Premium Finish",
    body: "High-grade polymer with a finish that belongs in a considered home — not hidden away in shame.",
  },
];

/** Feature storytelling — every feature tied back to the philosophy. */
export function WhyFan() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Why this fan">
      <div className="container-x">
        <Reveal>
          <p className="text-eyebrow text-blue">Why this fan</p>
          <h2 className="text-display mt-8 max-w-3xl text-3xl text-navy sm:text-4xl md:text-5xl">
            Seven features. One philosophy behind each.
          </h2>
        </Reveal>

        <div className="mt-16">
          {STORIES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-2 border-t border-navy/10 py-8 transition-colors duration-500 hover:bg-mist/60 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10 md:py-10"
            >
              <span className="text-sm font-extrabold text-blue/50 transition-colors duration-500 group-hover:text-red md:pl-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-navy transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {s.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-navy/55 md:text-base">
                {s.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-navy/10" />
        </div>
      </div>
    </section>
  );
}
