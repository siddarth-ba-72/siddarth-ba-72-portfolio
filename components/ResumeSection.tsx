"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 px-6 flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Want to work together?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          I&apos;m open to full-time roles, freelance projects, and interesting
          collaborations. Download my resume or reach out directly.
        </p>
        <a
          href="/Siddarth_Ambannavar_Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-7 py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-cyan-500/20"
        >
          <Download size={18} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
