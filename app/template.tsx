"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;

  return (
    <>
      {/* curtain wipe on route enter */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-navy"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
