import type { ReactNode } from "react";

// Flat card with a window bar: three muted dots, a mono path, and optional meta on the right.
export default function Window({
  path,
  meta,
  children,
  className = "",
  bodyClassName = "p-6",
}: {
  path: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-card border border-line bg-card ${className}`}>
      <div className="flex h-10 shrink-0 items-center gap-1.5 border-b border-line bg-raised px-4">
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-line-strong" />
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-line-strong" />
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-line-strong" />
        <span className="ml-3 truncate font-mono text-xs text-subtle">{path}</span>
        {meta && <span className="ml-auto shrink-0 pl-3 font-mono text-xs text-subtle">{meta}</span>}
      </div>
      <div className={`flex-1 ${bodyClassName}`}>{children}</div>
    </div>
  );
}

// Small status marker: a still dot plus a word, so the meaning never rests on color alone.
export function Status({ label, tone = "accent" }: { label: string; tone?: "accent" | "muted" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${tone === "accent" ? "text-accent" : "text-subtle"}`}>
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${tone === "accent" ? "bg-accent" : "bg-subtle"}`}
      />
      {label}
    </span>
  );
}

export function Tag({ children, size = "sm" }: { children: ReactNode; size?: "sm" | "md" }) {
  const sizing =
    size === "md"
      ? "px-3 py-1.5 text-sm font-medium text-fg"
      : "px-2 py-1 text-xs text-muted";
  return (
    <span className={`inline-flex items-center rounded-md border border-line-strong bg-inset font-mono ${sizing}`}>
      {children}
    </span>
  );
}
