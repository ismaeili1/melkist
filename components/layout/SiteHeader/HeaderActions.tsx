"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NotificationBell } from "@/components/notifications";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./SiteHeader.module.css";

export function HeaderActions() {
  const t = useTranslations("actions");

  return (
    <div className={styles.headerActions}>
      <LanguageSwitcher />

      <NotificationBell />

      <Link href="/login" className={styles.loginLink}>
        {t("login")}
      </Link>

      <Link href="/property/create" className={styles.createListingButton}>
        {t("createListing")}
      </Link>
    </div>
  );
}
