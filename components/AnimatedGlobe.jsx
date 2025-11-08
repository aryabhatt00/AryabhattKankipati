// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function GiantGlobe({ color }) {
  const group = useRef();

  // 🌐 Generate thousands of interconnected arcs
  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 300; i++) {
      const a1 = Math.random() * Math.PI * 2;
      const b1 = Math.random() * Math.PI;
      const a2 = a1 + (Math.random() - 0.5) * 0.6;
      const b2 = b1 + (Math.random() - 0.5) * 0.6;
      const r = 5.0;
      const p1 = new THREE.Vector3(
        r * Math.sin(b1) * Math.cos(a1),
        r * Math.sin(b1) * Math.sin(a1),
        r * Math.cos(b1)
      );
      const p2 = new THREE.Vector3(
        r * Math.sin(b2) * Math.cos(a2),
        r * Math.sin(b2) * Math.sin(a2),
        r * Math.cos(b2)
      );
      arr.push([p1, p2]);
    }
    return arr;
  }, []);

  useFrame((state) => {
    group.current.rotation.y += 0.0008;
    group.current.rotation.x += 0.0004;
  });

  return (
    <group ref={group}>
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color={color}
          transparent
          opacity={0.25}
          lineWidth={0.5}
        />
      ))}
    </group>
  );
}

export default function AnimatedGlobe({ section = "about" }) {
  const colors = {
    about: "#6366f1",
    tech: "#a855f7",
    education: "#ec4899",
    experience: "#06b6d4",
    projects: "#facc15",
    contact: "#22c55e",
  };

  const color = colors[section] || "#818cf8";

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* 🌀 3D Globe */}
      <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }}>

        <motion.group
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 30, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <GiantGlobe color={color} />
        </motion.group>
        <ambientLight intensity={2.2} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
      </Canvas>

      {/* 🌈 Layered Gradient Aura for Glow */}
      <motion.div
        className="absolute inset-0 blur-[140px] opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}33, transparent 75%)`,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          filter: [
            "blur(100px) hue-rotate(0deg)",
            "blur(160px) hue-rotate(45deg)",
            "blur(100px) hue-rotate(0deg)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🩵 Extra faint moving nebula background */}
      <motion.div
        className="absolute inset-0 blur-[200px] opacity-40"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, ${color}11, transparent, ${color}22, transparent)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
