"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
export default function ProjectCard({ project }) {
  const { title, description, tags, image, github, live } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-indigo-500/20 transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-indigo-400">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-indigo-700 text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Github size={18} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
