"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  isFocused: boolean;
  isTyping: boolean;
  isSuccess: boolean;
}

function ReactiveCore({ isFocused, isTyping, isSuccess }: SceneProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Success burst scale tracker
  const burstScale = useRef(1);

  // Generate 400 particle points
  const [particlePositions, particleOriginals] = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.4 + Math.random() * 1.8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return [pos, orig];
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Pulse multiplier
    const speed = isSuccess ? 4.5 : isTyping ? 3.0 : isFocused ? 2.0 : 1.0;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5 * speed;
      coreRef.current.rotation.x += delta * 0.3 * speed;

      // Pulse scale
      let baseScale = 1.0 + Math.sin(time * (isFocused ? 5.0 : 2.0)) * 0.08;
      if (isSuccess) {
        burstScale.current = THREE.MathUtils.lerp(burstScale.current, 1.8, 0.15);
      } else {
        burstScale.current = THREE.MathUtils.lerp(burstScale.current, 1.0, 0.08);
      }
      const finalScale = baseScale * burstScale.current;
      coreRef.current.scale.set(finalScale, finalScale, finalScale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.6 * speed;
      ring1Ref.current.rotation.y += delta * 0.4 * speed;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5 * speed;
      ring2Ref.current.rotation.z += delta * 0.7 * speed;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.8 * speed;
    }

    // Particle dynamics: burst on success, vibrate on typing
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const explosion = isSuccess ? 2.2 : isTyping ? 1.15 : 1.0;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = THREE.MathUtils.lerp(
          positions[i],
          particleOriginals[i] * explosion + Math.sin(time * 3 + i) * (isTyping ? 0.05 : 0.01),
          0.1
        );
        positions[i + 1] = THREE.MathUtils.lerp(
          positions[i + 1],
          particleOriginals[i + 1] * explosion + Math.cos(time * 3 + i) * (isTyping ? 0.05 : 0.01),
          0.1
        );
        positions[i + 2] = THREE.MathUtils.lerp(
          positions[i + 2],
          particleOriginals[i + 2] * explosion,
          0.1
        );
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight
        position={[3, 3, 3]}
        intensity={isSuccess ? 5.0 : isFocused ? 3.0 : 2.0}
        color="#A89BFF"
      />
      <pointLight position={[-3, -3, -3]} intensity={2.0} color="#6D5DFC" />

      {/* Central Quantum Octahedron */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.75]} />
        <meshStandardMaterial
          color="#161226"
          emissive={isSuccess ? "#A89BFF" : "#6D5DFC"}
          emissiveIntensity={isSuccess ? 3.5 : isFocused ? 2.4 : 1.2}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Signal Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.35, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#A89BFF"
          emissive="#A89BFF"
          emissiveIntensity={isSuccess ? 3.0 : isTyping ? 2.2 : 1.2}
        />
      </mesh>

      {/* Orbital Signal Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#6D5DFC"
          emissive="#6D5DFC"
          emissiveIntensity={isSuccess ? 2.5 : isTyping ? 1.8 : 0.8}
        />
      </mesh>

      {/* Orbital Signal Ring 3 */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2.0, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#A89BFF"
          emissive="#A89BFF"
          emissiveIntensity={isSuccess ? 2.8 : 0.6}
        />
      </mesh>

      {/* Particles Aura */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color={isSuccess ? "#FFFFFF" : "#A89BFF"}
          transparent
          opacity={0.8}
        />
      </points>
    </>
  );
}

export default function ReactiveContactScene(props: SceneProps) {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReducedMotion) {
      setCanRender3D(true);
    }
  }, []);

  if (!canRender3D) {
    return (
      <div className="relative flex h-[280px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A0E]">
        <div className="h-32 w-32 rounded-full border border-dashed border-[#6D5DFC]/40 animate-[spin_20s_linear_infinite]" />
        <div className="absolute h-10 w-10 rotate-45 border-2 border-[#A89BFF] bg-[#6D5DFC]/40" />
      </div>
    );
  }

  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08080C]/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute top-3 left-4 z-10 flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            props.isSuccess
              ? "bg-emerald-400"
              : props.isTyping
              ? "bg-[#A89BFF] animate-ping"
              : props.isFocused
              ? "bg-[#6D5DFC] animate-pulse"
              : "bg-neutral-600"
          }`}
        />
        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
          {props.isSuccess
            ? "TRANSMISSION_CONFIRMED"
            : props.isTyping
            ? "SIGNAL_RESONATING // INPUT"
            : props.isFocused
            ? "BEACON_LINK // ACTIVE"
            : "BEACON_STANDBY"}
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, 1.5]}
        className="h-full w-full"
      >
        <ReactiveCore {...props} />
      </Canvas>
    </div>
  );
}
