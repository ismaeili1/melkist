import Link from "next/link";
import styles from "./RoutePlaceholder.module.css";

export type RoutePlaceholderData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  primaryHref: string;
};

type RoutePlaceholderProps = {
  data: RoutePlaceholderData;
};

export function RoutePlaceholder({
  data,
}: RoutePlaceholderProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            {data.eyebrow}
          </span>

          <h1 className={styles.title}>
            {data.title}
          </h1>

          <p className={styles.description}>
            {data.description}
          </p>

          <div className={styles.actions}>
            <Link
              href={data.primaryHref}
              className={styles.primaryAction}
            >
              {data.primaryAction}
            </Link>

            <Link
              href="/"
              className={styles.secondaryAction}
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}