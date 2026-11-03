import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Window, { Status } from "./Window";
import { socials } from "./SocialLinks";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const resumeUrl = `${basePath}/Siddarth_Ambannavar_Resume.pdf`;

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get in touch"
          description="I'm open to full-time roles, freelance projects, and interesting collaborations. Download my resume or reach out directly."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <Window path="~/contact" meta={<Status label="open to opportunities" />} bodyClassName="p-0">
            <ul className="divide-y divide-line">
              {socials.map(({ label, handle, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-inset"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-raised text-muted group-hover:text-fg">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-subtle">{label}</span>
                      <span className="block truncate font-mono text-[15px]">{handle}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="ml-auto shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Window>

          <Window path="~/resume" meta="pdf" bodyClassName="flex flex-col p-6">
            <p className="font-mono text-sm break-all text-muted">Siddarth_Ambannavar_Resume.pdf</p>
            <p className="mt-3 text-2xl font-bold tracking-tight">Resume</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">Download a copy, or read it in your browser.</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href={resumeUrl}
                download
                className="inline-flex h-11 items-center gap-2 rounded-md bg-solid px-5 text-sm font-semibold text-solid-fg transition-opacity hover:opacity-90"
              >
                <Download size={16} />
                Download resume
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong bg-card px-5 text-sm font-semibold transition-colors hover:border-fg/40"
              >
                <ExternalLink size={16} />
                Open in browser
              </a>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}
