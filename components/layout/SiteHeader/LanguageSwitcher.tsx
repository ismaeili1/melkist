"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: event.target.value });
  }

  return (
    <select value={locale} onChange={handleChange} aria-label="Language / زبان">
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {LOCALE_LABELS[loc]}
        </option>
      ))}
    </select>
  );
}
