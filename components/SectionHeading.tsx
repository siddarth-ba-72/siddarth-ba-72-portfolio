"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-brand" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
