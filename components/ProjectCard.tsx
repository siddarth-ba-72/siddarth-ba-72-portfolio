import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Window, { Status, Tag } from "./Window";
import { GithubIcon } from "./icons";

// Live demo is the primary action: a filled accent button. Source is the quieter secondary link.
function LiveDemoButton({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} live demo`}
      className="group/live inline-flex h-10 items-center gap-2 rounded-md bg-solid px-4 text-sm font-semibold text-solid-fg transition-opacity hover:opacity-90"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-solid-fg/40" />
        <span className="relative h-2 w-2 rounded-full bg-solid-fg" />
      </span>
      Live demo
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
      />
    </a>
  );
}

function SourceLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} source code on GitHub`}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium text-muted transition-colors hover:border-fg/40 hover:text-fg"
    >
      <GithubIcon size={15} />
      Source
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const isLive = Boolean(project.liveUrl);

  return (
    <Window
      path={`~/${slug}`}
      meta={isLive ? <Status label="live" /> : <Status label="source" tone="muted" />}
      className="h-full transition-colors hover:border-line-strong"
      bodyClassName="flex flex-col p-6"
    >
      <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm text-subtle">{project.tagline}</p>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
        {project.liveUrl && <LiveDemoButton href={project.liveUrl} title={project.title} />}
        {project.githubUrl && <SourceLink href={project.githubUrl} title={project.title} />}
      </div>
    </Window>
  );
}
