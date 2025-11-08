// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
// Built with ❤️ using React, Tailwind CSS, and Framer Motion

"use client";
import { useState, useRef, useEffect } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";
import AnimatedGlobe from "@/components/AnimatedGlobe";

export default function Home() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("about");

  // Refs for sections
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    aboutRef,
    techRef,
    educationRef,
    experienceRef,
    projectsRef,
    contactRef,
  };

  const sections = [
    { id: "about", ref: aboutRef },
    { id: "tech", ref: techRef },
    { id: "education", ref: educationRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
    { id: "contact", ref: contactRef },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  // ✅ Scroll tracking
  const handleScroll = () => {
    const windowMiddle = window.innerHeight / 2;

    for (let s of sections) {
      if (s.ref.current) {
        const rect = s.ref.current.getBoundingClientRect();
        if (rect.top <= windowMiddle && rect.bottom >= windowMiddle) {
          setActive(s.id);
          break;
        }
      }
    }
  };

  // ✅ Force scroll to "Home" (about) on first page load
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    setTimeout(() => {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
        setActive("about");
      }
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      {/* 🌐 Animated Globe Background */}
      <AnimatedGlobe section={active} />

      {/* Main content */}
      {isMobile ? (
        <HomeMobile
          active={active}
          setActive={setActive}
          scrollToSection={scrollToSection}
          refs={refs}
        />
      ) : (
        <HomeDesktop
          active={active}
          setActive={setActive}
          scrollToSection={scrollToSection}
          refs={refs}
        />
      )}
    </>
  );
}
