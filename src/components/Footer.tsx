import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-medical-dark text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-11 bg-white rounded-2xl grid place-items-center">
                <span className="size-5 rounded-full border-2 border-medical-dark" />
              </span>
              <span className="font-display font-bold text-xl">أكاديمية النخبة</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              المؤسسة التعليمية الرائدة في إعداد الكوادر التمريضية وفق المعايير الدولية،
              نجمع بين العلم الأكاديمي والتطبيق العملي المكثف.
            </p>
            <div className="flex gap-2 mt-7">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 rounded-xl bg-white/5 hover:bg-medical-teal/90 transition-colors grid place-items-center text-white/80 hover:text-white"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-medical-teal text-sm tracking-wider uppercase">
              روابط سريعة
            </h4>
            <ul className="space-y-3.5 text-sm text-white/65">
              <li><Link to="/about" className="hover:text-white transition-colors">عن المدرسة</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">آخر الأخبار</Link></li>
              <li><Link to="/results" className="hover:text-white transition-colors">نتائج الطلاب</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">معرض الصور</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-medical-teal text-sm tracking-wider uppercase">
              للطلاب وأولياء الأمور
            </h4>
            <ul className="space-y-3.5 text-sm text-white/65">
              <li><a href="#" className="hover:text-white transition-colors">شروط القبول</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الجدول الدراسي</a></li>
              <li><a href="#" className="hover:text-white transition-colors">المكتبة الرقمية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-medical-teal text-sm tracking-wider uppercase">
              تواصل معنا
            </h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex gap-3 items-start">
                <MapPin className="size-4 text-medical-teal mt-0.5 shrink-0" />
                <span className="leading-relaxed">حي الريان، المجمع الطبي التعليمي، الطابق الرابع</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="size-4 text-medical-teal shrink-0" />
                <span dir="ltr" className="num">+966 12 345 6789</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="size-4 text-medical-teal shrink-0" />
                <span>info@nursing-academy.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>© ٢٠٢٥ أكاديمية النخبة للتمريض الثانوية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
