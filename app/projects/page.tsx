
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default function ProjectsPage() {
  return (
    <>
      

      <RoutePlaceholder
        data={{
          eyebrow: "پروژه‌های MELKIST",
          title: "پروژه‌هایی برای ساختن آینده",
          description:
            "معرفی پروژه‌های ساختمانی، توسعه‌ای و فرصت‌های منتخب برای بررسی و مشارکت.",
          primaryAction: "مشاهده پروژه‌ها",
          primaryHref: "/projects",
        }}
      />
    </>
  );
}