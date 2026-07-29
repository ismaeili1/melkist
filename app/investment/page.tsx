
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function InvestmentPage() {
  return (
    <>
      

      <RoutePlaceholder
        data={{
          eyebrow: "مشارکت و سرمایه‌گذاری",
          title: "فرصت‌های ارزش‌آفرین را پیدا کنید",
          description:
            "بررسی فرصت‌های مشارکت در ساخت و سرمایه‌گذاری در پروژه‌های ملکی و ساختمانی.",
          primaryAction: "مشاهده فرصت‌ها",
          primaryHref: "/projects",
        }}
      />
    </>
  );
}