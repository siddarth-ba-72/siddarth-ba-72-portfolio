"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

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
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index="05"
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">background</span></>}
        />

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => {
            const [score, scale] = edu.gpa.split("/").map((part) => part.trim());
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <SpotlightCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-strong text-white shadow-lg shadow-violet-500/20">
                      <GraduationCap size={26} />
                    </span>
                    <div className="flex-1">
                      <span className="font-mono text-xs text-accent">{edu.duration}</span>
                      <h3 className="mt-1 font-display text-xl md:text-2xl font-semibold tracking-tight">
                        {edu.institution}
                      </h3>
                      <p className="mt-1 text-muted">
                        {edu.degree} · {edu.stream}
                      </p>
                    </div>
                    <div className="md:border-l md:border-line md:pl-8 md:text-right">
                      <p className="font-display text-4xl font-bold">
                        <span className="text-gradient">{score}</span>
                        {scale && <span className="text-lg text-muted"> / {scale}</span>}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">GPA</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
