# LIBOR India — Let's Live for Generations

Ultra-premium corporate website for LIBOR, a sustainability-driven electrical
brand. The site positions LIBOR not as an exhaust fan company but as
**India's first sustainability-driven electrical distribution ecosystem** —
the Kamet 150mm exhaust fan is chapter one, not the whole story.

## Stack

- **Next.js 15** (App Router, static prerendering, Turbopack)
- **TypeScript** + **Tailwind CSS v4** (brand tokens via `@theme`)
- **GSAP + ScrollTrigger** — pinned cinematic scroll sequences (Manifesto, Brand Purpose)
- **Framer Motion** — micro-interactions, line reveals, page transitions, magnetic buttons
- **Lenis** — smooth scrolling, synced with ScrollTrigger
- **React Three Fiber + drei** — procedural 3D Kamet fan (hero rotation + 360° drag viewer), lazy-loaded so it never blocks first paint

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero (3D fan, Earth horizon, particles) → Manifesto → Vision → Mission → Purpose → Promise → First Product → Why This Fan → Circular Economy → Dealers → Future Roadmap → Closing |
| `/about` | Brand story, full Vision / Mission / Purpose / Promise statements, values, journey timeline |
| `/products` | Kamet 150mm: 360° viewer, interactive feature hotspots, specs, 3-year warranty, Return & Earn ₹20, packaging, detail gallery, installation, spec-sheet download |
| `/contact` | Enquiry form (general / product / dealer), direct lines, Become-a-Dealer section (`#dealer`) |

## Brand system

| Token | Hex |
| --- | --- |
| Primary Blue | `#123D8A` |
| Dark Navy | `#081D49` |
| Libor Red | `#F1272A` |
| Eco Green | `#52B44B` |
| Light Grey | `#F4F7FA` |

Typography: **Manrope** (display/body) + **Instrument Serif** italic accents,
loaded via `next/font` (self-hosted, zero layout shift).

## Performance & accessibility

- All routes are statically prerendered; three.js is code-split and loaded client-side only when the canvas nears the viewport (`frameloop` pauses off-screen).
- `prefers-reduced-motion` disables Lenis, GSAP pins, particle drift, fan spin and reveal animations.
- Semantic landmarks, skip link, labelled controls, `aria-pressed` states on all interactive explorers, focus-visible rings on light and dark sections.
- SEO: per-page metadata + canonical URLs, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, Organization + Product JSON-LD.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```
