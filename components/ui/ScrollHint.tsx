/**
 * "Keep scrolling" cue for pinned story sections. GSAP drives the
 * [data-hint-fill] progress bar and fades [data-hint] out near the end.
 */
export function ScrollHint({
  dark = false,
  label = "Scroll to continue",
}: {
  dark?: boolean;
  label?: string;
}) {
  return (
    <div
      data-hint
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span
        className={`whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-[0.3em] ${
          dark ? "text-white/60" : "text-navy/50"
        }`}
      >
        {label}
      </span>
      <span
        className={`block h-1 w-36 overflow-hidden rounded-full ${
          dark ? "bg-white/15" : "bg-navy/10"
        }`}
      >
        <span
          data-hint-fill
          className={`block h-full w-full origin-left scale-x-0 rounded-full ${
            dark ? "bg-green" : "bg-blue"
          }`}
        />
      </span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`hint-bob h-5 w-5 ${dark ? "text-white/70" : "text-navy/60"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 9l7 7 7-7" />
      </svg>
    </div>
  );
}
