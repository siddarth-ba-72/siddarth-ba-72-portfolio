"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "B.M.S College of Engineering",
    degree: "Bachelor of Engineering",
    stream: "Artificial Intelligence & Machine Learning",
    duration: "2020 – 2024",
    gpa: "8.5 / 10",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
            <GraduationCap size={24} className="text-cyan-600 dark:text-cyan-400" />
            Education
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 mb-12" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm dark:shadow-none hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/20 px-2 py-1 rounded-full whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {edu.degree} · {edu.stream}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  GPA
                </span>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
