"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const BLADES = 5;

/**
 * Procedural Kamet 150mm exhaust fan: white polymer frame, five pitched
 * blades, navy back shroud and the red LIBOR hub badge.
 */
export function FanModel({
  spinSpeed = 0.35,
  followPointer = true,
}: {
  spinSpeed?: number;
  followPointer?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const rotor = useRef<THREE.Group>(null);

  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f7fafc",
        roughness: 0.32,
        metalness: 0.02,
        clearcoat: 0.6,
        clearcoatRoughness: 0.35,
      }),
    []
  );
  const bladeMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        roughness: 0.25,
        metalness: 0.03,
        clearcoat: 0.8,
        clearcoatRoughness: 0.25,
      }),
    []
  );
  const navyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#081d49",
        roughness: 0.55,
        metalness: 0.15,
      }),
    []
  );
  const redMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f1272a",
        roughness: 0.3,
        clearcoat: 0.7,
      }),
    []
  );

  useFrame((state, delta) => {
    if (rotor.current) rotor.current.rotation.z -= spinSpeed * delta;
    if (group.current && followPointer) {
      const { x, y } = state.pointer;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        x * 0.35,
        0.04
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -y * 0.25,
        0.04
      );
    }
  });

  return (
    <group ref={group}>
      {/* back shroud */}
      <mesh position={[0, 0, -0.28]} rotation={[Math.PI / 2, 0, 0]} material={navyMat}>
        <cylinderGeometry args={[1.42, 1.3, 0.22, 64]} />
      </mesh>
      {/* outer frame ring */}
      <mesh material={bodyMat}>
        <torusGeometry args={[1.5, 0.16, 32, 96]} />
      </mesh>
      {/* front bezel */}
      <mesh position={[0, 0, 0.06]} material={bodyMat}>
        <torusGeometry args={[1.18, 0.055, 24, 96]} />
      </mesh>

      {/* rotor: blades + hub */}
      <group ref={rotor}>
        {Array.from({ length: BLADES }).map((_, i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI * 2) / BLADES]}>
            <group position={[0.72, 0, 0]} rotation={[0, -0.5, 0.12]}>
              <RoundedBox
                args={[1.02, 0.46, 0.05]}
                radius={0.024}
                smoothness={3}
                material={bladeMat}
              />
            </group>
          </group>
        ))}
        {/* hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]} material={bodyMat}>
          <cylinderGeometry args={[0.34, 0.38, 0.24, 48]} />
        </mesh>
        {/* red LIBOR badge */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.23]} material={redMat}>
          <cylinderGeometry args={[0.2, 0.2, 0.04, 48]} />
        </mesh>
      </group>

      {/* mounting studs on the frame */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          material={navyMat}
          rotation={[Math.PI / 2, 0, 0]}
          position={[
            Math.cos((i * Math.PI) / 2 + Math.PI / 4) * 1.5,
            Math.sin((i * Math.PI) / 2 + Math.PI / 4) * 1.5,
            0.02,
          ]}
        >
          <cylinderGeometry args={[0.06, 0.06, 0.1, 24]} />
        </mesh>
      ))}
    </group>
  );
}
