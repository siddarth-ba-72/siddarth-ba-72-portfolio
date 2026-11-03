# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and engineering managers hiring for backend roles (Java, Spring Boot, microservices; fintech and enterprise). They arrive from a resume, LinkedIn profile, or job application link, usually on a laptop between other candidates, and give the page a minute or two. Their job: confirm role fit (stack, level, domain), see evidence of shipped work, and grab the resume or a way to reach out.

## Product Purpose

Personal portfolio of Siddarth Ambannavar, Associate Software Engineer at Wissen Technology, Bengaluru. Success is a backend hiring visitor who downloads the resume, opens a project (live app or source), or emails / messages on LinkedIn during the first visit.

## Positioning

A backend engineer with production fintech experience who also ships complete AI products end to end: real, deployed applications with live URLs and public source, not tutorials. The one thing a visitor should remember after a minute: he ships real AI products, built on a solid backend foundation.

## Operating Context

- Visitors scan on desktop first, phone second, often with several candidate tabs open.
- The resume PDF download and the email / LinkedIn links are the actions that matter.
- The site is a fully static export, hosted on Cloudflare (wrangler) and optionally GitHub Pages under a sub-path.

## Capabilities and Constraints

- Next.js 16 App Router with `output: "export"` (no server, no request-time data), Tailwind CSS v4, framer-motion, lucide-react, next-themes.
- Public assets must be prefixed with `NEXT_PUBLIC_BASE_PATH`.
- Project data lives in `data/projects.ts`, skills in `data/skills.ts`; experience, certifications and education are inline in their components. Adding a project must stay a one-file edit.
- Every section stays a separate section: About (hero), Skills, Experience, Projects, Certifications, Education, Resume / contact.

## Brand Commitments

- Name: Siddarth Ambannavar.
- The profile photo (`public/siddarth_ba_72.png`) stays in the opening screen.
- A light / dark theme toggle stays. Dark theme uses a polished dark-blue background, light theme a white background, and the theme color is blue / violet (not green).
- Must read as built by an engineer. Must not feel plain or template-like, must not feel flashy, and must be scannable within seconds.

## Evidence on Hand

- Experience, Wissen Technology (Feb 2024 to present; Intern, then Analyst Developer, now Associate Software Engineer): migrated a Java 8 / Ant / Spring MVC monolith to Spring Boot 2.7 microservices on Java 17; replaced synchronous REST with IBM MQ and a DB-backed queue plus Spring Retry (~60% faster API execution); tuned JPA / Hibernate and added caching (~70% lower API latency); hardened Spring Security (CORS, CSRF, CSP).
- Experience, IIIT Bangalore: Machine Learning Research Intern, Aug to Oct 2023 (supervised classification for a health and wellness study).
- Projects: Interview Prep-Pilot-AI (live + source), Talent-Lens-AI (live + source), Data-Trace-Mind (source), Pharma-Plus (source).
- Certifications: Full Stack Generative AI & Agentic AI (Udemy, 2026); Claude Code in Action (Anthropic, 2026).
- Education: B.M.S College of Engineering, BE in Artificial Intelligence & Machine Learning, 2020 to 2024, GPA 8.5 / 10.
- Resume: `public/Siddarth_Ambannavar_Resume.pdf`. Contact: email, GitHub (siddarth-ba-72), LinkedIn (siddarth-ambannavar).
- Absent, never to be fabricated: project screenshots (`public/media/projects` is empty), user counts or traction for projects, testimonials, employer logos.

## Product Principles

1. Proof before adjectives: every claim points at something real, a live app, a repo, a credential, or a measured result.
2. The backend hiring visitor comes first: role, stack, experience, and resume are reachable within seconds.
3. Shipped products are the headline; the backend career is the foundation under them.
4. Engineer-made, not template-made.

## Accessibility & Inclusion

WCAG AA contrast in both themes. Respect `prefers-reduced-motion` (already wired through framer-motion's `MotionConfig`).
