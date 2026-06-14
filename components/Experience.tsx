"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Wifi } from "lucide-react";

interface Role {
  title: string;
  from: string;
  to: string;
  remote?: boolean;
}

interface Organization {
  company: string;
  location: string;
  roles: Role[];
  bullets: string[];
}

const experiences: Organization[] = [
  {
    company: "Wissen Technology Private Limited",
    location: "Bengaluru, India",
    roles: [
      { title: "Associate Software Engineer", from: "May 2025", to: "Present" },
      { title: "Analyst Developer",           from: "Jun 2024", to: "Apr 2025" },
      { title: "Intern — Trainee",            from: "Feb 2024", to: "May 2024", remote: true },
    ],
    bullets: [
      "Designed and delivered a project life cycle tracking feature using Spring Boot and Angular, making the tool a single source of truth across organizational hierarchies, reducing manual tracking and duplication.",
      "Refined the event-driven architecture using IBM MQ and Spring Application Events, partnering with downstream teams to ensure seamless data flow for metric computation and reporting across teams.",
      "Developed and maintained an enterprise workforce resource management platform for a leading global fin-tech company, building RESTful APIs with Spring Boot to power a resource-allocation dashboard within a microservices ecosystem.",
      "Focused on learning and contributing to Java and Spring Boot based backend development; implemented a demo project showcasing Spring Boot microservices and REST API design.",
    ],
  },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
                        <Briefcase size={24} className="text-cyan-600 dark:text-cyan-400" />
                        Work Experience
                    </h2>
                    <div className="h-px bg-slate-200 dark:bg-slate-700 mb-12" />
                </motion.div>

                <div className="flex flex-col gap-8">
                    {experiences.map((org, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-cyan-400/40 transition-colors shadow-sm dark:shadow-none">

                                {/* Org header */}
                                <div className="flex flex-wrap items-center gap-2 mb-5">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex-1">
                                        {org.company}
                                    </h3>
                                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                        <MapPin size={12} className="text-cyan-400" />
                                        {org.location}
                                    </span>
                                </div>

                                {/* Designation timeline */}
                                <div className="relative pl-5 border-l border-slate-300 dark:border-slate-600 flex flex-col gap-4 mb-6">
                                    {org.roles.map((role, j) => (
                                        <div key={j} className="relative">
                                            {/* dot */}
                                            <span className="absolute -left-[1.45rem] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400/80 border-2 border-slate-800" />
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                                                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                    {role.title}
                                                </span>
                                                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                                                    {role.from} – {role.to}
                                                </span>
                                                {role.remote && (
                                                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                                        <Wifi size={11} />
                                                        Remote
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Shared description */}
                                <ul className="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700 pt-5">
                                    {org.bullets.map((b, j) => (
                                        <li key={j} className="flex gap-2 text-slate-600 dark:text-slate-300 text-sm">
                                            <span className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0">▸</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
