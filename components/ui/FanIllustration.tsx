/**
 * Lightweight 2D fan illustration (pure SVG) — used where a full WebGL
 * canvas would be wasteful. The rotor spins slowly via CSS.
 */
export function FanIllustration({
  className = "",
  spinning = true,
}: {
  className?: string;
  spinning?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Kamet 150mm exhaust fan"
    >
      <defs>
        <radialGradient id="fan-body" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#eef2f7" />
          <stop offset="100%" stopColor="#d8e0ea" />
        </radialGradient>
        <radialGradient id="fan-depth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0c2a63" />
          <stop offset="100%" stopColor="#081d49" />
        </radialGradient>
        <linearGradient id="fan-blade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe3ec" />
        </linearGradient>
      </defs>

      {/* frame */}
      <circle cx="200" cy="200" r="188" fill="url(#fan-body)" />
      <circle cx="200" cy="200" r="188" fill="none" stroke="#c6d0dd" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="150" fill="url(#fan-depth)" />

      {/* rotor */}
      <g
        style={
        spinning
          ? { transformOrigin: "200px 200px", animation: "spin 14s linear infinite" }
          : undefined
        }
      >
        {[0, 72, 144, 216, 288].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            {/* pitched blade: rounded trapezoid swept around the hub */}
            <path
              d="M236 178 L 330 160 Q 348 158 350 176 L 352 216 Q 352 234 334 232 L 240 218 Q 226 216 226 198 Q 226 182 236 178 Z"
              fill="url(#fan-blade)"
              opacity="0.97"
              transform="rotate(-14 290 198)"
            />
          </g>
        ))}
        <circle cx="200" cy="200" r="44" fill="url(#fan-body)" />
        <circle cx="200" cy="200" r="26" fill="#f1272a" />
        <text
          x="200"
          y="205"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="1"
        >
          LIBOR
        </text>
      </g>

      {/* bezel highlight + mounting studs */}
      <circle cx="200" cy="200" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="3" />
      {[45, 135, 225, 315].map((deg) => (
        <circle
          key={deg}
          cx={200 + 172 * Math.cos((deg * Math.PI) / 180)}
          cy={200 + 172 * Math.sin((deg * Math.PI) / 180)}
          r="6"
          fill="#9fb0c4"
        />
      ))}
    </svg>
  );
}
