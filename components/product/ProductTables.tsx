import type { DimensionRow, SizeRow, SpecRow } from "@/lib/products";

/** Two-column specification table (single-spec products). */
export function SpecTable({ specs }: { specs: SpecRow[] }) {
  return (
    <div>
      <h3 className="text-eyebrow text-navy/40">Specification</h3>
      <dl className="mt-5 overflow-hidden rounded-3xl border border-navy/8 bg-white">
        {specs.map((s, i) => (
          <div
            key={s.label}
            className={`grid grid-cols-[1fr_1.2fr] gap-6 px-6 py-4 transition-colors hover:bg-mist/70 md:px-8 ${
              i > 0 ? "border-t border-navy/6" : ""
            }`}
          >
            <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy/45">
              {s.label}
            </dt>
            <dd className="text-base font-extrabold tracking-tight text-navy">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Multi-size specification table (Iris, Vega). */
export function SizeTable({ rows }: { rows: SizeRow[] }) {
  const heads = ["Model", "Fan Size", "Power (W)", "Voltage (V)", "Speed", "Frequency (H)"];
  return (
    <div>
      <h3 className="text-eyebrow text-navy/40">Specification</h3>
      <div className="mt-5 overflow-x-auto rounded-3xl border border-navy/8 bg-white">
        <table className="w-full min-w-[38rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-navy/10 bg-mist/60">
              {heads.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-navy/50"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.fanSize}
                className="border-t border-navy/6 transition-colors hover:bg-mist/50"
              >
                <td className="px-5 py-4 text-sm font-extrabold text-navy">{r.model}</td>
                <td className="px-5 py-4 text-sm font-bold text-navy/80">{r.fanSize}</td>
                <td className="px-5 py-4 text-sm text-navy/70">{r.power}</td>
                <td className="px-5 py-4 text-sm text-navy/70">{r.voltage}</td>
                <td className="px-5 py-4 text-sm font-bold text-navy/80">{r.speed}</td>
                <td className="px-5 py-4 text-sm text-navy/70">{r.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Dimension table — letters map to the technical drawing on the sheet. */
export function DimensionTable({ rows }: { rows: DimensionRow[] }) {
  return (
    <div>
      <h3 className="text-eyebrow text-navy/40">Dimensions</h3>
      <div className="mt-5 overflow-x-auto rounded-2xl">
        <table className="w-full border-collapse overflow-hidden rounded-2xl text-left">
          <thead>
            <tr className="bg-navy text-white">
              {["Size (mm)", "A", "B", "C", "D"].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r) => (
              <tr key={r.size} className="border-t border-navy/8">
                <td className="px-5 py-3 text-sm font-extrabold text-navy">{r.size}</td>
                <td className="px-5 py-3 text-sm text-navy/70">{r.a}</td>
                <td className="px-5 py-3 text-sm text-navy/70">{r.b}</td>
                <td className="px-5 py-3 text-sm text-navy/70">{r.c}</td>
                <td className="px-5 py-3 text-sm text-navy/70">{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-navy/40">
        All measurements in millimetres. A, B, C and D refer to the technical
        drawing.
      </p>
    </div>
  );
}

/** Feature bullets. */
export function FeatureList({ features }: { features: string[] }) {
  return (
    <div>
      <h3 className="text-eyebrow text-navy/40">Features</h3>
      <ul className="mt-5 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
            />
            <span className="text-base font-semibold text-navy/75">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
