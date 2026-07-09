export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-extrabold tracking-[-0.02em] ${
        light ? "text-white" : "text-navy"
      } ${className}`}
    >
      <span className="text-[1.35em] leading-none">LIBOR</span>
      <span aria-hidden="true" className="relative -top-[0.1em] inline-block h-[0.5em] w-[0.5em]">
        <svg viewBox="0 0 24 24" className="h-full w-full">
          {/* circular-economy mark: open ring with returning arrow */}
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="#F1272A"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="42 15"
            transform="rotate(40 12 12)"
          />
          <circle cx="12" cy="12" r="3.2" fill="#52B44B" />
        </svg>
      </span>
    </span>
  );
}
