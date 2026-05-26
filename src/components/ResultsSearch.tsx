import { useState, type FormEvent } from "react";
import { Search, AlertCircle, CheckCircle2 } from "lucide-react";

interface Props {
  variant?: "dark" | "light";
}

export function ResultsSearch({ variant = "dark" }: Props) {
  const [seat, setSeat] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "notfound">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!seat.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      // Demo: any number that starts with 4 returns "found"
      setStatus(seat.trim().startsWith("4") ? "found" : "notfound");
    }, 800);
  };

  const dark = variant === "dark";

  return (
    <div className={dark ? "text-white" : "text-medical-dark"}>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className={`block text-xs font-medium ${dark ? "text-white/60" : "text-muted-foreground"}`}>
          رقم الجلوس
        </label>
        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
            placeholder="مثال: 45820"
            dir="ltr"
            className={`w-full text-right num text-lg rounded-2xl py-4 px-5 transition-all outline-none focus:ring-2 ring-medical-teal/60 ${
              dark
                ? "bg-white/10 border border-white/15 text-white placeholder:text-white/30"
                : "bg-medical-soft border border-border text-medical-dark placeholder:text-muted-foreground"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-medical-teal text-white font-bold py-4 rounded-2xl hover:bg-medical-teal/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-medical-teal/20 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <span className="size-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              جارٍ البحث...
            </>
          ) : (
            <>
              <Search className="size-4" />
              عرض النتيجة
            </>
          )}
        </button>
      </form>

      {status === "found" && (
        <div
          className={`mt-5 p-4 rounded-2xl flex items-start gap-3 animate-fade-up ${
            dark ? "bg-medical-teal/15 border border-medical-teal/30" : "bg-medical-teal/10 border border-medical-teal/20"
          }`}
        >
          <CheckCircle2 className="size-5 text-medical-teal shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className={`font-semibold ${dark ? "text-white" : "text-medical-dark"}`}>
              تم العثور على النتيجة بنجاح
            </p>
            <p className={dark ? "text-white/60 mt-1" : "text-muted-foreground mt-1"}>
              تفضل بزيارة صفحة النتائج لعرض كشف الدرجات التفصيلي.
            </p>
          </div>
        </div>
      )}
      {status === "notfound" && (
        <div className="mt-5 p-4 rounded-2xl flex items-start gap-3 bg-destructive/10 border border-destructive/20 animate-fade-up">
          <AlertCircle className="size-5 text-destructive shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-destructive">لم نتمكن من العثور على هذا الرقم</p>
            <p className={dark ? "text-white/60 mt-1" : "text-muted-foreground mt-1"}>
              تحقق من رقم الجلوس وحاول مرة أخرى.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
