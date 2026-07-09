import Link from "next/link";
import { ReactNode } from "react";
import { Magnetic } from "@/components/motion/Magnetic";

const styles = {
  primary:
    "bg-red text-white hover:bg-[#d31d20] shadow-[0_10px_34px_-12px_rgba(241,39,42,0.55)]",
  navy: "bg-navy text-white hover:bg-blue",
  light:
    "bg-white text-navy hover:bg-mist border border-navy/10 shadow-[0_10px_30px_-16px_rgba(8,29,73,0.35)]",
  outline:
    "border border-white/30 text-white hover:bg-white hover:text-navy",
  green: "bg-green text-white hover:bg-green-deep",
} as const;

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Magnetic className="inline-block">
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}
      >
        {children}
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
      </Link>
    </Magnetic>
  );
}
