import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./FinalCTASection.module.css";

export function FinalCTASection() {
  return (
    <Section>
      <Container>
        <div className={styles.card}>
          <div>
            <span className={styles.eyebrow}>
              START WITH MELKIST
            </span>

            <h2 className={styles.title}>
              ملک یا پروژه‌ای برای معرفی دارید؟
            </h2>

            <p className={styles.description}>
              ملک، پروژه یا خدمت تخصصی خود را
              در اکوسیستم MELKIST معرفی کنید.
            </p>
          </div>

          <div className={styles.actions}>
            <Link
              href="/property/create"
              className={styles.primaryAction}
            >
              ثبت ملک
            </Link>

            <Link
              href="/consulting"
              className={styles.secondaryAction}
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}