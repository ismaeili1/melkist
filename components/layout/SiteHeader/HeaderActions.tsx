import Link from "next/link";

import {
  NotificationBell,
} from "@/components/notifications";

import styles from "./SiteHeader.module.css";

export function HeaderActions() {
  return (
    <div
      className={
        styles.headerActions
      }
    >
      <NotificationBell />

      <Link
        href="/login"
        className={
          styles.loginLink
        }
      >
        ورود
      </Link>

      <Link
        href="/property/create"
        className={
          styles.createListingButton
        }
      >
        ثبت ملک
      </Link>
    </div>
  );
}