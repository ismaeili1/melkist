
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function ConsultingPage() {
  return (
    <>
      

      <RoutePlaceholder
        data={{
          eyebrow: "خدمات مشاوره MELKIST",
          title: "تصمیم بهتر، با شناخت دقیق‌تر",
          description:
            "خدمات مشاوره تخصصی برای بررسی، تحلیل و تصمیم‌گیری در حوزه ملک، ساختمان و سرمایه‌گذاری.",
          primaryAction: "درخواست مشاوره",
          primaryHref: "/consulting",
        }}
      />
    </>
  );
}