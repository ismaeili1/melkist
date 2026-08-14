"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import type { z } from "zod";
import { useRouter } from "@/i18n/navigation";
import { LoginSchema } from "@/lib/validation/schemas/auth.schema";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import SubmitButton from "../buttons/SubmitButton";

type LoginFormValues = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const t = useTranslations("auth.login");
  const tErrors = useTranslations("auth.errors");
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit(values: LoginFormValues) {
    setServerError(null);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setServerError(tErrors("invalidCredentials"));
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>{t("title")}</h1>

      <EmailField
        label={t("emailLabel")}
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        label={t("passwordLabel")}
        error={errors.password?.message}
        {...register("password")}
      />

      {serverError && <p role="alert">{serverError}</p>}

      <SubmitButton
        title={t("submit")}
        loadingTitle={t("submitting")}
        loading={isSubmitting}
      />
    </form>
  );
}
