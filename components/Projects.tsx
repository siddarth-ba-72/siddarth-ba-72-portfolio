import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const liveCount = projects.filter((p) => p.liveUrl).length;

  return (
    <section id="projects" className="border-b border-line px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          description={`Full-stack AI applications taken from idea to a working product. ${liveCount === 2 ? "Two" : liveCount} are live, so you can try them right now.`}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <a
          href="https://github.com/siddarth-ba-72"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
        >
          More on GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
