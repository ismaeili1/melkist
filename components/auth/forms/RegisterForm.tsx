"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import type { z } from "zod";
import { useRouter } from "@/i18n/navigation";
import { RegisterSchema } from "@/lib/validation/schemas/auth.schema";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import TextField from "../fields/TextField";
import SubmitButton from "../buttons/SubmitButton";

type RegisterFormValues = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const tErrors = useTranslations("auth.errors");
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  async function onSubmit(values: RegisterFormValues) {
    setServerError(null);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setServerError(tErrors("registrationFailed"));
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>{t("title")}</h1>

      <TextField
        id="firstName"
        label={t("firstNameLabel")}
        error={errors.firstName?.message}
        {...register("firstName")}
      />

      <TextField
        id="lastName"
        label={t("lastNameLabel")}
        error={errors.lastName?.message}
        {...register("lastName")}
      />

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
