"use client";

import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto dark:bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
            <FolderKanban size={24} className="text-cyan-600 dark:text-cyan-400" />
            Projects
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
