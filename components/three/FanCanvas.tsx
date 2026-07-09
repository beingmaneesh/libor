"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer, PresentationControls } from "@react-three/drei";
import { useInView, useReducedMotion } from "framer-motion";
import { FanModel } from "./FanModel";

function SceneLights({ rim = "#52b44b" }: { rim?: string }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 6]} intensity={1.6} />
      <directionalLight position={[-5, -2, 3]} intensity={0.4} color="#9db8ff" />
      <pointLight position={[0, -3, -4]} intensity={6} color={rim} />
      <Environment resolution={128}>
        <Lightformer intensity={1.4} position={[0, 4, 6]} scale={[10, 4, 1]} />
        <Lightformer intensity={0.7} position={[-6, 0, 2]} scale={[3, 8, 1]} color="#dbe7ff" />
        <Lightformer intensity={0.5} position={[6, -2, 2]} scale={[3, 8, 1]} />
      </Environment>
    </>
  );
}

/** Hero fan: slow rotation, gentle float, pointer parallax. */
export function HeroFanCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap, { margin: "200px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div ref={wrap} className="h-full w-full" aria-hidden="true">
      {mounted && (
        <Canvas
          dpr={[1, 1.75]}
          frameloop={inView && !reduced ? "always" : "demand"}
          camera={{ position: [0, 0, 5.4], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <SceneLights />
            <Float
              speed={reduced ? 0 : 1.4}
              rotationIntensity={0.12}
              floatIntensity={0.5}
            >
              <FanModel spinSpeed={reduced ? 0 : 0.4} />
            </Float>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

/** Product-page fan: drag to explore 360°. */
export function ProductFanCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap, { margin: "200px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={wrap}
      className="h-full w-full cursor-grab active:cursor-grabbing"
      role="img"
      aria-label="Interactive 3D view of the Kamet 150mm exhaust fan — drag to rotate"
    >
      {mounted && (
        <Canvas
          dpr={[1, 1.75]}
          frameloop={inView && !reduced ? "always" : "demand"}
          camera={{ position: [0, 0, 5.6], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <SceneLights rim="#123d8a" />
            <PresentationControls
              global
              snap
              speed={1.4}
              polar={[-0.5, 0.5]}
              azimuth={[-1.2, 1.2]}
            >
              <FanModel spinSpeed={reduced ? 0 : 0.9} followPointer={false} />
            </PresentationControls>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
