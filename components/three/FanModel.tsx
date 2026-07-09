"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { LOGO_SVG_STRING, LOGO_W } from "@/components/ui/logoPaths";

// world width of the small wordmark on the centre cap
const LOGO_WIDTH = 0.6;
const LOGO_SCALE = LOGO_WIDTH / LOGO_W;

/** LIBOR wordmark extruded from the official SVG, centred at the origin. */
function useLogoGeometry() {
  return useMemo(() => {
    const { paths } = new SVGLoader().parse(LOGO_SVG_STRING);
    const geometries: THREE.BufferGeometry[] = [];
    for (const path of paths) {
      for (const shape of SVGLoader.createShapes(path)) {
        geometries.push(
          new THREE.ExtrudeGeometry(shape, {
            depth: 8,
            bevelEnabled: false,
            curveSegments: 8,
          })
        );
      }
    }
    const merged = mergeGeometries(geometries);
    merged.center();
    return merged;
  }, []);
}

const BLADES = 7;
const OPENING_R = 1.32; // radius of the circular grille opening
const PLATE = 3.6; // square faceplate side

/** Square faceplate with a circular cut-out, like the real Kamet body. */
function useFacePlateGeometry() {
  return useMemo(() => {
    const s = PLATE / 2;
    const r = 0.2;
    const shape = new THREE.Shape();
    shape.moveTo(-s + r, -s);
    shape.lineTo(s - r, -s);
    shape.quadraticCurveTo(s, -s, s, -s + r);
    shape.lineTo(s, s - r);
    shape.quadraticCurveTo(s, s, s - r, s);
    shape.lineTo(-s + r, s);
    shape.quadraticCurveTo(-s, s, -s, s - r);
    shape.lineTo(-s, -s + r);
    shape.quadraticCurveTo(-s, -s, -s + r, -s);

    const hole = new THREE.Path();
    hole.absarc(0, 0, OPENING_R, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
      curveSegments: 48,
    });
  }, []);
}

// horizontal louver bars: width follows the chord of the circular opening
const LOUVER_YS = [-1.15, -0.92, -0.69, -0.46, -0.23, 0, 0.23, 0.46, 0.69, 0.92, 1.15];
const chord = (y: number) => 2 * Math.sqrt(Math.max(OPENING_R ** 2 - y * y, 0)) * 0.97;

/**
 * Procedural Kamet 150mm exhaust fan, matched to the product photo:
 * square white polymer body, louvered front grille with a rounded-square
 * centre cap, and seven cream blades. Only the blades rotate.
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
  const facePlate = useFacePlateGeometry();
  const logoGeometry = useLogoGeometry();

  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f6f6f2",
        roughness: 0.34,
        metalness: 0.02,
        clearcoat: 0.55,
        clearcoatRoughness: 0.35,
      }),
    []
  );
  const louverMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#fbfbf8",
        roughness: 0.3,
        clearcoat: 0.5,
        clearcoatRoughness: 0.35,
      }),
    []
  );
  const bladeMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#eee3c0",
        roughness: 0.42,
        metalness: 0.02,
        clearcoat: 0.35,
        clearcoatRoughness: 0.5,
      }),
    []
  );
  const drumMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#cfc8b2",
        roughness: 0.75,
        metalness: 0.02,
        side: THREE.BackSide,
      }),
    []
  );
  const redMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#ed1c24",
        roughness: 0.3,
        clearcoat: 0.7,
        // SVG shapes can wind either way once flipped — render both faces
        side: THREE.DoubleSide,
      }),
    []
  );

  useFrame((state, delta) => {
    // only the blade rotor spins — body, grille and cap stay still
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
      {/* square faceplate with circular opening */}
      <mesh geometry={facePlate} material={bodyMat} />

      {/* inner drum (seen through the grille) */}
      <mesh position={[0, 0, -0.18]} rotation={[Math.PI / 2, 0, 0]} material={drumMat}>
        <cylinderGeometry args={[OPENING_R, OPENING_R * 0.92, 0.72, 64, 1, true]} />
      </mesh>

      {/* square back of the housing */}
      <RoundedBox
        args={[PLATE * 0.92, PLATE * 0.92, 0.12]}
        radius={0.06}
        smoothness={2}
        position={[0, 0, -0.58]}
        material={bodyMat}
      />

      {/* rotor: seven cream blades + rear hub (the only moving part) */}
      <group ref={rotor} position={[0, 0, -0.2]}>
        {Array.from({ length: BLADES }).map((_, i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI * 2) / BLADES]}>
            <group position={[0.68, 0, 0]} rotation={[0, -0.48, 0.1]}>
              <RoundedBox
                args={[0.95, 0.52, 0.045]}
                radius={0.024}
                smoothness={3}
                material={bladeMat}
              />
            </group>
          </group>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={bladeMat}>
          <cylinderGeometry args={[0.4, 0.44, 0.3, 40]} />
        </mesh>
      </group>

      {/* fixed louvered grille across the opening */}
      <group position={[0, 0, 0.06]}>
        {LOUVER_YS.map((y) => (
          <mesh key={y} position={[0, y, 0]} material={louverMat}>
            <boxGeometry args={[chord(y), 0.06, 0.05]} />
          </mesh>
        ))}
        {/* central vertical spine */}
        <mesh material={louverMat}>
          <boxGeometry args={[0.07, OPENING_R * 2 * 0.99, 0.05]} />
        </mesh>
      </group>

      {/* fixed rounded-square centre cap */}
      <RoundedBox
        args={[1.12, 1.12, 0.1]}
        radius={0.22}
        smoothness={4}
        position={[0, 0, 0.12]}
        material={bodyMat}
      />
      {/* small red LIBOR wordmark on the cap (SVG y-axis points down — flip) */}
      <mesh
        geometry={logoGeometry}
        material={redMat}
        scale={[LOGO_SCALE, -LOGO_SCALE, LOGO_SCALE]}
        position={[0, 0, 0.185]}
      />
    </group>
  );
}
