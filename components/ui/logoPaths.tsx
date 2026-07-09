/** Single source of truth for the LIBOR wordmark artwork. */

export const LOGO_VIEWBOX = "0 0 234.05 58.98";
export const LOGO_W = 234.05;
export const LOGO_H = 58.98;

const D1 =
  "M52.58,0h19.66v9.83c0,1.81,1.47,3.28,3.28,3.28h22.94c13.11,0,19.66,5.46,19.66,16.38v13.11c0,10.92-6.55,16.38-19.66,16.38h-45.87c0-7.24,5.87-13.11,13.11-13.11h26.21c3.62,0,6.55-2.93,6.55-6.55v-6.55c0-3.62-2.93-6.55-6.55-6.55h-16.38c-1.81,0-3.28,1.47-3.28,3.28v13.11h-19.66V0Z";
const D2 =
  "M189.57,9.83h0c0,7.24-5.87,13.11-13.11,13.11h-26.21c-3.62,0-6.55,2.93-6.55,6.55v9.83c0,3.62,2.93,6.55,6.55,6.55h13.11c3.62,0,6.55-2.93,6.55-6.55v-13.11h19.66v16.38c0,10.92-6.55,16.38-19.66,16.38h-26.21c-13.11,0-19.66-5.46-19.66-16.38v-16.38c0-10.92,6.55-16.38,19.66-16.38h45.87Z";
const D3 =
  "M196.2,58.98V26.22c0-10.92,6.55-16.38,19.66-16.38h18.19v13.11h-11.64c-4.37,0-6.55,2.18-6.55,6.55v29.49h-19.66Z";

/** Wordmark glyphs as JSX — fill is inherited from the parent. */
export function LogoPaths() {
  return (
    <>
      <rect width="19.66" height="58.98" />
      <rect x="26.29" y="16.38" width="19.66" height="42.6" />
      <path d={D1} />
      <path d={D2} />
      <path d={D3} />
    </>
  );
}

/** Full SVG string for three.js SVGLoader (extruded 3D badge). */
export const LOGO_SVG_STRING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOGO_VIEWBOX}"><rect width="19.66" height="58.98"/><rect x="26.29" y="16.38" width="19.66" height="42.6"/><path d="${D1}"/><path d="${D2}"/><path d="${D3}"/></svg>`;
