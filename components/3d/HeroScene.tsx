"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function QuantumCore() {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const { pointer } = useThree();

  // Subtle materials
  const darkMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0c0a14",
        metalness: 0.92,
        roughness: 0.18,
      }),
    []
  );

  const purpleGlowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#6D5DFC",
        emissive: "#6D5DFC",
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.2,
        wireframe: true,
      }),
    []
  );

  const ringMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#262238",
        metalness: 0.95,
        roughness: 0.1,
      }),
    []
  );

  useFrame((_, delta) => {
    // Gentle continuous rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.25;
      ring1Ref.current.rotation.y += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.2;
      ring2Ref.current.rotation.z += delta * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.15;
      ring3Ref.current.rotation.z -= delta * 0.22;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.3;
      innerRef.current.rotation.x += delta * 0.15;
    }

    // Smooth subtle mouse parallax response
    if (coreRef.current) {
      const targetX = (pointer.x * Math.PI) / 10;
      const targetY = (-pointer.y * Math.PI) / 10;
      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        targetX,
        0.05
      );
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        targetY,
        0.05
      );
    }
  });

  return (
    <group ref={coreRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Central Geometric Core */}
        <mesh ref={innerRef} material={darkMetalMaterial}>
          <octahedronGeometry args={[1.3, 0]} />
        </mesh>

        {/* Inner Luminous Wireframe Lattice */}
        <mesh material={purpleGlowMaterial}>
          <icosahedronGeometry args={[1.42, 1]} />
        </mesh>

        {/* Orbiting Orbital Precision Rings */}
        <mesh ref={ring1Ref} material={ringMaterial}>
          <torusGeometry args={[2.0, 0.03, 16, 100]} />
        </mesh>

        <mesh ref={ring2Ref} material={ringMaterial} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.3, 0.025, 16, 100]} />
        </mesh>

        <mesh ref={ring3Ref} material={ringMaterial} rotation={[0, Math.PI / 4, Math.PI / 3]}>
          <torusGeometry args={[2.6, 0.02, 16, 100]} />
        </mesh>

        {/* Node Beacons */}
        <mesh position={[2.0, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#A89BFF" />
        </mesh>

        <mesh position={[-1.6, 1.2, 0.4]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#6D5DFC" />
        </mesh>

        <mesh position={[0.5, -1.9, 0.8]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#c3c0ff" />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="h-full w-full"
    >
      {/* Studio Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, -3, 2]} color="#6D5DFC" intensity={3.5} distance={12} />
      <pointLight position={[3, -2, -3]} color="#A89BFF" intensity={2.0} distance={10} />
      <directionalLight position={[0, -5, -2]} intensity={0.8} color="#20153d" />

      {/* Interactive 3D Model */}
      <QuantumCore />
    </Canvas>
  );
}
