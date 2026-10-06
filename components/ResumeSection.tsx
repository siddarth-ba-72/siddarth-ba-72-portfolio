"use client";

import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glow-border mx-auto max-w-4xl rounded-3xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-background/85 backdrop-blur-xl px-6 py-16 md:px-16 md:py-20 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-brand opacity-20 blur-3xl"
          />
          <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-accent">
            06 — What&apos;s next
          </p>
          <h2 className="relative mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight">
            Want to work <span className="text-gradient animate-gradient">together?</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            I&apos;m open to full-time roles, freelance projects, and interesting
            collaborations. Download my resume or reach out directly.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Siddarth_Ambannavar_Resume.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand-strong px-7 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="mailto:siddarth.ba02@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-7 py-3 font-semibold hover:border-accent/50 hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} />
              Say hello
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
