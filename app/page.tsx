import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Vision } from "@/components/home/Vision";
import { Mission } from "@/components/home/Mission";
import { Purpose } from "@/components/home/Purpose";
import { Promise as BrandPromise } from "@/components/home/Promise";
import { FirstProduct } from "@/components/home/FirstProduct";
import { WhyFan } from "@/components/home/WhyFan";
import { Sustainability } from "@/components/home/Sustainability";
import { Dealers } from "@/components/home/Dealers";
import { FutureVision } from "@/components/home/FutureVision";
import { Closing } from "@/components/home/Closing";

export const metadata: Metadata = {
  title: "LIBOR India — Let's Live for Generations",
  description:
    "India's first sustainability-driven electrical distribution ecosystem. One brand purpose: making every electrical purchase a better choice — for people, business and the planet.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Vision />
      <Mission />
      <Purpose />
      <BrandPromise />
      <FirstProduct />
      <WhyFan />
      <Sustainability />
      <Dealers />
      <FutureVision />
      <Closing />
    </>
  );
}
