// components/LandingIntro.jsx
import React from "react";
import { motion } from "framer-motion";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
const LandingIntro = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug">
          Welcome to the world of <br />
          <span className="text-indigo-500">Aryabhatt Narasimha Rao Kankipati</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          A Full-Stack Java Developer passionate about building secure, scalable, and beautiful digital products.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 text-gray-400 animate-bounce text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
};

export default LandingIntro;
