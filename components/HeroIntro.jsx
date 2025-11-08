import React from "react";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
export default function HeroIntro() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        loop
        muted
        playsInline
        src="/hero-bg.mp4"
      /> */}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-left text-white space-y-6 h-full">

        {/* MAIN HEADLINE */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-snug">
          Transforming Ideas into Scalable Solutions
        </h2>

        {/* POSITIONING STATEMENT */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          I specialize in crafting scalable, secure backend systems and intuitive frontends that bridge performance with user delight.
          From RESTful APIs and Spring Boot microservices to full-stack dashboards with CI/CD pipelines — I deliver value with every deploy.
        </p>

        {/* IMPACT LIST */}
        <ul className="text-gray-300 text-base leading-relaxed space-y-2 pl-4 list-disc max-w-3xl">
          <li>💡 Engineered OTP-secured banking flows using Spring Boot, JWT & React</li>
          <li>🔐 Built full-stack RBAC-authenticated apps with Hibernate and PostgreSQL</li>
          <li>📊 Developed dashboards using React.js, Chart.js, and REST APIs</li>
          <li>🚀 Dockerized apps & deployed with AWS CI/CD pipelines</li>
          <li>🧠 Built intelligent OCR-based expense splitting systems with MongoDB</li>
        </ul>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/Aryabhatt_K.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            📄 Download Resume
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 hover:bg-indigo-800 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
