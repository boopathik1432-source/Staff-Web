"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Bubble() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.18;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
      <Sphere ref={mesh} args={[1.3, 64, 64]} scale={1.05}>
        <MeshDistortMaterial color="#d8f36a" roughness={0.22} metalness={0.1} distort={0.27} speed={1.6} />
      </Sphere>
    </Float>
  );
}

export function Orb() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 36 }} dpr={[1, 1.5]}>
      <ambientLight intensity={2} />
      <directionalLight position={[3, 4, 5]} intensity={3} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={4} color="#9ab852" />
      <Bubble />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
