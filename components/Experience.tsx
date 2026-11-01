"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Gauge,
  MapPin,
  ShieldCheck,
  Wifi,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

interface Role {
  title: string;
  from: string;
  to: string;
  remote?: boolean;
}

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Organization {
  company: string;
  location: string;
  roles: Role[];
  highlights: Highlight[];
  stack: string[];
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
    highlights: [
      {
        icon: Boxes,
        title: "Monolith to microservices",
        text: "Migrated a legacy Java 8 / Ant / Spring MVC monolith to Spring Boot 2.7 microservices on Java 17 and Gradle 8.",
      },
      {
        icon: Workflow,
        title: "Async messaging & retries",
        text: "Replaced synchronous REST calls with IBM MQ and a database-backed queue, with Spring Retry handling failed downstream calls. Cut API execution time by ~60%.",
      },
      {
        icon: Gauge,
        title: "Query & cache tuning",
        text: "Tuned Spring Data JPA / Hibernate queries and added application-level caching, bringing API latency down by ~70%.",
      },
      {
        icon: ShieldCheck,
        title: "Security hardening",
        text: "Configured Spring Security with CORS, CSRF protection and a strict Content Security Policy to close OWASP Top 10 gaps.",
      },
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security", "Spring Batch", "IBM MQ", "Gradle", "JUnit 5", "Grafana", "Angular"],
  },
  {
    company: "International Institute of Information Technology Bangalore",
    location: "Bengaluru, India",
    roles: [
      { title: "Machine Learning Research Intern", from: "Aug 2023", to: "Oct 2023" },
    ],
    highlights: [
      {
        icon: BrainCircuit,
        title: "Applied ML research",
        text: "Built and evaluated supervised classification models to distinguish participant groups in a health and wellness research study.",
      },
    ],
    stack: ["Machine Learning", "Classification", "Model Evaluation"],
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

                                {/* Highlights */}
                                <ul className="grid gap-3 border-t border-line pt-6 md:grid-cols-2">
                                    {org.highlights.map(({ icon: Icon, title, text }, j) => {
                                        const lone = j === org.highlights.length - 1 && j % 2 === 0;
                                        return (
                                            <li
                                                key={title}
                                                className={`rounded-xl border border-line bg-foreground/[0.02] p-4 ${lone ? "md:col-span-2" : ""}`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                                                        <Icon size={16} />
                                                    </span>
                                                    <h4 className="font-semibold text-sm md:text-[15px]">{title}</h4>
                                                </div>
                                                <p className="mt-2.5 text-sm leading-relaxed text-muted">{text}</p>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Tech stack */}
                                <div className="mt-6 flex flex-wrap items-center gap-2">
                                    <span className="mr-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                                        Stack
                                    </span>
                                    {org.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-xs text-accent"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
