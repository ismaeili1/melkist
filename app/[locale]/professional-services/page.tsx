import { getTranslations } from "next-intl/server";
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default async function PlaceholderPage() {
  const t = await getTranslations("placeholders.professionalServices");

  return (
    <RoutePlaceholder
      data={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        description: t("description"),
        primaryAction: t("primaryAction"),
        primaryHref: "/consulting",
      }}
    />
  );
}
