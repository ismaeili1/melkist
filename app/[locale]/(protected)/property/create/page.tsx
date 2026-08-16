import { getTranslations } from "next-intl/server";

export default async function CreatePropertyPage() {
  const t = await getTranslations("propertyCreate");

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
      }}
    >
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
