"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Coffee, Download, Leaf, Sparkles } from "lucide-react";
import SocialLinks from "./SocialLinks";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const roles = [
    "Associate Software Engineer",
    "Backend Engineer",
    "Spring Boot & Microservices",
    "Generative AI Builder",
];

const floatingBadges = [
    { label: "Java", icon: Coffee, className: "-left-6 top-8 sm:-left-10", delay: 0 },
    { label: "Spring Boot", icon: Leaf, className: "-right-6 top-1/2 sm:-right-12", delay: 0.8 },
    { label: "Agentic AI", icon: Sparkles, className: "left-4 -bottom-3 sm:left-8", delay: 1.6 },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="about" className="relative min-h-screen flex items-center px-6 pt-32 pb-24">
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">
                {/* Text */}
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div
                        variants={item}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-card backdrop-blur px-3 py-1.5 text-xs font-medium text-muted mb-7"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to new opportunities
                    </motion.div>

                    <motion.p variants={item} className="font-mono text-sm text-accent mb-3">
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        variants={item}
                        className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]"
                    >
                        Siddarth
                        <br />
                        <span className="text-gradient animate-gradient">Ambannavar</span>
                    </motion.h1>

                    {/* Rotating role */}
                    <motion.div
                        variants={item}
                        className="mt-6 flex h-9 items-center gap-2 overflow-hidden font-display text-xl md:text-2xl font-medium"
                    >
                        <span className="font-mono text-accent">&gt;</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roles[roleIndex]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="whitespace-nowrap"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                        <span className="h-6 w-0.5 bg-accent animate-blink" />
                    </motion.div>

                    <motion.p variants={item} className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted">
                        Backend Engineer with 2 years of experience building and maintaining scalable and resilient enterprise systems using Java,
                        Spring Boot, and Angular in the fin-tech domain. Experienced in microservices, batch processing, REST API design, and
                        application security. Actively learning Generative AI and Agentic AI application development.
                    </motion.p>

                    {/* CTAs + social links */}
                    <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-xl bg-brand-strong px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all"
                        >
                            View my work
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={`${basePath}/Siddarth_Ambannavar_Resume.pdf`}
                            download
                            className="inline-flex items-center gap-2 rounded-xl border border-line bg-card backdrop-blur px-5 py-3 text-sm font-semibold hover:border-accent/50 hover:-translate-y-0.5 transition-all"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                        <span className="hidden sm:block mx-2 h-8 w-px bg-line" />
                        <SocialLinks />
                    </motion.div>
                </motion.div>

                {/* Photo */}
                <motion.div
                    className="flex justify-center md:justify-end order-first md:order-last"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 select-none">
                        {/* Glow + spinning gradient ring */}
                        <div className="absolute -inset-4 rounded-full bg-brand-conic opacity-40 blur-3xl animate-spin-slow" />
                        <div className="absolute inset-0 rounded-full bg-brand-conic animate-spin-slow" />
                        <div className="absolute inset-[3px] rounded-full bg-background" />
                        <div className="absolute inset-3 overflow-hidden rounded-full">
                            <img
                                src={`${basePath}/siddarth_ba_72.png`}
                                alt="Siddarth Ambannavar"
                                draggable={false}
                                className="h-full w-full object-cover object-top pointer-events-none"
                            />
                        </div>
                        {/* Transparent overlay — prevents right-click save */}
                        <div
                            className="absolute inset-0 rounded-full z-10"
                            onContextMenu={(e) => e.preventDefault()}
                        />

                        {floatingBadges.map(({ label, icon: Icon, className, delay }) => (
                            <motion.div
                                key={label}
                                className={`absolute z-20 ${className}`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
                            >
                                <div className="flex items-center gap-2 rounded-xl border border-line bg-background/80 backdrop-blur-md px-3 py-2 text-xs font-semibold shadow-xl shadow-slate-900/10 dark:shadow-black/40">
                                    <Icon size={14} className="text-accent" />
                                    {label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <a
                href="#skills"
                aria-label="Scroll to skills"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted hover:text-foreground transition-colors"
            >
                scroll
                <ChevronDown size={16} className="animate-bounce" />
            </a>
        </section>
    );
}
