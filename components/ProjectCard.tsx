import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./icons";
import SpotlightCard from "./SpotlightCard";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <SpotlightCard className="flex h-full flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-500/10">
      {/* Window chrome */}
      <div className="flex items-center gap-2 rounded-t-2xl border-b border-line bg-foreground/[0.02] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 truncate font-mono text-xs text-muted">~/projects/{slug}</span>
        <span className="ml-auto font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Title */}
        <h3 className="font-display text-2xl font-semibold tracking-tight mb-3 transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 border-t border-line pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 rounded-lg bg-brand-strong px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow"
              aria-label={`${project.title} live demo`}
            >
              Live Demo
              <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-muted hover:text-foreground hover:border-accent/50 transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon size={15} />
              Source
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
