"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

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
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index="04"
          eyebrow="Certifications"
          title={<>Always <span className="text-gradient">learning</span></>}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full hover:-translate-y-1">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col gap-6 p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-foreground/[0.04] text-accent">
                      <BadgeCheck size={20} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span className="mt-auto font-mono text-xs text-accent">View credential →</span>
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
