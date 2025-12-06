// © 2025 Aryabhatt Narasimha Rao Kankipati | Premium Gradient Background

"use client";
import React from "react";

export default function AnimatedGlobe() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-black">

      {/* 🌈 Soft animated gradient glow */}
      <div
        className="absolute inset-0 blur-[120px] opacity-40 animate-[pulse_8s_ease-in-out_infinite]"
        style={{
          background: `
            black
          `,
        }}
      />

      {/* ✨ Subtle moving light streaks */}
      <div
        className="absolute inset-0 opacity-20 animate-[spin_90s_linear_infinite]"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 50%, 
              #6366f111, #a855f711, #ec489911, #6366f111
            )
          `,
        }}
      />

      {/* 🎛 Noise texture overlay (premium UI effect) */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}
