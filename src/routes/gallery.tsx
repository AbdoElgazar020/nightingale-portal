import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import gradImg from "@/assets/news-graduation.jpg";
import simImg from "@/assets/news-simulation.jpg";
import seminarImg from "@/assets/news-seminar.jpg";
import campusImg from "@/assets/about-campus.jpg";
import lab from "@/assets/hero-lab.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "معرض الصور — أكاديمية النخبة للتمريض" },
      {
        name: "description",
        content: "لقطات من الحياة الأكاديمية والتدريب السريري في أكاديمية النخبة للتمريض.",
      },
      { property: "og:title", content: "معرض الصور" },
      { property: "og:description", content: "لقطات من فعاليات وأنشطة الأكاديمية." },
      { property: "og:image", content: lab },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: lab, caption: "المعمل المركزي للمحاكاة السريرية" },
  { src: gradImg, caption: "حفل تخرج الدفعة العاشرة" },
  { src: gal1, caption: "تدريب على قياس الضغط" },
  { src: simImg, caption: "غرفة محاكاة العناية الحرجة" },
  { src: gal2, caption: "دروس علم التشريح" },
  { src: seminarImg, caption: "ندوة دولية" },
  { src: gal3, caption: "تدريب على التقنيات السريرية" },
  { src: campusImg, caption: "المبنى الرئيسي للأكاديمية" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="لحظات من الأكاديمية"
        title="معرض الصور"
        description="لقطات حقيقية من فصولنا، معاملنا، فعالياتنا، ومناسبات تخريج طلابنا."
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={() => setOpen(it.src)}
            className="group mb-5 w-full break-inside-avoid rounded-3xl overflow-hidden bg-medical-soft ring-1 ring-border/60 relative block text-right"
          >
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/85 via-medical-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <p className="text-white font-display font-bold">{it.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-medical-dark/90 backdrop-blur-md grid place-items-center p-6 animate-fade-up"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 left-6 size-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white"
            aria-label="إغلاق"
          >
            <X className="size-5" />
          </button>
          <img src={open} alt="" className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}
