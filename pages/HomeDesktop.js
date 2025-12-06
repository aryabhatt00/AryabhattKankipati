"use client";
import {
  Home as HomeIcon,
  Code,
  BookOpenCheck,
  Briefcase,
  Mail,
  FolderOpen,
} from "lucide-react";

import ProfilePanel from "@/components/ProfilePanel";
import HeroIntro from "@/components/HeroIntro";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomeDesktop({ active, scrollToSection, refs }) {
  const {
    aboutRef,
    techRef,
    educationRef,
    experienceRef,
    projectsRef,
    contactRef,
  } = refs || {};

  return (
    <div className="hidden lg:flex w-full">

      {/* LEFT PROFILE PANEL — NOW DYNAMIC */}
      <div className="w-[26%] fixed top-0 left-0 h-screen z-40 border-r border-gray-800 
        bg-gradient-to-b from-indigo-900/30 via-black to-black">
        <div className="h-full flex items-center justify-center">
          <ProfilePanel section={active} />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[74%] ml-[26%] scroll-smooth">

        {/* HERO */}
        <section ref={aboutRef} id="about" className="py-16 px-20">
          <HeroIntro />
        </section>

        {/* TECH STACK */}
        <section ref={techRef} id="tech" className="py-16 px-20">
          <TechStack />
        </section>

        {/* EDUCATION */}
        <section ref={educationRef} id="education" className="py-16 px-20">
          <Education />
        </section>

        {/* EXPERIENCE */}
        <section ref={experienceRef} id="experience" className="py-16 px-20">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef} id="projects" className="py-16 px-20">
          <Projects />
        </section>

        {/* CONTACT */}
        <section ref={contactRef} id="contact" className="py-16 px-20">
          <Contact />
        </section>

      </div>

      {/* RIGHT NAVIGATION */}
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex 
  flex-col items-center gap-6 
  bg-black/30 backdrop-blur-md border border-indigo-800/20
  rounded-2xl p-3 shadow-lg">


        {[
          { id: "about", label: "Home", icon: HomeIcon },
          { id: "tech", label: "Skills", icon: Code },
          { id: "education", label: "Education", icon: BookOpenCheck },
          { id: "experience", label: "Experience", icon: Briefcase },
          { id: "projects", label: "Projects", icon: FolderOpen },
          { id: "contact", label: "Contact", icon: Mail },
        ].map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative flex flex-col items-center transition-all duration-500 hover:scale-110"
            >
              <div
                className={`relative w-16 h-16 flex items-center justify-center rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 shadow-[0_0_35px_10px_rgba(147,51,234,0.7)] animate-pulse"
                    : "bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-700 hover:to-purple-700"
                }`}
              >
                <Icon
                  size={30}
                  className={
                    isActive
                      ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110"
                      : "text-gray-400 group-hover:text-white"
                  }
                />
              </div>

              <span
                className={`absolute right-20 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md 
                  bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-sm font-semibold 
                  opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 
                  transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : ""}`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
