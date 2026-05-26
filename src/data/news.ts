import gradImg from "@/assets/news-graduation.jpg";
import simImg from "@/assets/news-simulation.jpg";
import seminarImg from "@/assets/news-seminar.jpg";
import campusImg from "@/assets/about-campus.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import type { NewsItem } from "@/components/NewsCard";

export const news: NewsItem[] = [
  {
    title: "حفل تخرج الدفعة العاشرة من قسم الرعاية الحرجة",
    excerpt:
      "احتفلت الأكاديمية بتخريج كوكبة جديدة من الكوادر التمريضية المتميزة بحضور قيادات الصحة والتعليم.",
    category: "فعاليات",
    date: "٢٤ مايو ٢٠٢٥",
    image: gradImg,
    tone: "teal",
  },
  {
    title: "تحديث معامل المحاكاة السريرية بأحدث التقنيات العالمية",
    excerpt:
      "تم الانتهاء من تجهيز المعمل الرقمي الجديد لمحاكاة حالات الطوارئ والرعاية الحرجة عالية الدقة.",
    category: "أكاديمي",
    date: "١٨ مايو ٢٠٢٥",
    image: simImg,
    tone: "blue",
  },
  {
    title: "ندوة دولية حول أخلاقيات المهنة وتحديات التمريض الحديث",
    excerpt:
      "استضافت الأكاديمية وفداً من كبار الخبراء لمناقشة الجانب الإنساني في الرعاية الصحية.",
    category: "ندوات",
    date: "١٢ مايو ٢٠٢٥",
    image: seminarImg,
    tone: "teal",
  },
  {
    title: "افتتاح المبنى الجديد لقسم تمريض الأطفال",
    excerpt:
      "ضمن خطة التوسع تم افتتاح المبنى الجديد المخصص لتدريب طلاب قسم تمريض الأطفال.",
    category: "إعلانات",
    date: "٠٧ مايو ٢٠٢٥",
    image: campusImg,
    tone: "amber",
  },
  {
    title: "ورشة عمل عن مهارات التواصل مع المرضى",
    excerpt:
      "نظمت إدارة التدريب ورشة عمل مكثفة لتطوير مهارات التواصل بين الطلاب والمرضى.",
    category: "تدريب",
    date: "٠٢ مايو ٢٠٢٥",
    image: gal1,
    tone: "teal",
  },
  {
    title: "زيارة ميدانية لطلاب السنة الثالثة لمستشفى الملك فهد",
    excerpt:
      "تعرف الطلاب خلال الزيارة على بيئة العمل الفعلية وأقسام الطوارئ والعمليات.",
    category: "فعاليات",
    date: "٢٨ أبريل ٢٠٢٥",
    image: gal2,
    tone: "blue",
  },
];
