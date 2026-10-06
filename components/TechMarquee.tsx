import { skillCategories } from "@/data/skills";

const allSkills = skillCategories.flatMap((category) => category.skills);

// Decorative infinite ticker of every skill — two identical copies scroll by -50% for a seamless loop.
export default function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line bg-card/50 py-7 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10">
            {allSkills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-10 whitespace-nowrap font-display text-2xl md:text-3xl font-semibold text-foreground/25 transition-colors hover:text-foreground"
              >
                {skill}
                <span className="text-gradient text-base">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
