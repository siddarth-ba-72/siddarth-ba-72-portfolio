import type { CSSProperties } from "react";
import { ArrowRight, Download } from "lucide-react";
import Window, { Status } from "./Window";
import ProfilePhoto from "./ProfilePhoto";
import RotatingRole from "./RotatingRole";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const facts = [
  { value: "2+ yrs", label: "Backend, fintech" },
  { value: "2", label: "AI apps live" },
];

// Staggered entrance for the opening screen only; CSS keeps it working without JS.
const rise = (step: number): CSSProperties => ({ animationDelay: `${step * 70}ms` });

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_40%,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-28 md:px-8 md:pt-36 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24">
        {/* Text */}
        <div className="min-w-0">
          <div style={rise(0)} className="animate-rise flex items-center gap-3">
            <p className="inline-flex items-center rounded-full border border-accent-line bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
              <Status label="Open to new opportunities" />
            </p>
          </div>

          <h1
            style={rise(1)}
            className="animate-rise mt-6 text-[3.25rem] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5rem]"
          >
            Siddarth
            <br />
            Ambannavar
          </h1>

          <div style={rise(2)} className="animate-rise mt-5">
            <RotatingRole />
          </div>

          <p style={rise(3)} className="animate-rise mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Backend Engineer with 2 years of experience building and maintaining scalable and resilient enterprise systems
            using Java, Spring Boot, and Angular in the fin-tech domain. Experienced in microservices, batch processing,
            REST API design, and application security. Actively learning Generative AI and Agentic AI application
            development.
          </p>

          <div style={rise(4)} className="animate-rise mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-solid px-5 text-sm font-semibold text-solid-fg transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${basePath}/Siddarth_Ambannavar_Resume.pdf`}
              download
              className="inline-flex h-11 items-center gap-2 rounded-md border border-line-strong bg-card px-5 text-sm font-semibold transition-colors hover:border-fg/40"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <dl style={rise(5)} className="animate-rise mt-10 flex max-w-md gap-12 border-t border-line pt-6">
            {facts.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse gap-1">
                <dt className="text-[13px] text-subtle">{label}</dt>
                <dd className="text-2xl font-bold tracking-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo card: leads the page on small screens, sits right of the text from lg */}
        <div style={rise(0)} className="animate-rise order-first min-w-0 lg:order-none">
          <Window
            path="~/siddarth/profile.png"
            className="max-w-[18rem] sm:max-w-[20rem] lg:ml-auto lg:max-w-[25rem]"
            bodyClassName="p-3"
          >
            <ProfilePhoto
              src={`${basePath}/siddarth_ba_72.png`}
              className="aspect-square w-full rounded-[4px] object-cover"
            />
            <div className="px-2 pb-1.5 pt-4">
              <p className="font-semibold">Associate Software Engineer</p>
              <p className="mt-0.5 text-sm text-muted">Wissen Technology · Bengaluru, IN</p>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}
