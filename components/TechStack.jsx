"use client";

import React from "react";
import { motion } from "framer-motion";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
// Icons
import { FaJava, FaReact, FaDocker, FaAws, FaSalesforce } from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiGithubactions,
  SiGooglecloud,
  SiRedux,
  SiReactquery,
  SiApachemaven,
  SiJunit5,
  SiTestinglibrary,
  SiVite,
  SiApache,
  SiNginx,
  SiVisualstudiocode,
  SiPostman,
  SiApollographql,
  SiGraphql,
  SiNodedotjs,
} from "react-icons/si";
import { MdApi, MdCloudQueue, MdOutlineBugReport } from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Hibernate",
    "REST APIs",
    "RBAC",
    "MVC",
    "Maven",
    "JUnit",
    "Mockito",
    "TestNG",
    "AssertJ",
    "Postman",
    "Node.js",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "React Query",
    "Tailwind CSS",
    "JavaScript",
    "Vite",
    "GraphQL",
    "Apollo",
  ],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "Oracle PL/SQL"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Apache"],
  Cloud: ["AWS", "GCP", "Render", "Google Vision API"],
  Strengths: ["Problem Solving", "DSA", "System Design", "Debugging"],
};

const iconMap = {
  Java: <FaJava size={20} color="#f89820" />,
  "Spring Boot": <SiSpringboot size={20} color="#6DB33F" />,
  Hibernate: <SiHibernate size={20} color="#59666C" />,
  "REST APIs": <MdApi size={20} color="#E34F26" />,
  RBAC: <MdApi size={20} color="#A78BFA" />,
  MVC: <MdApi size={20} color="#F472B6" />,
  Maven: <SiApachemaven size={20} color="#C71A36" />,
  JUnit: <SiJunit5 size={20} color="#25A162" />,
  Mockito: <SiTestinglibrary size={20} color="#E53935" />,
  TestNG: <SiTestinglibrary size={20} color="#FFA500" />,
  AssertJ: <SiTestinglibrary size={20} color="#6EE7B7" />,
  Postman: <SiPostman size={20} color="#FF6C37" />,
  "Node.js": <SiNodedotjs size={20} color="#83CD29" />,

  "React.js": <FaReact size={20} color="#61DBFB" />,
  "Next.js": <SiNextdotjs size={20} color="white" />,
  Redux: <SiRedux size={20} color="#764ABC" />,
  "React Query": <SiReactquery size={20} color="#FF4154" />,
  "Tailwind CSS": <SiTailwindcss size={20} color="#38bdf8" />,
  JavaScript: <SiJavascript size={20} color="#F0DB4F" />,
  Vite: <SiVite size={20} color="#646CFF" />,
  GraphQL: <SiGraphql size={20} color="#E535AB" />,
  Apollo: <SiApollographql size={20} color="#311C87" />,

  MySQL: <SiMysql size={20} color="#00758F" />,
  PostgreSQL: <SiPostgresql size={20} color="#336791" />,
  MongoDB: <SiMongodb size={20} color="#4DB33D" />,
  "Oracle PL/SQL": <SiPostgresql size={20} color="#C93D3D" />,

  Docker: <FaDocker size={20} color="#2496ED" />,
  Kubernetes: <SiKubernetes size={20} color="#326CE5" />,
  "GitHub Actions": <SiGithubactions size={20} color="#2088FF" />,
  "CI/CD": <MdCloudQueue size={20} color="#10B981" />,
  Apache: <SiApache size={20} color="#CA1A22" />,

  AWS: <FaAws size={20} color="#FF9900" />,
  GCP: <SiGooglecloud size={20} color="#4285F4" />,
  Render: <MdCloudQueue size={20} color="#00c7b7" />,
  "Google Vision API": <SiGooglecloud size={20} color="#FBBC05" />,

  "Problem Solving": <MdOutlineBugReport size={20} color="#F59E0B" />,
  DSA: <PiBracketsCurlyBold size={20} color="#14B8A6" />,
  "System Design": <MdCloudQueue size={20} color="#818CF8" />,
  Debugging: <MdOutlineBugReport size={20} color="#F87171" />,
};

const TechStack = () => {
  return (
    <section className="w-full px-10 space-y-12">
      <motion.h2
        className="text-3xl font-bold text-teal-400 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Tech Stack & Core Strengths
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-400">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 text-white hover:bg-teal-500 hover:text-black transition-all"
                >
                  {iconMap[skill] || <PiBracketsCurlyBold size={20} />} {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
