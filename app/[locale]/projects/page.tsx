import { getTranslations } from "next-intl/server";
import { RoutePlaceholder } from "@/components/navigation/RoutePlaceholder";

export default async function ProjectsPage() {
  const t = await getTranslations("placeholders.projects");

  return (
    <RoutePlaceholder
      data={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        description: t("description"),
        primaryAction: t("primaryAction"),
        primaryHref: "/projects",
      }}
    />
  );
}
