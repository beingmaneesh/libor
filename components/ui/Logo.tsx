import { LOGO_VIEWBOX, LogoPaths } from "./logoPaths";

const LIBOR_RED = "#ED1C24";

/** Official LIBOR wordmark. Size with a height class (e.g. `h-6 w-auto`). */
export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label="LIBOR"
      className={className}
      fill={light ? "#ffffff" : LIBOR_RED}
    >
      <LogoPaths />
    </svg>
  );
}
