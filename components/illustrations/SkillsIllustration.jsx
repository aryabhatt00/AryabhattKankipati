"use client";

export default function SkillsIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">

<div className="relative group w-64 h-64">

  {/* Glow */}
  <div className="
    absolute inset-0 
    rounded-3xl
    bg-gradient-to-br from-purple-600/30 via-indigo-500/20 to-transparent
    blur-2xl opacity-80 
    group-hover:opacity-100
    transition-all duration-500
  " />

  {/* Neon Border */}
  <div className="absolute inset-0 rounded-3xl ring-1 ring-purple-500/20" />

  {/* Image */}
  <img
    src="/illustrations/skills.png"
    alt="Skills Illustration"
    className="
      relative w-full h-full object-contain rounded-3xl
      brightness-110 contrast-110
      transition-all duration-500 group-hover:scale-105
    "
  />

</div>


    </div>
  );
}
