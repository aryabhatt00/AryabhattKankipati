"use client";
import { useEffect } from "react";
import ProfilePanel from "@/components/ProfilePanel";
import HeroIntro from "@/components/HeroIntro";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

import {
  Home as HomeIcon,
  Code,
  BookOpenCheck,
  Briefcase,
  Mail,
  FolderOpen,
} from "lucide-react";

// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
export default function HomeMobile({ active, setActive, scrollToSection, refs }) {
  const {
    aboutRef,
    techRef,
    educationRef,
    experienceRef,
    projectsRef,
    contactRef,
  } = refs || {};

  const sections = [
    { id: "about", label: "Home", icon: HomeIcon, ref: aboutRef },
    { id: "tech", label: "Skills", icon: Code, ref: techRef },
    { id: "education", label: "Education", icon: BookOpenCheck, ref: educationRef },
    { id: "experience", label: "Exp", icon: Briefcase, ref: experienceRef },
    { id: "projects", label: "Projects", icon: FolderOpen, ref: projectsRef },
    { id: "contact", label: "Contact", icon: Mail, ref: contactRef },
  ];

  return (
    <main className="bg-black text-white overflow-y-auto pb-24">

      {/* MOBILE PAGE CONTENT */}
      <div className="flex flex-col">

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <ProfilePanel />
            <HeroIntro />
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" ref={techRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <TechStack />
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" ref={educationRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <Education />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" ref={experienceRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <Experience />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" ref={projectsRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={contactRef} className="py-4 px-6">
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </section>

      </div>

      {/* BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-0 left-0 w-full z-30 sm:z-40 
        bg-gradient-to-t from-black/80 to-transparent 
        backdrop-blur-md border-t border-indigo-800/30 
        px-4 py-2 flex justify-between items-center pointer-events-auto"
      >

        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group flex flex-col items-center justify-center transition-all duration-500 px-2"
            >
              <div
                className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 shadow-[0_0_20px_5px_rgba(147,51,234,0.5)] animate-pulse"
                    : "bg-zinc-800 group-hover:bg-gradient-to-br group-hover:from-indigo-700 group-hover:to-purple-700"
                }`}
              >
                <Icon
                  size={24}
                  className={`transition-all duration-500 ${
                    isActive
                      ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
              </div>
              <span
                className={`mt-1 text-[11px] transition-all font-medium ${
                  isActive ? "text-indigo-400" : "text-gray-400 group-hover:text-white"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}

      </div>
    </main>
  );
}
