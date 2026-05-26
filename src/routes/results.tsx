import { createFileRoute } from "@tanstack/react-router";
import { ResultsSearch } from "@/components/ResultsSearch";
import { SectionHeader } from "@/components/SectionHeader";
import { ShieldCheck, Clock, FileSearch } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "نتائج الطلاب — أكاديمية النخبة للتمريض" },
      {
        name: "description",
        content: "استعلم عن نتائج الفصل الدراسي بإدخال رقم الجلوس الخاص بالطالب.",
      },
      { property: "og:title", content: "الاستعلام عن النتائج" },
      { property: "og:description", content: "نتائج رسمية معتمدة للفصل الدراسي الحالي." },
    ],
  }),
  component: ResultsPage,
});

const sampleSubjects = [
  { name: "أساسيات التمريض", grade: "٩٢", total: "١٠٠" },
  { name: "علم التشريح ووظائف الأعضاء", grade: "٨٨", total: "١٠٠" },
  { name: "علم الأدوية", grade: "٩٥", total: "١٠٠" },
  { name: "تمريض الأطفال", grade: "٩٠", total: "١٠٠" },
  { name: "أخلاقيات المهنة", grade: "٩٧", total: "١٠٠" },
  { name: "اللغة الإنجليزية الطبية", grade: "٨٥", total: "١٠٠" },
];

function ResultsPage() {
  return (
    <>
      {/* Hero search */}
      <section className="bg-medical-dark text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 size-96 bg-medical-teal/15 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 size-96 bg-medical-blue/50 blur-[120px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 py-24 relative">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-medical-teal/15 text-medical-teal text-xs font-bold tracking-wider uppercase mb-5">
              الفصل الدراسي الثاني · ٢٠٢٤ / ٢٠٢٥
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-balance">
              الاستعلام عن نتائج الطلاب
            </h1>
            <p className="text-white/65 text-lg text-pretty">
              أدخل رقم الجلوس الخاص بالطالب للاطلاع على كشف الدرجات التفصيلي والنتيجة الرسمية.
            </p>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <ResultsSearch variant="dark" />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8 text-center">
            {[
              { icon: ShieldCheck, label: "نتائج معتمدة" },
              { icon: Clock, label: "تحديث فوري" },
              { icon: FileSearch, label: "كشف تفصيلي" },
            ].map((b) => (
              <div key={b.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <b.icon className="size-5 text-medical-teal mx-auto mb-2" />
                <p className="text-xs text-white/70 font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample result */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="نموذج توضيحي"
          title="مثال لكشف درجات الطالب"
          description="هكذا يظهر كشف الدرجات بعد إدخال رقم الجلوس الصحيح."
        />

        <div className="bg-card rounded-3xl ring-1 ring-border/60 overflow-hidden shadow-[var(--shadow-elevated)]">
          <div className="p-6 md:p-8 border-b border-border bg-medical-soft/50 grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">اسم الطالب</p>
              <p className="font-display font-bold text-medical-dark text-lg">عبدالرحمن أحمد محمد</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">رقم الجلوس</p>
              <p className="font-display font-bold text-medical-dark text-lg num">٤٥٨٢٠</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">الحالة</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-bold">
                <span className="size-1.5 rounded-full bg-medical-teal" />
                ناجح بتقدير ممتاز
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-medical-soft/30 border-b border-border">
                <tr>
                  <th className="text-right p-4 font-semibold text-medical-dark">المادة</th>
                  <th className="text-center p-4 font-semibold text-medical-dark">الدرجة</th>
                  <th className="text-center p-4 font-semibold text-medical-dark">من</th>
                  <th className="text-center p-4 font-semibold text-medical-dark">النسبة</th>
                </tr>
              </thead>
              <tbody>
                {sampleSubjects.map((s) => {
                  const pct = Math.round((parseInt(s.grade.replace(/[^0-9]/g, "")) || 90));
                  return (
                    <tr key={s.name} className="border-b border-border/60 last:border-0">
                      <td className="p-4 font-medium text-medical-dark">{s.name}</td>
                      <td className="p-4 text-center font-bold text-medical-teal num">{s.grade}</td>
                      <td className="p-4 text-center text-muted-foreground num">{s.total}</td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-medical-soft rounded-full overflow-hidden">
                            <div
                              className="h-full bg-medical-teal rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-medical-dark text-white">
                <tr>
                  <td className="p-4 font-display font-bold">المجموع الكلي</td>
                  <td className="p-4 text-center font-display font-extrabold text-medical-teal num text-lg">٥٤٧</td>
                  <td className="p-4 text-center font-bold num">٦٠٠</td>
                  <td className="p-4 text-center font-display font-extrabold num">٩١٪</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
