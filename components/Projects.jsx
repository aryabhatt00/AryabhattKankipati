// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati | Portfolio: https://arya.codes
// Built with ❤️ using React, Tailwind CSS, and Framer Motion

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EIU – Official Website Revamp",
    description:
      "Redesigned and modernized the official Eastern Illinois University website with new web pages, improved accessibility, and mobile-first responsiveness using React, Tailwind, and Spring Boot.",
    stack: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
    github: "https://github.com/aryabhatt00/EIU_Oiss",
    icon: "🌐",
    solution:
      "Built a scalable, modular system improving UX, SEO, and content workflows across International Portal.",
  },
  {
    title: "BroPay – Smart Expense Splitter",
    description:
      "AI-powered receipt scanner and smart split engine that identifies items, extracts prices, and calculates individual shares automatically using OCR + Spring Boot + Salesforce integration.",
    stack: ["Spring Boot", "React", "MongoDB", "Google Vision API"],
    github: "https://github.com/aryabhatt00/BroPay",
    icon: "🧾",
    solution:
      "Simplified expense sharing for users by automating receipt-based split calculations securely and accurately.",
  },
  {
    title: "EduFund Bank",
    description:
      "Built a full-stack digital banking platform with secure customer and admin modules, OTP-based transaction verification, JWT authentication, session management, and a clean React + Spring Boot architecture.",
    stack: ["Spring Boot", "React.js", "MySQL", "Docker", "JWT Security"],
    github: "https://github.com/aryabhatt00/EduFund",
    icon: "🏦",
    solution:
      "Provided a secure and seamless banking experience through verified digital transactions and reliable account management.",
  },
  {
    title: "OPS Tool – Internal Analytics Platform",
    description:
      "Java Full Stack analytics platform for operational data visualization and workflow automation. Achieved 75% reduction in manual effort and 60% improvement in data insights via Chart.js dashboards and optimized SQL workflows.",
    stack: ["Java", "Spring Boot", "Hibernate", "SQL", "HTML", "CSS", "Chart.js"],
    github: "",
    icon: "📊",
    solution:
      "Empowered HR teams with instant data access and automated reporting, eliminating dependency on Excel sheets.",
  },
  {
    title: "TEMBUSU – Banking Project",
    description:
      "Contributed backend logic and PL/SQL automation for maturity date handling across financial departments. Focused on scheduling validation and data accuracy for banking processes.",
    stack: ["PL/SQL", "Oracle Database"],
    github: "",
    icon: "🏛️",
    solution:
      "Improved banking process accuracy and scalability through reliable scheduling and automation workflows.",
  },
  {
    title: "Intelligent Robot for Smart City",
    description:
      "AI-based Raspberry Pi robot for real-time waste classification and autonomous collection. Integrated with Blynk IoT for remote control, using Google Teachable Machine for ML model deployment.",
    stack: ["Python", "Raspberry Pi", "Teachable Machine", "Blynk"],
    github: "",
    icon: "🤖",
    solution:
      "Reduced manual labor in waste management through automated garbage identification and collection.",
  },
  {
    title: "Smart Garbage Monitoring System",
    description:
      "Built a Wi-Fi enabled garbage bin that sends alerts via Blynk when full. Used ultrasonic sensors and ESP8266 with Embedded C for cost-effective smart city waste solutions.",
    stack: ["Arduino", "Ultrasonic Sensor", "ESP8266", "Blynk IoT", "Embedded C"],
    github: "https://github.com/aryabhatt00/SmartGarbageDustbin",
    icon: "🗑️",
    solution:
      "Enabled real-time waste monitoring by sending alerts when bins were full, improving city cleanliness efficiency.",
  },
  {
    title: "Wine Quality Prediction",
    description:
      "Classified wine samples into quality levels using Logistic Regression, KNN, SVM, and Random Forest, with EDA and feature scaling.",
    stack: ["Python", "Pandas", "Sklearn", "Matplotlib"],
    github:
      "https://github.com/aryabhatt00/TCR_ML_PROJECTS/tree/main/Wine%20Quality%20Prediction",
    icon: "🍷",
    solution:
      "Helped winemakers evaluate quality more accurately using data-driven classification techniques.",
  },
  {
    title: "Gold Price Prediction",
    description:
      "Built a regression model using Random Forest and XGBoost to forecast future gold prices based on economic indicators.",
    stack: ["Python", "Pandas", "Sklearn", "XGBoost"],
    github:
      "https://github.com/aryabhatt00/TCR_ML_PROJECTS/tree/main/Price%20of%20gold",
    icon: "🪙",
    solution:
      "Enabled financial forecasting for investors by predicting commodity trends through machine learning.",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Built a fraud detection model using Logistic Regression and SMOTE oversampling, achieving strong recall on imbalanced data.",
    stack: ["Python", "Sklearn", "Pandas", "SMOTE"],
    github:
      "https://github.com/aryabhatt00/TCR_ML_PROJECTS/tree/main/Credit%20Card%20Fraud%20Detection",
    icon: "💳",
    solution:
      "Reduced undetected fraud cases by building a balanced model that flags anomalies in real time.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-10 md:pl-20 md:pr-36 pt-6 pb-32 flex flex-col justify-start text-left space-y-6"
    >
      <motion.h2
        className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Real-World Problem Solving
      </motion.h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 40px rgba(236,72,153,0.25)",
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/10 bg-transparent p-5 overflow-hidden max-w-[1100px] group"
          >
            {/* visible gradient background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none"></div>

            {/* 🔹 frosted blur only behind text, fading at bottom */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[14px] mask-fade pointer-events-none"></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 text-gray-300">
              <div className="flex-1 space-y-2">
                <div className="text-sm font-semibold text-indigo-400 group-hover:text-pink-400 transition duration-200">
                  {project.icon} {project.title}
                </div>
                <p className="text-sm text-gray-300 leading-snug">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-400 pt-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800/70 px-2 py-0.5 rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold text-sm">
                    🧠 Problem Solved
                  </span>
                  <p className="text-sm text-gray-300 leading-snug pt-1">
                    {project.solution}
                  </p>
                </div>
              </div>

              {project.github && (
                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex gap-4 text-gray-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-indigo-400 hover:text-pink-400 transition"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
