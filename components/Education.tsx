import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

const education = [
  {
    institution: "B.M.S College of Engineering",
    slug: "bmsce",
    degree: "Bachelor of Engineering",
    stream: "Artificial Intelligence & Machine Learning",
    duration: "2020 – 2024",
    gpa: "8.5 / 10",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-b border-line px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" />

        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <Window key={edu.slug} path={`~/education/${edu.slug}`} meta={edu.duration} bodyClassName="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
                    <GraduationCap size={20} className="shrink-0 text-accent" aria-hidden="true" />
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-muted">
                    {edu.degree} · {edu.stream}
                  </p>
                </div>
                <p className="self-start rounded-md border border-accent-line bg-accent-soft px-3 py-1.5 font-mono text-sm text-accent md:self-auto">
                  GPA {edu.gpa}
                </p>
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
}
