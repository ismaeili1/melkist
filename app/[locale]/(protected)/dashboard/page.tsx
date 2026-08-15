import { getTranslations } from "next-intl/server";
import { requireAuth } from "@/lib/auth/guards/requireAuth";

export default async function DashboardPage() {
  const user = await requireAuth();
  const t = await getTranslations("dashboard");

  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("welcome", { email: user.email })}</p>
    </main>
  );
}
