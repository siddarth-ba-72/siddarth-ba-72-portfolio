"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Associate Software Engineer",
  "Backend Engineer",
  "Spring Boot & Microservices",
  "Generative AI Builder",
];

// Cycles through the roles under the name, the way the previous site did.
export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="flex h-9 items-center gap-2.5 overflow-hidden text-xl font-medium sm:text-2xl">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="font-mono text-accent">
        &gt;
      </span>
      <span aria-hidden="true" className="relative flex h-full items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span aria-hidden="true" className="animate-blink h-6 w-0.5 bg-accent" />
    </p>
  );
}
