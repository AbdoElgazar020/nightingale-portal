import { ArrowLeft } from "lucide-react";

export interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  tone?: "teal" | "blue" | "amber";
}

const toneStyles: Record<string, string> = {
  teal: "bg-medical-teal/10 text-medical-teal",
  blue: "bg-medical-blue/10 text-medical-blue",
  amber: "bg-amber-500/10 text-amber-700",
};

export function NewsCard({ item }: { item: NewsItem }) {
  const tone = toneStyles[item.tone ?? "teal"];
  return (
    <article className="group bg-card rounded-3xl overflow-hidden ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <div className="aspect-[4/3] overflow-hidden bg-medical-soft">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${tone}`}>
            {item.category}
          </span>
          <span className="num text-[11px] text-muted-foreground">{item.date}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-medical-dark leading-snug mb-2 group-hover:text-medical-teal transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-5">
          {item.excerpt}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-medical-dark group/link"
        >
          اقرأ المزيد
          <ArrowLeft className="size-4 transition-transform group-hover/link:-translate-x-1" />
        </a>
      </div>
    </article>
  );
}
