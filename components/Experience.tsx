import {
  Boxes,
  BrainCircuit,
  Gauge,
  MapPin,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Window, { Status, Tag } from "./Window";

interface Role {
  title: string;
  from: string;
  to: string;
  remote?: boolean;
}

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Organization {
  company: string;
  slug: string;
  location: string;
  roles: Role[];
  highlights: Highlight[];
  stack: string[];
}

const experiences: Organization[] = [
  {
    company: "Wissen Technology Private Limited",
    slug: "wissen",
    location: "Bengaluru, India",
    roles: [
      { title: "Associate Software Engineer", from: "May 2025", to: "Present" },
      { title: "Analyst Developer",           from: "Jun 2024", to: "Apr 2025" },
      { title: "Intern, Trainee",             from: "Feb 2024", to: "May 2024", remote: true },
    ],
    highlights: [
      {
        icon: Boxes,
        title: "Monolith to microservices",
        text: "Migrated a legacy Java 8 / Ant / Spring MVC monolith to Spring Boot 2.7 microservices on Java 17 and Gradle 8.",
      },
      {
        icon: Workflow,
        title: "Async messaging & retries",
        text: "Replaced synchronous REST calls with IBM MQ and a database-backed queue, with Spring Retry handling failed downstream calls. Cut API execution time by ~60%.",
      },
      {
        icon: Gauge,
        title: "Query & cache tuning",
        text: "Tuned Spring Data JPA / Hibernate queries and added application-level caching, bringing API latency down by ~70%.",
      },
      {
        icon: ShieldCheck,
        title: "Security hardening",
        text: "Configured Spring Security with CORS, CSRF protection and a strict Content Security Policy to close OWASP Top 10 gaps.",
      },
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Spring Security", "Spring Batch", "IBM MQ", "Gradle", "JUnit 5", "Grafana", "Angular"],
  },
  {
    company: "International Institute of Information Technology Bangalore",
    slug: "iiitb",
    location: "Bengaluru, India",
    roles: [
      { title: "Machine Learning Research Intern", from: "Aug 2023", to: "Oct 2023" },
    ],
    highlights: [
      {
        icon: BrainCircuit,
        title: "Applied ML research",
        text: "Built and evaluated supervised classification models to distinguish participant groups in a health and wellness research study.",
      },
    ],
    stack: ["Machine Learning", "Classification", "Model Evaluation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          description="Production backend work in fintech, plus an early stint in applied machine learning research."
        />

        <div className="flex flex-col gap-5">
          {experiences.map((org) => (
            <Window
              key={org.slug}
              path={`~/exp/${org.slug}`}
              meta={`${org.roles[org.roles.length - 1].from} – ${org.roles[0].to}`}
              bodyClassName="p-6 md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12">
                {/* Company and roles */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{org.company}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-subtle">
                    <MapPin size={13} aria-hidden="true" />
                    {org.location}
                  </p>

                  <ol className="mt-6 border-l border-line">
                    {org.roles.map((role) => {
                      const current = role.to === "Present";
                      return (
                        <li key={role.title} className="relative pb-5 pl-5 last:pb-0">
                          <span
                            aria-hidden="true"
                            className={`absolute -left-[4.5px] top-[7px] h-2 w-2 rounded-full ${
                              current ? "bg-accent" : "border border-line-strong bg-card"
                            }`}
                          />
                          <p className="font-semibold leading-snug">{role.title}</p>
                          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-subtle">
                            <span>
                              {role.from} – {role.to}
                            </span>
                            {current && <Status label="current" />}
                            {role.remote && <span>remote</span>}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* What I did */}
                <ul className="divide-y divide-line">
                  {org.highlights.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-3.5 py-4 first:pt-0 last:pb-0">
                      <Icon size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold">{title}</h4>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-1.5 border-t border-line pt-5">
                {org.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
}
