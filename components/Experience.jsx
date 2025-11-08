// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
// Built with ❤️ using React, Tailwind CSS, and Framer Motion

"use client";

import React from "react";
import { motion } from "framer-motion";
import ImpactMeter from "./ImpactMeter";

const experience = [
  {
    role: "Graduate Assistant",
    company: "Eastern Illinois University",
    duration: "Dec 2024 – Present",
    icon: "🎓",
    impact: { backend: 85, frontend: 80, devops: 45, data: 75 },
    points: [
      "Built pixel-perfect, mobile-responsive frontend interfaces.",
      "Leading the redevelopment of EIU’s official university website, delivering a modern, scalable version scheduled to go live in the upcoming release cycle.",
      "Designing and implementing responsive front-end interfaces using ReactJS integrated with secure Spring Boot REST APIs.",
      "Optimizing database queries and workflows to enhance performance, accessibility, and system efficiency.",
      "Collaborating with university IT and academic departments to ensure seamless migration, system reliability, and data integrity across modules."
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Self-Employed",
    duration: "Feb 2024 – Dec 2024",
    icon: "🛠️",
    impact: { backend: 85, frontend: 75, devops: 35, data: 65 },
    points: [
      "Designed and delivered full-stack enterprise web applications using Spring Boot and ReactJS.",
      "Developed secure REST APIs, implemented JWT-based authentication, and optimized SQL performance.",
      "Deployed scalable applications on cloud platforms ensuring stability and cost efficiency."
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Capgemini",
    duration: "Oct 2022 – Feb 2024",
    icon: "🏢",
    impact: { backend: 90, frontend: 60, devops: 55, data: 80 },
    points: [
      "Developed high-performance APIs and microservices for large-scale banking and analytics platforms.",
      "Enhanced data processing speed by 60% through optimized SQL queries, caching, and load balancing.",
      "Designed modular, maintainable backend architecture focusing on scalability, security, and fault tolerance.",
      "Worked with cross-functional Agile teams to deliver robust backend systems and mentor peers on best practices."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Capgemini",
    duration: "Mar 2022 – Oct 2022",
    icon: "📘",
    impact: { backend: 75, frontend: 45, devops: 30, data: 60 },
    points: [
      "Developed REST APIs and backend modules using Java and Spring Boot while optimizing SQL for large-scale data processing.",
      "Integrated Python-based data workflows to generate analytical insights and automate reporting tasks.",
      "Collaborated in Agile sprints to deliver reliable, data-driven enterprise solutions across multiple environments."
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Spark Foundation",
    duration: "Jul 2021 – Aug 2021",
    icon: "🌱",
    impact: { backend: 65, frontend: 70, devops: 25, data: 50 },
    points: [
      "Developed a responsive banking application for customer account management and transactions.",
      "Integrated frontend and backend components ensuring seamless and secure data flow.",
      "Enhanced user experience with clean UI design and optimized application performance."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 sm:px-10 md:pl-20 md:pr-36 pt-6 pb-32 flex flex-col justify-start text-left space-y-6"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8">
        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 40px rgba(236,72,153,0.25)",
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/10 bg-transparent p-5 overflow-hidden max-w-[1100px] group"
          >
            {/* Visible Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none"></div>

            {/* Frosted Blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[14px] mask-fade pointer-events-none"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 text-gray-300">
              {/* Text */}
              <div className="flex-1 space-y-2">
                <div className="font-semibold text-indigo-400 text-sm group-hover:text-pink-400 transition duration-200">
                  {item.icon} {item.role} @ {item.company}
                </div>
                <div className="text-xs text-gray-400">{item.duration}</div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300 leading-snug">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Impact Meter */}
              {item.impact && (
                <div className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0">
                  <ImpactMeter impact={item.impact} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
