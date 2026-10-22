"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  isHovered: boolean;
}

// 1. WEB: Wireframe globe with orbiting rings and satellites
export function WebModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const speed = isHovered ? 2.5 : 1.0;
    group.current.rotation.y += delta * 0.4 * speed;
    if (ring1.current) ring1.current.rotation.x += delta * 0.5 * speed;
    if (ring2.current) ring2.current.rotation.z += delta * 0.6 * speed;

    const targetScale = isHovered ? 1.15 : 1.0;
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3.8]} fov={40} />
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={2.0} color="#A89BFF" />
      <group ref={group}>
        {/* Wireframe Globe */}
        <mesh>
          <sphereGeometry args={[0.9, 16, 16]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.8 : 0.9}
            wireframe
          />
        </mesh>
        {/* Solid Inner Core */}
        <mesh>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial
            color="#0E0E12"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 1.4 : 0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        {/* Orbital Ring 1 */}
        <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.25, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#A89BFF"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 2.0 : 0.8}
          />
        </mesh>
        {/* Orbital Ring 2 */}
        <mesh ref={ring2} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[1.4, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.6 : 0.6}
          />
        </mesh>
      </group>
    </>
  );
}

// 2. APP: Tilting Phone with floating holographic UI card layers
export function AppModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const card1 = useRef<THREE.Mesh>(null);
  const card2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetRotY = isHovered ? -0.35 : 0.2;
    const targetRotX = isHovered ? 0.25 : 0.1;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.08);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.08);

    // Floating UI cards explode outward on hover
    if (card1.current) {
      const targetZ = isHovered ? 0.35 : 0.08;
      card1.current.position.z = THREE.MathUtils.lerp(card1.current.position.z, targetZ, 0.1);
    }
    if (card2.current) {
      const targetZ = isHovered ? 0.55 : 0.12;
      card2.current.position.z = THREE.MathUtils.lerp(card2.current.position.z, targetZ, 0.1);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.0]} fov={38} />
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 3, 4]} intensity={2.2} color="#A89BFF" />
      <group ref={group}>
        {/* Phone Chassis */}
        <mesh>
          <boxGeometry args={[1.2, 2.2, 0.12]} />
          <meshStandardMaterial color="#0A0A0E" roughness={0.15} metalness={0.95} />
        </mesh>
        {/* Bezel Ring */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[1.22, 2.22, 0.1]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.5 : 0.6}
            wireframe
          />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[1.05, 2.0]} />
          <meshStandardMaterial
            color="#141126"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 0.9 : 0.4}
            roughness={0.2}
          />
        </mesh>
        {/* Floating UI Card 1 */}
        <mesh ref={card1} position={[0, 0.3, 0.08]}>
          <planeGeometry args={[0.85, 0.5]} />
          <meshStandardMaterial
            color="#241D3B"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 1.6 : 0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Floating UI Card 2 */}
        <mesh ref={card2} position={[0, -0.4, 0.12]}>
          <planeGeometry args={[0.85, 0.6]} />
          <meshStandardMaterial
            color="#1F1A33"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.8 : 0.7}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </>
  );
}

// 3. DESKTOP: Sleek monitor display with floating cascading window panes
export function DesktopModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const winLeft = useRef<THREE.Mesh>(null);
  const winRight = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const targetRotY = isHovered ? 0.35 : -0.15;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.08);

    if (winLeft.current) {
      const targetX = isHovered ? -0.7 : -0.4;
      const targetZ = isHovered ? 0.45 : 0.15;
      winLeft.current.position.x = THREE.MathUtils.lerp(winLeft.current.position.x, targetX, 0.08);
      winLeft.current.position.z = THREE.MathUtils.lerp(winLeft.current.position.z, targetZ, 0.08);
    }
    if (winRight.current) {
      const targetX = isHovered ? 0.75 : 0.4;
      const targetZ = isHovered ? 0.6 : 0.2;
      winRight.current.position.x = THREE.MathUtils.lerp(winRight.current.position.x, targetX, 0.08);
      winRight.current.position.z = THREE.MathUtils.lerp(winRight.current.position.z, targetZ, 0.08);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={38} />
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 2, 4]} intensity={2.0} color="#A89BFF" />
      <group ref={group}>
        {/* Monitor Screen Frame */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[2.2, 1.35, 0.08]} />
          <meshStandardMaterial color="#0A0A0E" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Stand Base */}
        <mesh position={[0, -0.65, 0]}>
          <boxGeometry args={[0.15, 0.5, 0.08]} />
          <meshStandardMaterial color="#1A1829" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <boxGeometry args={[0.9, 0.05, 0.5]} />
          <meshStandardMaterial color="#1A1829" metalness={0.8} />
        </mesh>
        {/* Main Display Glow */}
        <mesh position={[0, 0.2, 0.05]}>
          <planeGeometry args={[2.05, 1.2]} />
          <meshStandardMaterial
            color="#0D0B18"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 0.8 : 0.35}
          />
        </mesh>
        {/* Floating Window Left */}
        <mesh ref={winLeft} position={[-0.4, 0.3, 0.15]} rotation={[0, 0.1, 0]}>
          <planeGeometry args={[0.95, 0.75]} />
          <meshStandardMaterial
            color="#201A38"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 1.5 : 0.7}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Floating Window Right */}
        <mesh ref={winRight} position={[0.4, 0.05, 0.2]} rotation={[0, -0.1, 0]}>
          <planeGeometry args={[1.0, 0.8]} />
          <meshStandardMaterial
            color="#18132B"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.8 : 0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </>
  );
}

// 4. SOFTWARE: Stacked architectural layers separating on hover
export function SoftwareModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const layer1 = useRef<THREE.Mesh>(null);
  const layer2 = useRef<THREE.Mesh>(null);
  const layer3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.4;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.45, 0.05);

    // Separating layers on hover
    const gap = isHovered ? 0.6 : 0.25;
    if (layer1.current) {
      layer1.current.position.y = THREE.MathUtils.lerp(layer1.current.position.y, gap, 0.08);
    }
    if (layer3.current) {
      layer3.current.position.y = THREE.MathUtils.lerp(layer3.current.position.y, -gap, 0.08);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.0]} fov={38} />
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 4, 3]} intensity={2.0} color="#A89BFF" />
      <group ref={group}>
        {/* Layer 1 (Top Plate) */}
        <mesh ref={layer1} position={[0, 0.25, 0]}>
          <boxGeometry args={[1.6, 0.1, 1.6]} />
          <meshStandardMaterial
            color="#2A2147"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 1.5 : 0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Layer 2 (Middle Core Plate) */}
        <mesh ref={layer2} position={[0, 0, 0]}>
          <boxGeometry args={[1.4, 0.1, 1.4]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 2.0 : 1.0}
            wireframe
          />
        </mesh>
        {/* Layer 3 (Bottom Foundation Plate) */}
        <mesh ref={layer3} position={[0, -0.25, 0]}>
          <boxGeometry args={[1.6, 0.1, 1.6]} />
          <meshStandardMaterial
            color="#141024"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.2 : 0.4}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* Central Glowing Energy Pillar */}
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 1.4, 16]} />
          <meshStandardMaterial
            color="#A89BFF"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 2.5 : 1.2}
          />
        </mesh>
      </group>
    </>
  );
}

// 5. AR: Wireframe holographic cube with scanning LiDAR laser line
export function ARModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const scanPlane = useRef<THREE.Mesh>(null);
  const innerTarget = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const speed = isHovered ? 2.0 : 1.0;
    group.current.rotation.y += delta * 0.4 * speed;
    group.current.rotation.x += delta * 0.25 * speed;

    if (innerTarget.current) {
      innerTarget.current.rotation.y -= delta * 0.8 * speed;
    }

    // Scanning LiDAR line sweeps vertically up and down
    if (scanPlane.current) {
      scanPlane.current.position.y = Math.sin(state.clock.elapsedTime * (isHovered ? 4.0 : 2.5)) * 0.65;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3.8]} fov={38} />
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={2.2} color="#A89BFF" />
      <group ref={group}>
        {/* Outer Bounding Wireframe Cube */}
        <mesh>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial
            color="#6D5DFC"
            emissive="#6D5DFC"
            emissiveIntensity={isHovered ? 1.6 : 0.7}
            wireframe
          />
        </mesh>
        {/* Scanning Laser Line */}
        <mesh ref={scanPlane} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.38, 1.38]} />
          <meshStandardMaterial
            color="#A89BFF"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 2.5 : 1.5}
            transparent
            opacity={0.65}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Inner Holographic Crystal Target */}
        <mesh ref={innerTarget}>
          <octahedronGeometry args={[0.45]} />
          <meshStandardMaterial
            color="#2A2147"
            emissive="#A89BFF"
            emissiveIntensity={isHovered ? 2.2 : 1.0}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </>
  );
}

// 6. AI: Neural network graph with glowing node packets and edge pulses
export function AIModel({ isHovered }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);

  // Define 3-layer neural network node positions: [x, y, z]
  const nodes = useMemo(
    () => [
      // Layer 1 (Input)
      [-1.1, 0.6, 0],
      [-1.1, -0.6, 0],
      // Layer 2 (Hidden)
      [0, 0.8, 0.2],
      [0, 0, -0.2],
      [0, -0.8, 0.2],
      // Layer 3 (Output)
      [1.1, 0.4, 0],
      [1.1, -0.4, 0],
    ],
    []
  );

  // Generate edges connecting layer 1 -> layer 2 -> layer 3
  const edgePoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const layer1 = [nodes[0], nodes[1]];
    const layer2 = [nodes[2], nodes[3], nodes[4]];
    const layer3 = [nodes[5], nodes[6]];

    layer1.forEach((n1) => {
      layer2.forEach((n2) => {
        pts.push(new THREE.Vector3(...(n1 as [number, number, number])));
        pts.push(new THREE.Vector3(...(n2 as [number, number, number])));
      });
    });

    layer2.forEach((n2) => {
      layer3.forEach((n3) => {
        pts.push(new THREE.Vector3(...(n2 as [number, number, number])));
        pts.push(new THREE.Vector3(...(n3 as [number, number, number])));
      });
    });

    return pts;
  }, [nodes]);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(edgePoints), [edgePoints]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const speed = isHovered ? 2.0 : 0.8;
    group.current.rotation.y += delta * 0.3 * speed;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;

    // Pulse nodes
    if (nodesRef.current) {
      nodesRef.current.children.forEach((child, i) => {
        const pulse = 1.0 + Math.sin(state.clock.elapsedTime * 3 + i) * (isHovered ? 0.35 : 0.15);
        child.scale.set(pulse, pulse, pulse);
      });
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3.8]} fov={38} />
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 3, 3]} intensity={2.2} color="#A89BFF" />
      <group ref={group}>
        {/* Synapse Connection Lines */}
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial
            color="#6D5DFC"
            transparent
            opacity={isHovered ? 0.8 : 0.45}
            linewidth={1}
          />
        </lineSegments>

        {/* Neural Nodes */}
        <group ref={nodesRef}>
          {nodes.map((pos, idx) => (
            <mesh key={idx} position={pos as [number, number, number]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color="#A89BFF"
                emissive="#A89BFF"
                emissiveIntensity={isHovered ? 2.5 : 1.4}
              />
            </mesh>
          ))}
        </group>
      </group>
    </>
  );
}
