import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [active, setActive] = useState("about");

  const fadeVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const content = {
    about: (
      <>
        <h1 className="text-3xl font-bold text-teal-400 mb-4">About Me</h1>
        <p className="text-gray-300 leading-relaxed">
          I’m Aryabhatt — a Full Stack Java Developer with a passion for
          building secure, scalable, and user-friendly applications using{" "}
          <strong>Spring Boot</strong>, <strong>React</strong>, and{" "}
          <strong>AWS</strong>. I love designing clean backend logic and modern
          frontend UIs.
        </p>
      </>
    ),
    experience: (
      <>
        <h1 className="text-3xl font-bold text-indigo-400 mb-4">Experience</h1>
        <p className="text-gray-300 leading-relaxed">
          4+ years of experience developing full-stack solutions, implementing
          microservices, and deploying applications using Docker, CI/CD, and
          cloud infrastructure. Experienced in Spring Security, JWT, and REST
          APIs.
        </p>
      </>
    ),
    skills: (
      <>
        <h1 className="text-3xl font-bold text-purple-400 mb-4">Skills</h1>
        <ul className="text-gray-300 list-disc list-inside space-y-1">
          <li>Spring Boot, Java, Hibernate</li>
          <li>React.js, JavaScript, Tailwind CSS</li>
          <li>MySQL, MongoDB, JPA</li>
          <li>Docker, AWS, Git, Postman</li>
        </ul>
      </>
    ),
  };

  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center px-4">

      {/* LEFT SIDE */}
      <div className="w-[30%] flex flex-col items-center justify-center">
        <img
          src="/arya_professional.jpg"
          alt="Aryabhatt"
          className="w-40 h-40 rounded-full object-cover shadow-xl"
        />
        <h2 className="mt-4 text-xl font-bold">Aryabhatt Kankipati</h2>
        <p className="text-indigo-400 text-sm">Full-Stack Java Developer</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[70%] flex flex-col justify-center items-start pl-6">

        {/* Section Buttons */}
        <div className="mb-6 self-end pr-6">
          {["about", "experience", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`px-4 py-2 rounded-full text-sm font-medium mx-1 transition
                ${
                  active === section
                    ? "bg-indigo-600 text-white"
                    : "border border-gray-500 text-gray-300 hover:bg-indigo-500 hover:text-white"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariant}
            className="max-w-2xl"
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
