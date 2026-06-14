"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Generative AI & Agentic AI",
    issuer: "Udemy",
    year: "2026",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fa9eebc2-c77e-4fcc-8a8d-2b2c0960c0ae.pdf",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    credentialUrl: "https://verify.skilljar.com/c/5ndwysottdjq",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
            <BadgeCheck size={24} className="text-cyan-600 dark:text-cyan-400" />
            Certifications
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 mb-12" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm dark:shadow-none hover:border-cyan-400/50 transition-colors flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <BadgeCheck
                  size={28}
                  className="text-cyan-600 dark:text-cyan-400 shrink-0"
                />
                <div>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">
                    {cert.title}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline whitespace-nowrap shrink-0"
              >
                View Credential
                <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
