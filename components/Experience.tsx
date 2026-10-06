"use client";

import { motion } from "framer-motion";
import { MapPin, Wifi } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

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
        <section id="experience" className="relative py-28 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    index="02"
                    eyebrow="Experience"
                    title={<>Where I&apos;ve <span className="text-gradient">worked</span></>}
                />

                <div className="flex flex-col gap-8">
                    {experiences.map((org, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <SpotlightCard className="p-6 md:p-8">

                                {/* Org header */}
                                <div className="flex flex-wrap items-center gap-4 mb-8">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-strong font-display text-lg font-bold text-white shadow-lg shadow-violet-500/20">
                                        {org.company[0]}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                                            {org.company}
                                        </h3>
                                        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                                            <MapPin size={13} className="text-accent" />
                                            {org.location}
                                        </p>
                                    </div>
                                    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted whitespace-nowrap">
                                        {org.roles[org.roles.length - 1].from} – {org.roles[0].to}
                                    </span>
                                </div>

                                {/* Designation timeline */}
                                <ol className="relative ml-1.5 mb-8 flex flex-col gap-6">
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-(--grad-1) via-(--grad-2) to-transparent"
                                    />
                                    {org.roles.map((role, j) => {
                                        const current = role.to === "Present";
                                        return (
                                            <li key={j} className="relative pl-7">
                                                {/* dot */}
                                                <span className="absolute left-0 top-1.5 -translate-x-1/2">
                                                    {current && (
                                                        <span className="absolute -inset-1 rounded-full bg-accent/40 animate-ping" />
                                                    )}
                                                    <span
                                                        className={`relative block h-3 w-3 rounded-full border-2 border-background ${
                                                            current ? "bg-accent shadow-[0_0_12px_var(--accent)]" : "bg-muted/60"
                                                        }`}
                                                    />
                                                </span>
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                                    <span className="font-semibold">{role.title}</span>
                                                    {current && (
                                                        <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                                                            Current
                                                        </span>
                                                    )}
                                                    {role.remote && (
                                                        <span className="flex items-center gap-1 text-xs text-muted">
                                                            <Wifi size={11} />
                                                            Remote
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="mt-1 font-mono text-xs text-muted">
                                                    {role.from} – {role.to}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ol>

                                {/* Shared description */}
                                <ul className="flex flex-col gap-3.5 border-t border-line pt-6">
                                    {org.bullets.map((b, j) => (
                                        <li key={j} className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-foreground/75">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
