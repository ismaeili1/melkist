
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function RentPage() {
  return (
    <>
      

      <RoutePlaceholder
        data={{
          eyebrow: "رهن و اجاره",
          title: "فضای مناسب برای زندگی و کار",
          description:
            "جست‌وجوی ساده‌تر برای رهن و اجاره آپارتمان، ویلا، دفتر، فروشگاه و سایر املاک.",
          primaryAction: "جست‌وجوی املاک اجاره‌ای",
          primaryHref: "/property",
        }}
      />
    </>
  );
}