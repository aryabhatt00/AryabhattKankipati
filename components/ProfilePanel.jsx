import React from "react";
import { TypeAnimation } from "react-type-animation";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati

const ProfilePanel = () => {
  return (
    <div className="flex flex-col items-center space-y-6">

      {/* Profile Image with Hover Glow */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/40 via-purple-500/30 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

        <img
          src="/arya_professional.jpg"
          alt="Aryabhatt"
          className="relative w-56 h-56 md:w-64 md:h-64
             rounded-full object-cover object-top
             border-[3px] border-transparent
             [mask-image:radial-gradient(circle,white_70%,transparent_100%)]
             shadow-[0_35px_80px_rgba(0,0,0,0.9)]
             transform transition-all duration-700 ease-out
             group-hover:scale-[1.08] group-hover:-translate-y-3
             group-hover:rotate-x-6 group-hover:rotate-y-3"
        />
      </div>

      {/* Name & Animated Role Titles */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white leading-snug">
          Aryabhatt Narasimha Rao Kankipati
        </h2>

        <TypeAnimation
          sequence={[
            "Full-Stack Java & React Developer", 2000,
            "Cloud-Native System Architect", 2000,
            "Spring Boot & JWT Security Expert", 2000,
            "OCR & AI-Powered App Builder", 2000,
            "Secure Banking Platform Engineer", 2000,
            "ML-Driven Insight Creator", 2000,
            "Problem Solver & DSA Enthusiast", 2000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
          className="text-indigo-400 text-sm font-medium mt-1 inline-block"
        />
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/aryabhatt00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aryabhatt-narasimha-rao-kankipati-58644a1a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>
      </div>

    </div>
  );
};

export default ProfilePanel;
