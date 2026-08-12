import Link from "next/link";

import styles from "./not-found.module.css";

export default function PropertyNotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>
          404
        </span>

        <h1>
          ملک موردنظر پیدا نشد
        </h1>

        <p>
          ممکن است ملک حذف شده باشد یا شناسه واردشده
          معتبر نباشد.
        </p>

        <Link
          href="/property"
          className={styles.button}
        >
          بازگشت به جست‌وجوی املاک
        </Link>
      </div>
    </main>
  );
}