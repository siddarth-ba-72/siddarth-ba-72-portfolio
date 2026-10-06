"use client";

import type { MouseEvent, ReactNode } from "react";

// Glass card whose border and fill glow around the cursor (see .spotlight in globals.css).
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`spotlight group rounded-2xl border border-line bg-card backdrop-blur-md shadow-sm shadow-slate-900/5 dark:shadow-none transition-[translate,box-shadow] duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
