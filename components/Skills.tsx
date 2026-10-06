"use client";

import { motion } from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Database,
  Layers,
  PanelsTopLeft,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

// Icons per category label; unknown labels fall back to Layers.
const categoryIcons: Record<string, LucideIcon> = {
  Languages: Braces,
  Backend: Server,
  Frontend: PanelsTopLeft,
  Database: Database,
  DevOps: Workflow,
  "AI / Emerging": BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          eyebrow="Skills"
          title={<>Tools of the <span className="text-gradient">trade</span></>}
          description="The languages, frameworks and platforms I use to design, build and ship reliable software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.label] ?? Layers;
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="h-full"
              >
                <SpotlightCard className="h-full p-6 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-foreground/[0.04] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{category.label}</h3>
                    <span className="ml-auto font-mono text-xs text-muted">
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-line bg-foreground/[0.03] px-2.5 py-1 text-sm text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
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
