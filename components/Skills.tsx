import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import Window, { Tag } from "./Window";

// "AI / Emerging" -> "ai-emerging"
const toKey = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          description="The languages, frameworks and platforms I use to design, build and ship reliable software."
        />

        <Window path="~/siddarth/skills.yml" meta="yaml" bodyClassName="px-5 py-2 sm:px-6">
          <ul className="grid lg:grid-cols-2 lg:gap-x-12">
            {skillCategories.map((category) => (
              <li
                key={category.label}
                className="flex flex-col gap-2.5 border-t border-line py-4 first:border-t-0 sm:flex-row sm:items-baseline sm:gap-4 lg:[&:nth-child(2)]:border-t-0"
              >
                <h3 className="w-32 shrink-0 font-mono text-[15px]">
                  <span className="sr-only">{category.label}</span>
                  <span aria-hidden="true">
                    <span className="text-muted">{toKey(category.label)}</span>
                    <span className="text-subtle">:</span>
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill} size="md">{skill}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Window>
      </div>
    </section>
  );
}
