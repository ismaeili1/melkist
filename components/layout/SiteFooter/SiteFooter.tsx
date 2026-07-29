import Link from "next/link";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer
      className={styles.footer}
    >
      <div
        className={styles.container}
      >
        <div
          className={styles.brand}
        >
          <Link
            href="/"
            className={styles.logo}
          >
            MELKIST
          </Link>

          <p>
            پلتفرم هوشمند خدمات املاک،
            معماری و سرمایه‌گذاری.
          </p>
        </div>

        <div
          className={styles.column}
        >
          <h3>
            خدمات ملکی
          </h3>

          <Link href="/property?status=sale">
            خرید و فروش
          </Link>

          <Link href="/rent">
            رهن و اجاره
          </Link>

          <Link href="/investment">
            سرمایه‌گذاری
          </Link>
        </div>

        <div
          className={styles.column}
        >
          <h3>
            خدمات MELKIST
          </h3>

          <Link href="/consulting">
            مشاوره
          </Link>

          <Link href="/architecture">
            معماری
          </Link>

          <Link href="/projects">
            پروژه‌ها
          </Link>
        </div>

        <div
          className={styles.column}
        >
          <h3>
            دسترسی سریع
          </h3>

          <Link href="/favorites">
            علاقه‌مندی‌ها
          </Link>

          <Link href="/saved-searches">
            جستجوهای ذخیره‌شده
          </Link>

          <Link href="/settings/alerts">
            تنظیمات هشدارها
          </Link>
        </div>
      </div>

      <div
        className={styles.bottom}
      >
        <span>
          © 2026 MELKIST
        </span>

        <span>
          تمامی حقوق محفوظ است.
        </span>
      </div>
    </footer>
  );
}