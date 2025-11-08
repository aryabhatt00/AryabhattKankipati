// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati 

"use client";

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "M.S. in Computer Technology",
    school: "Eastern Illinois University",
    icon: "🎓",
    highlights: [
      "Graduate Assistant (Web Developer)",
      "GPA: 3.9 / 4.0",
      "Focus: Web Tech, DB Security, Machine Learning",
    ],
  },
  {
    degree: "B.Tech in Electronics & Communication",
    school: "Visvesvaraya Technological University",
    icon: "📡",
    highlights: [
      "Final Year Project: Smart City Robot",
      "Focus: SQL, Data, Web, Machine Learning",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    icon: "☁️",
    link: "/certs/aws.pdf",
  },
  {
    name: "Introduction to Generative AI",
    org: "Google Cloud · Coursera",
    icon: "🧠",
    link: "/certs/gen_ai.pdf",
  },
  {
    name: "Java Programming: Solving Problems",
    org: "Duke University · Coursera",
    icon: "☕",
    link: "/certs/java_programming.pdf",
  },
  {
    name: "Front-End UI with Bootstrap 4",
    org: "HKUST · Coursera",
    icon: "🎨",
    link: "/certs/front_end.pdf",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-20 px-6 sm:px-10 md:px-20 text-white flex flex-col justify-start"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>

      {/* 🎓 Education Section */}
      <div className="mb-20">
        <h3 className="text-xl font-semibold mb-8 text-indigo-400">🎓 Education</h3>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative border-l border-indigo-600 pl-6 ml-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-10px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-sm shadow-md">
                {item.icon}
              </div>

              {/* Frosted glass card */}
              <motion.div
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0 0 40px rgba(236,72,153,0.25)",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="relative rounded-2xl border border-white/10 bg-transparent p-5 overflow-hidden group"
              >
                {/* Subtle visible background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none"></div>

                {/* 🔹 blurred text area fade */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[14px] mask-fade pointer-events-none"></div>

                {/* Foreground text */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-indigo-400 group-hover:text-pink-400 transition duration-200">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-white mb-1">{item.school}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 📜 Certifications Section */}
      <div>
        <h3 className="text-xl font-semibold mb-8 text-indigo-400">📜 Certifications</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(236,72,153,0.25)",
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-transparent p-4 overflow-hidden block group"
            >
              {/* visible gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none"></div>

              {/* frosted blur layer */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[14px] mask-fade pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-lg text-indigo-300 font-semibold group-hover:text-pink-400 transition">
                  {cert.icon} {cert.name}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition mt-1">
                  {cert.org}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
