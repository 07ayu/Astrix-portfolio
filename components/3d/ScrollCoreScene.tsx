"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { ScrollTrigger } from "@/lib/gsap";

function Particles({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorViolet = new THREE.Color("#6D5DFC");
    const colorLavender = new THREE.Color("#A89BFF");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;

      const mixed = colorViolet.clone().lerp(colorLavender, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function MorphingCore({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const rootGroup = useRef<THREE.Group>(null);
  const coreMesh = useRef<THREE.Mesh>(null);
  const wireMesh = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const satelliteGroup = useRef<THREE.Group>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);

  const { pointer, camera } = useThree();

  // Materials
  const darkMetal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#08070F",
        metalness: 0.95,
        roughness: 0.15,
      }),
    []
  );

  const glowWire = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#6D5DFC",
        emissive: "#6D5DFC",
        emissiveIntensity: 1.4,
        wireframe: true,
      }),
    []
  );

  const ringMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#241D3B",
        metalness: 0.92,
        roughness: 0.12,
        emissive: "#6D5DFC",
        emissiveIntensity: 0.2,
      }),
    []
  );

  const nodeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#A89BFF",
        emissive: "#A89BFF",
        emissiveIntensity: 2.0,
      }),
    []
  );

  // 6 Satellite node positions (for 6 services)
  const nodeAngles = useMemo(() => [0, 1, 2, 3, 4, 5].map((i) => (i * Math.PI * 2) / 6), []);

  // Geometry for constellation lines connecting the 6 nodes
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const radius = 2.8;
    for (let i = 0; i < 6; i++) {
      const a1 = (i * Math.PI * 2) / 6;
      const a2 = (((i + 1) % 6) * Math.PI * 2) / 6;
      points.push(new THREE.Vector3(Math.cos(a1) * radius, Math.sin(a1) * radius, 0));
      points.push(new THREE.Vector3(Math.cos(a2) * radius, Math.sin(a2) * radius, 0));

      // Cross connections
      const a3 = (((i + 2) % 6) * Math.PI * 2) / 6;
      points.push(new THREE.Vector3(Math.cos(a1) * radius, Math.sin(a1) * radius, 0));
      points.push(new THREE.Vector3(Math.cos(a3) * radius, Math.sin(a3) * radius, 0));
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, []);

  const linesMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#6D5DFC",
        transparent: true,
        opacity: 0,
      }),
    []
  );

  useFrame((_, delta) => {
    const p = scrollProgress.current; // 0 to 1

    // 1. Continuous rotation base
    if (ring1.current) ring1.current.rotation.x += delta * 0.35;
    if (ring2.current) ring2.current.rotation.y += delta * 0.28;
    if (ring3.current) ring3.current.rotation.z += delta * 0.22;
    if (coreMesh.current) coreMesh.current.rotation.y += delta * 0.4;
    if (wireMesh.current) wireMesh.current.rotation.x -= delta * 0.25;

    // 2. Stage transitions driven by scroll progress p:
    // Stage 1: Hero (p: 0 - 0.22)
    // Stage 2: Services (p: 0.22 - 0.48)
    // Stage 3: Projects (p: 0.48 - 0.72)
    // Stage 4: Methodology (p: 0.72 - 0.88)
    // Stage 5: CTA/Footer (p: 0.88 - 1.0)

    if (rootGroup.current) {
      // Parallax mouse tilt
      const targetMouseX = (pointer.x * Math.PI) / 12;
      const targetMouseY = (-pointer.y * Math.PI) / 12;

      // Group Y rotation responds to scroll
      const targetRotY = p * Math.PI * 3.5 + targetMouseX;
      const targetRotX = p * Math.PI * 0.75 + targetMouseY;

      rootGroup.current.rotation.y = THREE.MathUtils.lerp(rootGroup.current.rotation.y, targetRotY, 0.06);
      rootGroup.current.rotation.x = THREE.MathUtils.lerp(rootGroup.current.rotation.x, targetRotX, 0.06);

      // Camera position morphing
      let targetCamX = 0;
      let targetCamY = 0;
      let targetCamZ = 6.2;

      if (p < 0.22) {
        // Hero: centered, slightly to the right for layout balance
        targetCamX = 0.8;
        targetCamY = 0;
        targetCamZ = 6.2;
      } else if (p < 0.48) {
        // Services: centered, pulled back to see all 6 orbiting nodes
        targetCamX = 0;
        targetCamY = -0.3;
        targetCamZ = 7.4;
      } else if (p < 0.72) {
        // Projects: camera drifts sideways to left, constellation on right
        targetCamX = -1.6;
        targetCamY = 0.2;
        targetCamZ = 6.8;
      } else if (p < 0.88) {
        // Methodology: centered pipeline alignment
        targetCamX = 0;
        targetCamY = 0.5;
        targetCamZ = 6.0;
      } else {
        // CTA / Footer: pulled in close, centered
        targetCamX = 0;
        targetCamY = -0.8;
        targetCamZ = 5.2;
      }

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.05);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.05);

      // Scale & dispersion of satellite nodes
      if (satelliteGroup.current) {
        let nodeRadius = 1.6; // Hero
        if (p >= 0.22 && p < 0.48) nodeRadius = 3.2; // Services explosion
        else if (p >= 0.48 && p < 0.72) nodeRadius = 2.8; // Projects constellation
        else if (p >= 0.72 && p < 0.88) nodeRadius = 2.2; // Methodology alignment
        else if (p >= 0.88) nodeRadius = 0.4; // Collapse inward

        satelliteGroup.current.children.forEach((child, i) => {
          const angle = nodeAngles[i] + p * Math.PI * 2;
          const targetX = Math.cos(angle) * nodeRadius;
          const targetY = Math.sin(angle) * nodeRadius;
          const targetZ = Math.sin(angle * 2) * 0.6;

          child.position.x = THREE.MathUtils.lerp(child.position.x, targetX, 0.06);
          child.position.y = THREE.MathUtils.lerp(child.position.y, targetY, 0.06);
          child.position.z = THREE.MathUtils.lerp(child.position.z, targetZ, 0.06);
        });
      }

      // Constellation lines opacity (visible primarily in Projects stage)
      if (linesMesh.current) {
        const isProjectStage = p >= 0.42 && p <= 0.76;
        const targetOpacity = isProjectStage ? 0.35 : 0;
        linesMaterial.opacity = THREE.MathUtils.lerp(linesMaterial.opacity, targetOpacity, 0.05);
      }

      // Rings pipeline alignment during Methodology
      if (ring1.current && ring2.current && ring3.current) {
        if (p >= 0.72 && p < 0.88) {
          // Align along straight pipeline axis
          ring1.current.position.y = THREE.MathUtils.lerp(ring1.current.position.y, -1.2, 0.05);
          ring2.current.position.y = THREE.MathUtils.lerp(ring2.current.position.y, 0, 0.05);
          ring3.current.position.y = THREE.MathUtils.lerp(ring3.current.position.y, 1.2, 0.05);
        } else {
          ring1.current.position.y = THREE.MathUtils.lerp(ring1.current.position.y, 0, 0.05);
          ring2.current.position.y = THREE.MathUtils.lerp(ring2.current.position.y, 0, 0.05);
          ring3.current.position.y = THREE.MathUtils.lerp(ring3.current.position.y, 0, 0.05);
        }
      }
    }
  });

  return (
    <group ref={rootGroup}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Central Core Octahedron */}
        <mesh ref={coreMesh} material={darkMetal}>
          <octahedronGeometry args={[1.25, 0]} />
        </mesh>

        {/* Inner Luminous Wireframe Lattice */}
        <mesh ref={wireMesh} material={glowWire}>
          <icosahedronGeometry args={[1.36, 1]} />
        </mesh>

        {/* 3 Concentric Precision Orbital Rings */}
        <mesh ref={ring1} material={ringMaterial}>
          <torusGeometry args={[1.9, 0.025, 16, 100]} />
        </mesh>
        <mesh ref={ring2} material={ringMaterial} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
        </mesh>
        <mesh ref={ring3} material={ringMaterial} rotation={[0, Math.PI / 4, Math.PI / 3]}>
          <torusGeometry args={[2.5, 0.018, 16, 100]} />
        </mesh>

        {/* 6 Orbiting Satellite Nodes for the 6 services */}
        <group ref={satelliteGroup}>
          {nodeAngles.map((_, i) => (
            <mesh key={i} material={nodeMaterial} position={[Math.cos(i) * 1.6, Math.sin(i) * 1.6, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
            </mesh>
          ))}
        </group>

        {/* Constellation lines */}
        <primitive object={new THREE.LineSegments(lineGeometry, linesMaterial)} ref={linesMesh} />
      </Float>
    </group>
  );
}

export default function ScrollCoreScene() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <color attach="background" args={["#070707"]} />
      <PerformanceMonitor />
      <AdaptiveDpr pixelated={false} />

      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 6]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-4, -3, 3]} color="#6D5DFC" intensity={4.0} distance={15} />
      <pointLight position={[3, -2, -3]} color="#A89BFF" intensity={2.5} distance={12} />

      {/* Background Starfield */}
      <Particles count={700} />

      {/* Morphing Architecture Core */}
      <MorphingCore scrollProgress={scrollProgress} />

      {/* Postprocessing Bloom */}
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.25}
          luminanceSmoothing={0.9}
          intensity={0.7}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}
