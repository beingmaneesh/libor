/**
 * LIBOR product catalogue — six categories, transcribed from the official
 * spec sheets. Products are either single-spec (one model) or ranged
 * (one model in several sizes, e.g. Iris and Vega).
 */

export type SpecRow = { label: string; value: string };

/** A size row for ranged products (Fresh Air, Low Speed). */
export type SizeRow = {
  model: string;
  fanSize: string;
  power: string;
  voltage: string;
  speed: string;
  frequency: string;
};

/** Dimension table row — letters map to the technical drawing. */
export type DimensionRow = {
  size: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

export type Variant = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  specs: SpecRow[];
  features: string[];
  dimensions: DimensionRow[];
};

export type Product = {
  slug: string;
  /** category — the headline on the sheet */
  category: string;
  /** product/series name */
  name: string;
  /** short label under the category, e.g. "6 inch" */
  qualifier?: string;
  tagline: string;
  description: string;
  /** product photograph, cropped from the sheet */
  image: string;
  isi: boolean;
  /** single-spec products */
  specs?: SpecRow[];
  /** ranged products */
  sizes?: SizeRow[];
  features: string[];
  dimensions: DimensionRow[];
  dimensionNote?: string;
  /** the full official spec sheet */
  sheet: string;
  /** products sold as two distinct fronts (Casa) */
  variants?: Variant[];
  note?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "kamet",
    category: "Axial Fan",
    name: "Kamet",
    qualifier: "6 inch",
    tagline: "High air flow, minimal noise.",
    description:
      "Exhaust fan delivers high air flow rate with minimal noise to ensure proper ventilation in small or enclosed areas, effectively removing stale air and preventing the build-up of moisture and odors.",
    image: "/images/products/kamet-photo.png",
    sheet: "/images/products/kamet.png",
    isi: true,
    specs: [
      { label: "Model", value: "NEXA" },
      { label: "Power (W)", value: "25" },
      { label: "Voltage (V)", value: "230" },
      { label: "Speed", value: "2000 RPM" },
      { label: "Frequency (H)", value: "50" },
      { label: "Fan Size", value: "150 MM" },
      { label: "Cutout Size", value: "6 INCH" },
    ],
    features: [
      "Rust Proof Body And Blades",
      "100% Copper Winding",
      "Low Energy Consumption",
      "High Speed Exhaust Fan",
    ],
    dimensions: [{ size: "150", a: "179", b: "11", c: "84", d: "150" }],
  },
  {
    slug: "leo",
    category: "BLDC Exhaust Fan",
    name: "Leo",
    tagline: "Strong suction, quiet operation.",
    description:
      "A compact, high-speed ventilation fan designed for use in bathrooms, kitchens, or small office spaces. It features strong suction capability to help expel odors, smoke, moisture, and fumes, maintaining fresh air circulation. The design emphasizes quiet operation.",
    image: "/images/products/leo-photo.png",
    sheet: "/images/products/leo.png",
    isi: false,
    specs: [
      { label: "Model", value: "LEO" },
      { label: "Power (W)", value: "6" },
      { label: "Voltage (V)", value: "230" },
      { label: "Speed", value: "2200 RPM" },
      { label: "Frequency (H)", value: "50" },
      { label: "Fan Size", value: "6 INCH" },
      { label: "Cutout Size", value: "150 X 150 MM · 6 INCH" },
    ],
    features: [
      "Rust Proof Body And Blades",
      "100% Copper Winding",
      "Ideal For Roof/ceiling Mounting",
      "Automatic Dust Protection Shutters",
    ],
    dimensions: [{ size: "150", a: "200", b: "10", c: "91", d: "147" }],
  },
  {
    slug: "sigma",
    category: "Ceiling Exhaust Fan",
    name: "Sigma",
    tagline: "Powerful ventilation, overhead.",
    description:
      "These ceiling mounted exhaust fans are engineered to deliver powerful ventilation in compact spaces. With a sleek, modern design, this fan effectively removes stale air, humidity, and odors from bathrooms, kitchens, and utility rooms.",
    image: "/images/products/sigma-photo.png",
    sheet: "/images/products/sigma.png",
    isi: true,
    specs: [
      { label: "Model", value: "SIGMA" },
      { label: "Power (W)", value: "35" },
      { label: "Voltage (V)", value: "230" },
      { label: "Speed", value: "1400 RPM" },
      { label: "Frequency (H)", value: "50" },
      { label: "Fan Size", value: "4 INCH" },
      { label: "Cutout Size", value: "204 X 204 MM · 8 INCH" },
    ],
    features: [
      "Rust Proof Body And Blades",
      "100% Copper Winding",
      "Automatic Dust Protection Shutters",
      "Ideal For Roof/ceiling Mounting",
    ],
    dimensions: [{ size: "100", a: "245", b: "200", c: "150", d: "95" }],
  },
  {
    slug: "casa",
    category: "BLDC Axial Fan",
    name: "Casa",
    tagline: "Two fronts. One quiet motor.",
    description:
      "A compact, high-speed ventilation fan designed for use in bathrooms, kitchens, or small office spaces. It features strong suction capability to help expel odors, smoke, moisture, and fumes, maintaining fresh air circulation. The design emphasizes quiet operation.",
    image: "/images/products/casa-photo.png",
    sheet: "/images/products/casa.png",
    isi: false,

    specs: [
          { label: "Model", value: "CASA" },
          { label: "Power (W)", value: "6" },
          { label: "Voltage (V)", value: "230" },
          { label: "Speed", value: "2200 RPM" },
          { label: "Frequency (H)", value: "50" },
          { label: "Fan Size", value: "150 MM" },
          { label: "Cutout Size", value: "6 INCH" },
        ],
    features: [
      "Rust Proof Body And Blades",
      "100% Copper Winding",
      "Ideal for glass mounting",
      "Aesthetic look",
    ],
    dimensions: [{ size: "150", a: "200", b: "35", c: "91", d: "147" }],
    variants: [
      {
        name: "With Shutter",
        subtitle: "BLDC Axial Fan",
        description:
          "A compact, high-speed ventilation fan designed for use in bathrooms, kitchens, or small office spaces. It features strong suction capability to help expel odors, smoke, moisture, and fumes, maintaining fresh air circulation. The design emphasizes quiet operation.",
        image: "/images/products/casa-photo.png",
        specs: [
          { label: "Model", value: "CASA" },
          { label: "Power (W)", value: "6" },
          { label: "Voltage (V)", value: "230" },
          { label: "Speed", value: "2200 RPM" },
          { label: "Frequency (H)", value: "50" },
          { label: "Fan Size", value: "150 MM" },
          { label: "Cutout Size", value: "6 INCH" },
        ],
        features: [
          "Rust Proof Body And Blades",
          "100% Copper Winding",
          "Ideal for glass mounting",
          "Aesthetic look",
        ],
        dimensions: [{ size: "150", a: "200", b: "35", c: "91", d: "147" }],
      },
      {
        name: "Stainless Steel Front",
        subtitle: "BLDC Stainless Steel Front Exhaust Fan",
        description:
          "The same quiet BLDC motor behind a brushed stainless steel front, finished in champagne gold and rose copper — designed for glass mounting where the fan is seen as much as felt.",
        image: "/images/products/casa-steel-photo.png",
        specs: [
          { label: "Model", value: "CASA" },
          { label: "Power (W)", value: "6" },
          { label: "Voltage (V)", value: "230" },
          { label: "Speed", value: "2200 RPM" },
          { label: "Frequency (H)", value: "50" },
          { label: "Fan Size", value: "150 MM" },
          { label: "Cutout Size", value: "6 INCH" },
        ],
        features: [
          "Rust Proof Body And Blades",
          "100% Copper Winding",
          "Ideal for glass mounting",
          "Aesthetic look",
        ],
        dimensions: [{ size: "150", a: "200", b: "35", c: "91", d: "147" }],
      },
    ],
  },
  {
    slug: "iris",
    category: "Fresh Air Fan",
    name: "Iris",
    tagline: "High speed. Three sizes.",
    description:
      "A high-speed fresh air fan built to move large volumes of air. Available in 6, 9 and 12 inch with rust proof body and blades — and a reversible switch to draw fresh air in or push stale air out.",
    image: "/images/products/iris-photo.png",
    sheet: "/images/products/iris.png",
    isi: false,
    sizes: [
      {
        model: "IRIS",
        fanSize: "6 INCH",
        power: "60",
        voltage: "230",
        speed: "2600 RPM",
        frequency: "50",
      },
      {
        model: "IRIS",
        fanSize: "9 INCH",
        power: "65",
        voltage: "230",
        speed: "2500 RPM",
        frequency: "50",
      },
      {
        model: "IRIS",
        fanSize: "12 INCH",
        power: "70",
        voltage: "230",
        speed: "2200 RPM",
        frequency: "50",
      },
    ],
    features: [
      "Rust proof body and blades",
      "Available in 6, 9, 12 inch",
      "High speed fan",
    ],
    dimensions: [
      { size: "150", a: "210", b: "150", c: "180", d: "80" },
      { size: "225", a: "300", b: "228", c: "180", d: "80" },
      { size: "300", a: "390", b: "304", c: "190", d: "80" },
    ],
    note: "Available with reversible switch.",
  },
  {
    slug: "vega",
    category: "Low Speed",
    name: "Vega",
    qualifier: "Ventilation Fan",
    tagline: "Aerodynamic blades. Gentle speed.",
    description:
      "A low speed ventilation fan with aerodynamically designed blades for high air flow, automatic dust protection shutters, and a choice of three sizes for every room.",
    image: "/images/products/vega-photo.png",
    sheet: "/images/products/vega.png",
    isi: true,
    sizes: [
      {
        model: "VEGA",
        fanSize: "6 INCH",
        power: "35",
        voltage: "230",
        speed: "1350 RPM",
        frequency: "50",
      },
      {
        model: "VEGA",
        fanSize: "8 INCH",
        power: "40",
        voltage: "230",
        speed: "1300 RPM",
        frequency: "50",
      },
      {
        model: "VEGA",
        fanSize: "10 INCH",
        power: "45",
        voltage: "230",
        speed: "1250 RPM",
        frequency: "50",
      },
    ],
    features: [
      "Automatic dust protection shutters",
      "Available in 150mm, 200mm, 250mm",
      "Aerodynamically designed blades for high air flow",
    ],
    dimensions: [
      { size: "150", a: "235", b: "47", c: "81", d: "173" },
      { size: "200", a: "290", b: "44", c: "88", d: "240" },
      { size: "250", a: "340", b: "45", c: "88", d: "240" },
    ],
  },
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const INSTALL_STEPS = [
  {
    title: "Switch off the mains",
    body: "Safety first — isolate the circuit before you begin.",
  },
  {
    title: "Prepare the cutout",
    body: "Match the wall, window or ceiling cutout to the size given in the specification table.",
  },
  {
    title: "Mount and secure",
    body: "Seat the fan into the opening and fix it evenly so the body sits flush and true.",
  },
  {
    title: "Connect & test",
    body: "Wire to the 230V / 50Hz supply, restore power, and check for smooth, quiet running.",
  },
];
