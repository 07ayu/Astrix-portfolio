"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ChipModel({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Tilt following cursor
    const targetRotX = -pointer.y * 0.45;
    const targetRotY = pointer.x * 0.55;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.08);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.08);

    // Idle breathing
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;

    if (core.current) {
      core.current.rotation.y += delta * 0.7;
    }
    if (ring.current) {
      ring.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFFFFF" />
      <pointLight position={[-4, -2, -3]} intensity={2.0} color="#6D5DFC" />
      <pointLight position={[0, 2, 2]} intensity={1.8} color="#A89BFF" />

      <group ref={group}>
        {/* Main Substrate Board */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.5, 0.08, 2.5]} />
          <meshStandardMaterial
            color="#0A0A0E"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Outer Gold/Violet Contact Pin Traces */}
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[2.65, 0.04, 2.65]} />
          <meshStandardMaterial
            color="#2A2147"
            emissive="#A89BFF"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Heat Spreader / Silicon Die Frame */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[1.5, 0.1, 1.5]} />
          <meshStandardMaterial
            color="#141022"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Polished Core Die Mirror */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1.1, 0.04, 1.1]} />
          <meshStandardMaterial
            color="#070707"
            emissive="#6D5DFC"
            emissiveIntensity={0.4}
            metalness={0.98}
            roughness={0.05}
          />
        </mesh>

        {/* Spinning Central Quantum Octahedron */}
        <mesh ref={core} position={[0, 0.35, 0]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#A89BFF"
            emissiveIntensity={2.2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Holographic Containment Ring */}
        <mesh ref={ring} position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#A89BFF"
            emissive="#A89BFF"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>
    </>
  );
}

export default function InteractiveChip() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReducedMotion) {
      setCanRender3D(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointer({ x, y });
  };

  const handleMouseLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  if (!canRender3D) {
    return (
      <div className="relative flex h-[380px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0E0E14]">
        <div className="h-32 w-32 rotate-45 border-2 border-[#A89BFF] bg-[#6D5DFC]/30 shadow-[0_0_40px_#6D5DFC]" />
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[380px] w-full cursor-grab overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0E]/80 backdrop-blur-xl transition-all duration-500 hover:border-[#6D5DFC]/50"
    >
      {/* Telemetry Tag */}
      <div className="pointer-events-none absolute top-4 left-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#A89BFF]">
          ASTRIX-S1 // ARCHITECTURE DIE
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 z-10 font-mono text-[9px] uppercase tracking-widest text-neutral-500">
        CURSOR_TILT: ACTIVE
      </div>

      <Canvas
        camera={{ position: [0, 2.2, 4.2], fov: 38 }}
        dpr={[1, 1.5]}
        className="h-full w-full"
      >
        <ChipModel pointer={pointer} />
      </Canvas>
    </div>
  );
}
