import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — أكاديمية النخبة للتمريض" },
      {
        name: "description",
        content: "تواصل مع أكاديمية النخبة للتمريض: العنوان، الهاتف، البريد الإلكتروني، ونموذج التواصل المباشر.",
      },
      { property: "og:title", content: "تواصل مع أكاديمية النخبة" },
      { property: "og:description", content: "نسعد بالإجابة على استفساراتكم." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: MapPin, label: "العنوان", value: "حي الريان، المجمع الطبي التعليمي، الطابق الرابع" },
  { icon: Phone, label: "الهاتف", value: "+966 12 345 6789", ltr: true },
  { icon: Mail, label: "البريد", value: "info@nursing-academy.edu" },
  { icon: Clock, label: "أوقات العمل", value: "الأحد – الخميس · ٨:٠٠ – ٤:٠٠" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        eyebrow="تواصل معنا"
        title="نحن هنا للإجابة على استفساراتكم"
        description="سواء كنت طالباً، ولي أمر، أو شريكاً مؤسسياً، يسعدنا تلقي رسالتك."
      />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <div className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 ring-1 ring-border/60">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="الاسم الكامل" placeholder="أدخل اسمك" />
              <Field label="البريد الإلكتروني" placeholder="email@example.com" type="email" />
            </div>
            <Field label="الموضوع" placeholder="موضوع الرسالة" />
            <div>
              <label className="block text-sm font-medium text-medical-dark mb-2">الرسالة</label>
              <textarea
                rows={6}
                required
                placeholder="اكتب رسالتك هنا..."
                className="w-full bg-medical-soft border border-border rounded-2xl px-4 py-3.5 text-medical-dark outline-none focus:ring-2 ring-medical-teal/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-medical-dark text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-medical-blue transition-all active:scale-[0.98] shadow-lg shadow-medical-dark/10"
            >
              <Send className="size-4" />
              إرسال الرسالة
            </button>
            {sent && (
              <p className="text-medical-teal text-sm font-semibold animate-fade-up">
                ✓ تم استلام رسالتك بنجاح. سنتواصل معك قريباً.
              </p>
            )}
          </form>
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {info.map((i) => (
              <div key={i.label} className="bg-card rounded-2xl p-5 ring-1 ring-border/60 flex items-start gap-3">
                <div className="size-10 rounded-xl bg-medical-teal/10 grid place-items-center shrink-0">
                  <i.icon className="size-4 text-medical-teal" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{i.label}</p>
                  <p
                    dir={i.ltr ? "ltr" : undefined}
                    className={`text-sm font-semibold text-medical-dark leading-snug ${i.ltr ? "text-right num" : ""}`}
                  >
                    {i.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-border/60 bg-medical-soft aspect-square relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <MapPin className="size-8 text-medical-teal mx-auto mb-2" />
                <p className="font-display font-bold text-medical-dark">حي الريان</p>
                <p className="text-xs text-muted-foreground mt-1">المجمع الطبي التعليمي</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.72_0.13_185_/_0.15)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `linear-gradient(oklch(0.72 0.13 185 / 0.2) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.13 185 / 0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium text-medical-dark mb-2">{label}</label>
      <input
        required
        {...props}
        className="w-full bg-medical-soft border border-border rounded-2xl px-4 py-3.5 text-medical-dark outline-none focus:ring-2 ring-medical-teal/50 transition-all"
      />
    </div>
  );
}
