import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { INSTALL_STEPS } from "@/lib/products";

/** Four-step installation guide, shared by every product page. */
export function Installation() {
  return (
    <section
      id="installation"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-label="Installation guide"
    >
      <div className="container-x">
        <Reveal>
          <p className="text-eyebrow text-blue">Installation</p>
          <h2 className="text-display mt-6 max-w-2xl text-3xl text-navy sm:text-4xl md:text-5xl">
            On the wall in four steps.
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {INSTALL_STEPS.map((s, i) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="relative h-full rounded-3xl border border-navy/8 bg-mist/60 p-7 pt-9">
                <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy/55">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-navy/45">
            Always use a licensed electrician for mains connections. Full guide
            included in every box.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
