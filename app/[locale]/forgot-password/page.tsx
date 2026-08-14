import { getTranslations } from "next-intl/server";

export default async function ForgotPasswordPage() {
  const t = await getTranslations("auth.forgotPassword");

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
