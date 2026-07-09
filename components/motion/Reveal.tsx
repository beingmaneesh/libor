"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals a heading line-by-line with a clip mask — cinematic text entrance. */
export function LineReveal({
  lines,
  className,
  lineClassName,
  stagger = 0.12,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  const reduced = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };
  const line: Variants = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: "110%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: EASE },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      <Tag className={className}>
        {lines.map((l, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em]">
            <motion.span
              variants={line}
              className={`block will-change-transform ${lineClassName ?? ""}`}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
