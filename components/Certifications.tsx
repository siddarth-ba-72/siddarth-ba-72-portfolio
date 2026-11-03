import { ArrowUpRight, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

const certifications = [
  {
    title: "Full Stack Generative AI & Agentic AI",
    issuer: "Udemy",
    slug: "udemy",
    year: "2026",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fa9eebc2-c77e-4fcc-8a8d-2b2c0960c0ae.pdf",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    slug: "anthropic",
    year: "2026",
    credentialUrl: "https://verify.skilljar.com/c/5ndwysottdjq",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Certifications" description="Recent coursework in generative and agentic AI." />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <Window
              key={cert.title}
              path={`~/certifications/${cert.slug}`}
              meta={cert.year}
              className="transition-colors hover:border-line-strong"
              bodyClassName="flex h-full flex-col p-6"
            >
              <h3 className="flex items-start gap-2.5 text-lg font-semibold leading-snug">
                <BadgeCheck size={19} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {cert.title}
              </h3>
              <p className="mt-1.5 pl-[29px] text-sm text-muted">
                {cert.issuer} · {cert.year}
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the ${cert.title} credential`}
                  className="group/link inline-flex items-center gap-1.5 font-mono text-sm transition-colors hover:text-accent"
                >
                  <span className="text-accent">$</span>
                  view credential
                  <ArrowUpRight size={14} className="text-subtle transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
}
