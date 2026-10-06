import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials: {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number }>;
  external?: boolean;
}[] = [
  { label: "GitHub", href: "https://github.com/siddarth-ba-72", icon: GithubIcon, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siddarth-ambannavar", icon: LinkedinIcon, external: true },
  { label: "Email", href: "mailto:siddarth.ba02@gmail.com", icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card backdrop-blur text-muted hover:text-foreground hover:border-accent/50 hover:-translate-y-0.5 transition-all"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
