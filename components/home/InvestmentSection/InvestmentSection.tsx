import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./InvestmentSection.module.css";

const opportunities = [
  {
    id: "project-1",
    category: "پروژه ساختمانی",
    title: "پروژه‌های منتخب ساخت و توسعه",
    description:
      "بررسی و معرفی پروژه‌هایی با ظرفیت توسعه، ساخت و سرمایه‌گذاری.",
  },
  {
    id: "project-2",
    category: "فرصت سرمایه‌گذاری",
    title: "فرصت‌های سرمایه‌گذاری ملکی",
    description:
      "فرصت‌های منتخب برای سرمایه‌گذاران و شرکای پروژه‌های ساختمانی.",
  },
];

export function InvestmentSection() {
  return (
    <Section variant="brand">
      <Container>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              DEVELOPMENT & INVESTMENT
            </span>

            <h2 className={styles.title}>
              پروژه‌هایی برای آینده
            </h2>
          </div>

          <Link
            href="/projects"
            className={styles.viewAll}
          >
            مشاهده پروژه‌ها
            <span aria-hidden="true">
              ←
            </span>
          </Link>
        </div>

        <div className={styles.grid}>
          {opportunities.map((opportunity) => (
            <Link
              key={opportunity.id}
              href="/projects"
              className={styles.card}
            >
              <span className={styles.category}>
                {opportunity.category}
              </span>

              <h3>
                {opportunity.title}
              </h3>

              <p>
                {opportunity.description}
              </p>

              <span className={styles.action}>
                مشاهده جزئیات
                <span aria-hidden="true">
                  ←
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}