
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function BuySellPage() {
  return (
    <>
      

      <RoutePlaceholder
        data={{
          eyebrow: "خرید و فروش ملک",
          title: "ملک مناسب خود را پیدا کنید",
          description:
            "جست‌وجو و بررسی فرصت‌های خرید و فروش ملک با اطلاعات ساختاریافته و قابل اعتماد.",
          primaryAction: "شروع جست‌وجوی ملک",
          primaryHref: "/property",
        }}
      />
    </>
  );
}