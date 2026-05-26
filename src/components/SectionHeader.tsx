import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "start" | "center";
}

export function SectionHeader({ eyebrow, title, description, action, align = "start" }: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end gap-6 mb-12 ${
        align === "center" ? "text-center md:items-center md:flex-col" : "justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}>
        {eyebrow && (
          <span className="inline-block px-3 py-1 rounded-full bg-medical-teal/10 text-medical-teal text-[11px] font-bold tracking-wider uppercase mb-4">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-medical-dark leading-tight text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
