"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#about");

  // Highlight the link for whichever section crosses a band just above mid-viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { href } of navLinks) {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#about" className="flex items-center gap-2.5" aria-label="Siddarth Ambannavar, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line-strong bg-raised font-mono text-xs font-semibold text-accent">
            SA
          </span>
          <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight lg:hidden xl:inline">Siddarth Ambannavar</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative isolate block rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-accent-soft"
                      transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <SocialLinks only={["GitHub", "LinkedIn"]} className="hidden sm:flex" />
          <ThemeToggle />
          <a
            href={`${basePath}/Siddarth_Ambannavar_Resume.pdf`}
            download
            className="hidden h-9 items-center gap-2 rounded-md bg-solid px-3.5 text-sm font-semibold text-solid-fg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileText size={15} />
            Resume
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-card text-muted transition-colors hover:text-fg lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-line py-3 font-mono text-sm ${
                    active === link.href ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <SocialLinks />
            <a
              href={`${basePath}/Siddarth_Ambannavar_Resume.pdf`}
              download
              className="ml-auto inline-flex h-9 items-center gap-2 rounded-md bg-solid px-3.5 text-sm font-semibold text-solid-fg"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
