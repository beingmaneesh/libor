import { LOGO_H, LOGO_W, LogoPaths } from "./logoPaths";

const BLADE_ANGLES = [0, 51.43, 102.86, 154.29, 205.71, 257.14, 308.57];
// small wordmark centred on the cap
const LOGO_SCALE = 0.19;
const LOUVER_YS = [-126, -100, -74, -48, -22, 4, 30, 56, 82, 108, 132];
const R = 148;
const chord = (y: number) => 2 * Math.sqrt(Math.max(R * R - y * y, 0)) * 0.97;

/**
 * Lightweight 2D Kamet illustration (pure SVG), matched to the product photo:
 * square white body, louvered grille, rounded-square centre cap and seven
 * cream blades. Only the blade group spins.
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
        <radialGradient id="fan-body" cx="38%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f3f4f2" />
          <stop offset="100%" stopColor="#dfe1dc" />
        </radialGradient>
        <radialGradient id="fan-drum" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#efe9d6" />
          <stop offset="75%" stopColor="#ddd4b9" />
          <stop offset="100%" stopColor="#c4baa0" />
        </radialGradient>
        <linearGradient id="fan-blade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6efd9" />
          <stop offset="100%" stopColor="#e3d7b2" />
        </linearGradient>
      </defs>

      {/* square body */}
      <rect x="8" y="8" width="384" height="384" rx="26" fill="url(#fan-body)" />
      <rect
        x="8"
        y="8"
        width="384"
        height="384"
        rx="26"
        fill="none"
        stroke="#ccd2d9"
        strokeWidth="1.5"
      />

      {/* circular opening */}
      <circle cx="200" cy="200" r={R} fill="url(#fan-drum)" />
      <circle
        cx="200"
        cy="200"
        r={R}
        fill="none"
        stroke="#b9b09a"
        strokeOpacity="0.6"
        strokeWidth="2"
      />

      {/* rotor: seven cream blades — the only moving part */}
      <g
        style={
          spinning
            ? { transformOrigin: "200px 200px", animation: "spin 9s linear infinite" }
            : undefined
        }
      >
        {BLADE_ANGLES.map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            <path
              d="M228 176 L 314 158 Q 330 156 332 172 L 334 214 Q 334 230 318 228 L 232 216 Q 220 214 220 198 Q 220 182 228 176 Z"
              fill="url(#fan-blade)"
              opacity="0.98"
              transform="rotate(-16 278 196)"
            />
          </g>
        ))}
        <circle cx="200" cy="200" r="42" fill="#e9deba" />
      </g>

      {/* fixed louvered grille */}
      <g>
        {LOUVER_YS.map((y) => (
          <rect
            key={y}
            x={200 - chord(y) / 2}
            y={200 + y - 4}
            width={chord(y)}
            height="8"
            rx="4"
            fill="#fbfbf8"
          />
        ))}
        {/* central vertical spine */}
        <rect x="195.5" y={200 - R * 0.99} width="9" height={R * 2 * 0.99} rx="4.5" fill="#fbfbf8" />
      </g>

      {/* fixed rounded-square centre cap */}
      <rect x="148" y="148" width="104" height="104" rx="26" fill="url(#fan-body)" />
      <rect
        x="148"
        y="148"
        width="104"
        height="104"
        rx="26"
        fill="none"
        stroke="#cfd4d2"
        strokeWidth="1.5"
      />
      {/* small red LIBOR wordmark on the cap */}
      <g
        fill="#ed1c24"
        transform={`translate(${200 - (LOGO_W * LOGO_SCALE) / 2} ${
          200 - (LOGO_H * LOGO_SCALE) / 2
        }) scale(${LOGO_SCALE})`}
      >
        <LogoPaths />
      </g>

      {/* corner screws */}
      {[
        [34, 34],
        [366, 34],
        [34, 366],
        [366, 366],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#c2c8cf" />
      ))}
    </svg>
  );
}
