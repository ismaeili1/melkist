
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function ArchitecturePage() {
  return (
    <>
      
      <RoutePlaceholder
        data={{
          eyebrow: "خدمات معماری و ساختمان",
          title: "از ایده تا اجرای پروژه",
          description:
            "طراحی معماری، معماری داخلی، نما، لنداسکیپ، نظارت، اجرا، بازسازی و خدمات تخصصی تصویری.",
          primaryAction: "مشاهده خدمات معماری",
          primaryHref: "/architecture",
        }}
      />
    </>
  );
}