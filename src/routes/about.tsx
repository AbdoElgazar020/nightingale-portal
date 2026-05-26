import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import campusImg from "@/assets/about-campus.jpg";
import { Target, Eye, HeartHandshake, Users, BookOpen, Trophy, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن المدرسة — أكاديمية النخبة للتمريض" },
      {
        name: "description",
        content: "تعرف على رسالة ورؤية أكاديمية النخبة للتمريض الثانوية، إنجازاتنا، وقيادتنا الأكاديمية.",
      },
      { property: "og:title", content: "عن أكاديمية النخبة للتمريض" },
      { property: "og:description", content: "إعداد كوادر تمريضية وفق المعايير الدولية." },
      { property: "og:image", content: campusImg },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "+١٢٠٠", label: "خريج متميز" },
  { value: "+٥٠", label: "عضو هيئة تدريس" },
  { value: "١٥", label: "معمل سريري" },
  { value: "٢٤", label: "عام من العطاء" },
];

const leaders = [
  { name: "أ.د. سامي الراشد", role: "عميد الأكاديمية" },
  { name: "د. ندى الشهري", role: "وكيل الشؤون الأكاديمية" },
  { name: "د. خالد الحربي", role: "رئيس قسم التدريب السريري" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded-full bg-medical-teal/10 text-medical-teal text-[11px] font-bold tracking-wider uppercase mb-5">
              عن الأكاديمية
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-medical-dark leading-tight mb-6 text-balance">
              صرحٌ تعليميّ يُعدّ رواد <span className="text-medical-teal">الرعاية الصحية</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              تأسست أكاديمية النخبة للتمريض الثانوية لتكون مؤسسة رائدة في التعليم الصحي المتخصص،
              نجمع بين أحدث المناهج العلمية، التدريب العملي المكثف، والقيم المهنية والإنسانية،
              لتخريج كوادر قادرة على الإسهام في تطوير المنظومة الصحية وفق أعلى المعايير الدولية.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-border/60">
              <img src={campusImg} alt="مبنى أكاديمية النخبة" loading="lazy" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "رسالتنا", text: "إعداد كوادر تمريضية مؤهلة علمياً ومهنياً وأخلاقياً لتلبية احتياجات القطاع الصحي." },
            { icon: Eye, title: "رؤيتنا", text: "أن نكون المرجع الأول في التعليم التمريضي الثانوي على المستوى الإقليمي." },
            { icon: HeartHandshake, title: "قيمنا", text: "الجودة، الإنسانية، النزاهة المهنية، والتعلم المستمر مدى الحياة." },
          ].map((c) => (
            <div key={c.title} className="bg-card rounded-3xl p-8 ring-1 ring-border/60 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all">
              <div className="size-12 rounded-2xl bg-medical-teal/10 grid place-items-center mb-5">
                <c.icon className="size-6 text-medical-teal" />
              </div>
              <h3 className="font-display text-xl font-bold text-medical-dark mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-medical-dark rounded-[2.5rem] p-12 text-white relative overflow-hidden">
          <div className="absolute -top-32 -left-32 size-72 bg-medical-teal/15 blur-3xl rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-medical-teal num mb-2">
                  {s.value}
                </div>
                <p className="text-white/60 text-sm uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="ما يميزنا"
          title="بيئة تعليمية متكاملة"
          description="نوفر لطلابنا كل ما يحتاجونه للتفوق الأكاديمي والمهني."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BookOpen, title: "مناهج معتمدة", text: "وفق المعايير الدولية" },
            { icon: Stethoscope, title: "تدريب سريري", text: "في أرقى المستشفيات التعليمية" },
            { icon: Users, title: "هيئة تدريس متميزة", text: "خبراء في مجالاتهم" },
            { icon: Trophy, title: "اعتمادات دولية", text: "شراكات مع جامعات عالمية" },
          ].map((h) => (
            <div key={h.title} className="p-6 rounded-3xl bg-medical-soft border border-border/60">
              <div className="size-10 rounded-xl bg-white grid place-items-center mb-4">
                <h.icon className="size-5 text-medical-teal" />
              </div>
              <h3 className="font-display font-bold text-medical-dark mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="القيادة الأكاديمية" title="فريق إدارة الأكاديمية" />
        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((l) => (
            <div key={l.name} className="bg-card rounded-3xl p-8 ring-1 ring-border/60 text-center">
              <div className="size-20 rounded-full bg-gradient-to-br from-medical-teal/20 to-medical-blue/30 mx-auto mb-5 grid place-items-center">
                <span className="font-display font-bold text-medical-dark text-xl">
                  {l.name.split(" ").slice(-1)[0]?.[0]}
                </span>
              </div>
              <h3 className="font-display font-bold text-medical-dark text-lg">{l.name}</h3>
              <p className="text-sm text-medical-teal font-medium mt-1">{l.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
