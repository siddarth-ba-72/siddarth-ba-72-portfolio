import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export const socials: {
  label: string;
  handle: string;
  href: string;
  icon: ComponentType<{ size?: number }>;
  external?: boolean;
}[] = [
  { label: "GitHub", handle: "siddarth-ba-72", href: "https://github.com/siddarth-ba-72", icon: GithubIcon, external: true },
  { label: "LinkedIn", handle: "siddarth-ambannavar", href: "https://www.linkedin.com/in/siddarth-ambannavar", icon: LinkedinIcon, external: true },
  { label: "Email", handle: "siddarth.ba02@gmail.com", href: "mailto:siddarth.ba02@gmail.com", icon: Mail },
];

// Square icon buttons, used in the navbar and footer.
export default function SocialLinks({ className = "", only }: { className?: string; only?: string[] }) {
  const items = only ? socials.filter((s) => only.includes(s.label)) : socials;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="grid h-9 w-9 place-items-center rounded-md border border-line bg-card text-muted transition-colors hover:border-line-strong hover:text-fg"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
