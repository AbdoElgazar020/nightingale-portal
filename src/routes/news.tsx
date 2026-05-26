import { createFileRoute } from "@tanstack/react-router";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { news } from "@/data/news";
import { useState } from "react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "الأخبار والأنشطة — أكاديمية النخبة للتمريض" },
      {
        name: "description",
        content: "أحدث الأخبار والفعاليات والإنجازات في أكاديمية النخبة للتمريض الثانوية.",
      },
      { property: "og:title", content: "أخبار أكاديمية النخبة للتمريض" },
      { property: "og:description", content: "تابع آخر المستجدات والفعاليات." },
      { property: "og:image", content: news[0].image },
    ],
  }),
  component: NewsPage,
});

const categories = ["الكل", "أكاديمي", "فعاليات", "ندوات", "إعلانات", "تدريب"];

function NewsPage() {
  const [active, setActive] = useState("الكل");
  const featured = news[0];
  const filtered = active === "الكل" ? news.slice(1) : news.filter((n) => n.category === active);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="آخر المستجدات"
        title="الأخبار والأنشطة"
        description="آخر الإعلانات الرسمية، الفعاليات، والإنجازات الأكاديمية في الأكاديمية."
      />

      {/* Featured */}
      <article className="grid md:grid-cols-2 gap-8 mb-16 bg-card rounded-3xl overflow-hidden ring-1 ring-border/60 group">
        <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-medical-soft">
          <img
            src={featured.image}
            alt={featured.title}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md bg-medical-teal/10 text-medical-teal text-xs font-bold uppercase tracking-wider">
              مقال مميز · {featured.category}
            </span>
            <span className="num text-xs text-muted-foreground">{featured.date}</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-medical-dark leading-tight mb-4">
            {featured.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
          <a
            href="#"
            className="self-start inline-flex items-center gap-2 px-5 py-3 bg-medical-dark text-white rounded-xl font-semibold hover:bg-medical-blue transition-colors"
          >
            اقرأ التفاصيل
          </a>
        </div>
      </article>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === c
                ? "bg-medical-dark text-white"
                : "bg-medical-soft text-medical-dark hover:bg-medical-teal/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-medical-soft rounded-3xl">
          <p className="text-muted-foreground">لا توجد أخبار في هذا التصنيف حالياً.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((n) => (
            <NewsCard key={n.title} item={n} />
          ))}
        </div>
      )}
    </div>
  );
}
