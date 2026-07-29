import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./ConsultingSection.module.css";

const consultingServices = [
  "مشاوره خرید ملک",
  "مشاوره فروش ملک",
  "مشاوره رهن و اجاره",
  "مشاوره سرمایه‌گذاری",
  "ارزیابی و ارزش‌گذاری ملک",
];

export function ConsultingSection() {
  return (
    <Section>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              CONSULTING
            </span>

            <h2 className={styles.title}>
              قبل از تصمیم بزرگ،
              <br />
              درست تصمیم بگیرید
            </h2>

            <p className={styles.description}>
              با استفاده از مشاوره تخصصی ملکیست،
              مسیر خرید، فروش، اجاره و سرمایه‌گذاری
              را با اطلاعات دقیق‌تر طی کنید.
            </p>

            <Link
              href="/consulting"
              className={styles.action}
            >
              دریافت مشاوره
              <span aria-hidden="true">
                ←
              </span>
            </Link>
          </div>

          <div className={styles.services}>
            {consultingServices.map(
              (service, index) => (
                <Link
                  key={service}
                  href="/consulting"
                  className={styles.service}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {service}
                  </strong>

                  <span aria-hidden="true">
                    ←
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}