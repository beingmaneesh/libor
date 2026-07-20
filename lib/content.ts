export const BRAND = {
  name: "LIBOR India",
  line: "Let's Live for Generations.",
  positioning:
    "Building India's First Sustainability-Driven Electrical Distribution Ecosystem.",
  vision:
    "To build India's most trusted sustainability-driven electrical brand, creating better products, stronger partnerships and a circular future for generations to come.",
  mission:
    "To deliver reliable and thoughtfully designed electrical products through a responsible ecosystem that rewards customers, empowers trade partners and reduces waste.",
  purpose:
    "Making every electrical purchase a better choice—for people, business and the planet.",
  promise: "Quality you can trust. Responsibility you can see. Value that returns.",
  email: "customercare@liborindia.com",
  phone: "+91 80898 91230",
  website: "www.liborindia.com",
  marketedBy: {
    name: "APTUS E SOLUTION PVT. LTD.",
    address:
      "No. 15/688-2, Near LBS Center, Chiyyaram, Thrissur, Kerala, India – 680026",
  },
  manufacturedAt: "Kh. No. 969, Raja Vihar, Near B.I.E, Delhi – 110042",
};

export const MISSION_PILLARS = [
  {
    title: "Reliable Products",
    body: "Engineered to last, tested beyond standards, and backed by warranties we honour without friction.",
  },
  {
    title: "Responsible Ecosystem",
    body: "A distribution network designed around accountability — from raw material to responsible disposal.",
  },
  {
    title: "Empowered Partners",
    body: "Trade partners who grow with us through fair margins, marketing support and long-term trust.",
  },
  {
    title: "Reduced Waste",
    body: "Every product designed for return, recovery and rebirth. Nothing built to be thrown away.",
  },
];

export type ProductFeature = {
  title: string;
  story: string;
  /** optional official badge artwork (white-on-transparent, for dark tiles) */
  icon?: string;
};

const FEATURES: ProductFeature[] = [
    {
      title: "Smooth & Low Noise Operation",
      story:
        "Silence is a design decision. Seven balanced blades and a precision motor keep the Kamet whisper-quiet — because a home should sound like a home.",
      icon: "/icons/low-noise.svg",
    },
    {
      title: "High Grade Plastic Body",
      story:
        "Engineering-grade polymer chosen for durability and recyclability. Material that lives long, then lives again.",
      icon: "/icons/plastic-body.svg",
    },
    {
      title: "High Speed Fan",
      story:
        "Rapid air exchange without the drama. More air moved per watt is our idea of performance.",
    },
    {
      title: "Rust & Shock Proof Body",
      story:
        "Built for Indian kitchens and bathrooms — humidity, heat and daily life. Protection you never have to think about.",
    },
    {
      title: "Easy to Mount",
      story:
        "Installed in minutes, not hours. Thoughtful design respects the electrician's time as much as the customer's.",
    },
    {
      title: "Compact Design",
      story:
        "A 150mm sweep in a footprint that disappears into the wall. Presence in performance, not in size.",
      icon: "/icons/sweep-150mm.svg",
    },
    {
      title: "Made in India",
      story:
        "Designed, engineered and assembled in India — creating value here, for generations here.",
      icon: "/icons/made-in-india.svg",
    },
];

export const PRODUCT = {
  name: "Kamet 150mm Exhaust Fan",
  shortName: "Kamet",
  tagline: "Where our journey begins.",
  subline:
    "Our first product reflects the values we'll build every future product upon.",
  features: FEATURES,
  specs: [
    { label: "Product", value: "Ventilation Fan" },
    { label: "Model", value: "Kamet 150mm" },
    { label: "Voltage", value: "220–240V" },
    { label: "Frequency", value: "50Hz" },
    { label: "Sweep", value: "150mm" },
    { label: "Blades", value: "7" },
    { label: "Certification", value: "ISI Marked · IS:302-2-80:2017" },
    { label: "Warranty", value: "3 Years" },
    { label: "Origin", value: "Made in India" },
  ],
  warrantyYears: 3,
  returnEarn: 20,
};

export const CIRCULAR_STAGES = [
  {
    title: "Raw Materials",
    body: "Recyclable, high-grade polymers and metals selected for a second life.",
  },
  {
    title: "Manufacturing",
    body: "Made in India with process waste minimised at every step.",
  },
  {
    title: "Customer",
    body: "Years of reliable, energy-conscious service in your home.",
  },
  {
    title: "Return & Reward",
    body: "Return LIBOR packaging to any authorized dealer — and earn ₹20 back.",
  },
  {
    title: "Recycling",
    body: "Recovered packaging and materials are processed, not landfilled.",
  },
  {
    title: "Future Products",
    body: "Yesterday's fan becomes part of tomorrow's product.",
  },
];

export const FUTURE_CATEGORIES = [
  "Fans",
  "Lighting",
  "Switches",
  "Accessories",
  "Smart Electricals",
];

export const DEALER_POINTS = [
  {
    title: "A growing brand",
    body: "Get in at chapter one of a brand built for the next fifty years, not the next quarter.",
  },
  {
    title: "Responsible business",
    body: "Sell products your customers feel good about — and come back for.",
  },
  {
    title: "Marketing support",
    body: "Premium branding, retail displays and campaigns that pull customers to your counter.",
  },
  {
    title: "Quality assurance",
    body: "Three-year warranties and low return rates protect your reputation as much as ours.",
  },
  {
    title: "Future expansion",
    body: "Fans today. Lighting, switches and smart electricals tomorrow — one partnership, a whole ecosystem.",
  },
];
