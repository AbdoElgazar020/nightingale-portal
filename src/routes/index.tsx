import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarDays,
  FileDown,
  Sparkles,
  GraduationCap,
  Microscope,
  HeartPulse,
  Award,
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import { ResultsSearch } from "@/components/ResultsSearch";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { news } from "@/data/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أكاديمية النخبة للتمريض — الصفحة الرئيسية" },
      {
        name: "description",
        content:
          "بوابة الطالب في أكاديمية النخبة للتمريض الثانوية: تابع الأخبار، استعلم عن النتائج، وتعرف على البرامج التعليمية.",
      },
      { property: "og:title", content: "أكاديمية النخبة للتمريض الثانوية" },
      {
        property: "og:description",
        content: "بيئة تعليمية أكاديمية وتطبيقية متطورة لتأهيل جيل من رواد الرعاية الصحية.",
      },
      { property: "og:image", content: heroLab },
      { name: "twitter:image", content: heroLab },
    ],
  }),
  component: HomePage,
});

const events = [
  { date: "١٥ مايو", title: "بدء اختبارات الفصل الدراسي الثاني", live: true },
  { date: "٢٢ مايو", title: "ندوة يوم التمريض العالمي" },
  { date: "٠٥ يونيو", title: "فتح باب التقديم للعام الجديد" },
];

const downloads = [
  { name: "دليل الطالب ٢٠٢٥", size: "4.5 MB" },
  { name: "الجدول الدراسي للفصل الثاني", size: "1.2 MB" },
  { name: "اللائحة الداخلية للأكاديمية", size: "920 KB" },
];

function HomePage() {
  return (
    <>
      {/* Bento Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Headline */}
          <div className="md:col-span-8 bg-card rounded-3xl p-8 md:p-12 ring-1 ring-border/60 flex flex-col justify-between min-h-[440px] relative overflow-hidden animate-fade-up">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-medical-teal/40 to-transparent" />
            <div className="absolute -bottom-32 -left-32 size-80 bg-medical-teal/8 rounded-full blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-medical-teal/10 text-medical-teal rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-medical-teal opacity-60 animate-pulse-soft" />
                  <span className="relative inline-flex rounded-full size-2 bg-medical-teal" />
                </span>
                التقديم مفتوح للعام ٢٠٢٥ / ٢٠٢٦
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-medical-dark leading-[1.15] mb-6 text-balance">
                نُعدّ جيلاً يقود مستقبل
                <br />
                <span className="text-medical-teal">الرعاية الصحية</span> بمهارة وإنسانية
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
                المؤسسة التعليمية الرائدة في التمريض الثانوي، نُقدّم بيئة تعليمية وتطبيقية تحاكي أرقى
                المستشفيات العالمية تحت إشراف نخبة من الخبراء.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 relative">
              <Link
                to="/results"
                className="px-6 py-3.5 bg-medical-dark text-white rounded-2xl font-bold hover:bg-medical-blue transition-all active:scale-[0.97] shadow-lg shadow-medical-dark/10"
              >
                عرض النتائج
              </Link>
              <Link
                to="/news"
                className="px-6 py-3.5 bg-white border border-border text-medical-dark rounded-2xl font-bold hover:bg-medical-soft transition-all"
              >
                آخر الأخبار
              </Link>
            </div>
          </div>

          {/* Results Search Card */}
          <div className="md:col-span-4 bg-medical-dark rounded-3xl p-8 text-white relative overflow-hidden animate-fade-up [animation-delay:80ms]">
            <div className="absolute -top-20 -right-20 size-48 bg-medical-teal/20 blur-[80px] rounded-full" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-medical-teal to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <HeartPulse className="size-5 text-medical-teal" />
                <h3 className="font-display text-xl font-bold">الاستعلام عن النتائج</h3>
              </div>
              <p className="text-white/55 text-sm mb-7">
                أدخل رقم الجلوس لعرض كشف الدرجات التفصيلي.
              </p>
              <ResultsSearch variant="dark" />
            </div>
          </div>

          {/* Stat Tiles */}
          {[
            { value: "+١٢٠٠", label: "خريج متميز", icon: GraduationCap, delay: 160 },
            { value: "١٥+", label: "معمل محاكاة", icon: Microscope, delay: 200 },
            { value: "٩٨٪", label: "نسبة التوظيف", icon: Award, delay: 240 },
            { value: "٢٤", label: "عام من التميز", icon: Sparkles, delay: 280 },
          ].map((s) => (
            <div
              key={s.label}
              className="md:col-span-3 bg-card rounded-3xl p-6 ring-1 ring-border/60 animate-fade-up hover:-translate-y-0.5 transition-transform"
              style={{ animationDelay: `${s.delay}ms` }}
            >
              <div className="size-11 bg-medical-soft rounded-2xl grid place-items-center mb-4">
                <s.icon className="size-5 text-medical-teal" />
              </div>
              <div className="font-display text-3xl font-extrabold text-medical-dark num">{s.value}</div>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}

          {/* Hero Image */}
          <div className="md:col-span-8 rounded-3xl overflow-hidden ring-1 ring-border/60 animate-fade-up [animation-delay:320ms] relative bg-medical-soft min-h-[280px]">
            <img
              src={heroLab}
              alt="معمل المحاكاة السريرية في أكاديمية النخبة"
              width={1600}
              height={1024}
              className="size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-medical-dark/70 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">المعمل المركزي</p>
                <p className="font-display font-bold text-lg">بيئة تعليمية تحاكي المستشفيات الحقيقية</p>
              </div>
              <Link
                to="/gallery"
                className="hidden md:inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors"
              >
                المعرض
                <ArrowLeft className="size-4" />
              </Link>
            </div>
          </div>

          {/* Events Timeline */}
          <div className="md:col-span-4 bg-card rounded-3xl p-6 ring-1 ring-border/60 animate-fade-up [animation-delay:360ms] flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-display font-bold text-medical-dark flex items-center gap-2">
                <CalendarDays className="size-4 text-medical-teal" />
                أجندة الفعاليات
              </h4>
              <Link to="/about" className="text-xs text-medical-teal font-semibold hover:underline">
                الكل
              </Link>
            </div>
            <div className="space-y-1 flex-1">
              {events.map((e, i) => (
                <div
                  key={e.title}
                  className={`relative pr-6 py-3 ${i !== events.length - 1 ? "border-b border-border/60" : ""}`}
                >
                  <span
                    className={`absolute right-0 top-4 size-2.5 rounded-full ${
                      e.live ? "bg-medical-teal animate-pulse-soft" : "bg-border"
                    }`}
                  />
                  <p className="num text-xs text-medical-teal font-semibold">{e.date}</p>
                  <p className="text-sm font-bold text-medical-dark mt-0.5">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="آخر المستجدات"
          title="الأخبار والأنشطة الأكاديمية"
          description="تابع فعاليات الأكاديمية، الندوات الطبية، وإنجازات طلابنا في المحافل المختلفة."
          action={
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-medical-teal font-semibold hover:gap-3 transition-all"
            >
              عرض كافة الأخبار
              <ArrowLeft className="size-4" />
            </Link>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.title} item={n} />
          ))}
        </div>
      </section>

      {/* About + Downloads strip */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-card rounded-3xl p-8 md:p-10 ring-1 ring-border/60">
            <span className="inline-block px-3 py-1 rounded-full bg-medical-teal/10 text-medical-teal text-[11px] font-bold tracking-wider uppercase mb-4">
              عن الأكاديمية
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-medical-dark leading-tight mb-5 text-balance">
              مؤسسة تعليمية معتمدة دولياً<br />في إعداد الكوادر التمريضية
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-7">
              نلتزم بمعايير الجودة العالمية في التعليم الصحي، ونعمل على إعداد طلابنا بأحدث المناهج
              العلمية والتطبيقية ليكونوا قادرين على المساهمة بكفاءة في القطاع الصحي.
            </p>
            <div className="flex flex-wrap gap-2">
              {["معتمدون من وزارة الصحة", "شراكات دولية", "أكثر من ١٥ معملاً"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-medical-soft text-sm font-medium text-medical-dark border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 text-medical-dark font-bold hover:text-medical-teal transition-colors"
            >
              اعرف المزيد
              <ArrowLeft className="size-4" />
            </Link>
          </div>

          <div className="md:col-span-5 bg-medical-blue rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 size-48 bg-medical-teal/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <FileDown className="size-5 text-medical-teal" />
                <h3 className="font-display text-xl font-bold">مركز التحميل</h3>
              </div>
              <p className="text-white/55 text-sm mb-6">ملفات وجداول رسمية بصيغة PDF</p>
              <div className="space-y-2.5">
                {downloads.map((d) => (
                  <a
                    key={d.name}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="size-9 rounded-xl bg-red-500/15 text-red-300 grid place-items-center text-[10px] font-bold">
                        PDF
                      </span>
                      <span className="text-sm font-medium">{d.name}</span>
                    </div>
                    <span className="num text-xs text-white/50 group-hover:text-white transition-colors">
                      {d.size}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2.5rem] bg-medical-dark p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-medical-teal to-transparent" />
          <div className="absolute -top-32 -right-32 size-96 bg-medical-teal/15 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 -left-32 size-96 bg-medical-blue/40 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-5 text-balance">
              مستقبلك في الرعاية الصحية يبدأ من هنا
            </h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto mb-9 text-pretty">
              انضم إلى أكاديمية النخبة، وكن جزءاً من جيل التمريض القادم.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-medical-teal text-white rounded-2xl font-bold hover:bg-medical-teal/90 transition-all active:scale-[0.97] shadow-lg shadow-medical-teal/30"
              >
                قدّم الآن
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 bg-white/10 backdrop-blur border border-white/20 text-white rounded-2xl font-bold hover:bg-white/15 transition-colors"
              >
                تعرف على البرامج
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
