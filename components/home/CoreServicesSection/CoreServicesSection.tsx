import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./CoreServicesSection.module.css";

const services = [
  {
    id: "consulting",
    number: "01",
    title: "خدمات مشاوره",
    description:
      "مشاوره تخصصی برای خرید، فروش، رهن، اجاره و سرمایه‌گذاری.",
    href: "/consulting",
  },
  {
    id: "buy-sale",
    number: "02",
    title: "خرید و فروش",
    description:
      "جست‌وجو و معرفی فرصت‌های خرید و فروش انواع املاک.",
    href: "/buy-sell",
  },
  {
    id: "rent",
    number: "03",
    title: "رهن و اجاره",
    description:
      "دسترسی به گزینه‌های رهن کامل، اجاره و اجاره کوتاه‌مدت.",
    href: "/rent",
  },
  {
    id: "investment",
    number: "04",
    title: "مشارکت و سرمایه‌گذاری",
    description:
      "فرصت‌های مشارکت در ساخت و سرمایه‌گذاری در پروژه‌های ملکی.",
    href: "/investment",
  },
  {
    id: "architecture",
    number: "05",
    title: "خدمات تخصصی معماری و ساختمان",
    description:
      "از طراحی و معماری داخلی تا نظارت، اجرا و بازسازی.",
    href: "/architecture",
  },
];

export function CoreServicesSection() {
  return (
    <Section>
      <Container>
        <div
          className={styles.header}
        >
          <div>
            <p
              className={styles.eyebrow}
            >
              MELKIST SERVICES
            </p>

            <h2
              className={styles.title}
            >
              همه‌چیز برای تصمیم بهتر
            </h2>
          </div>

          <p
            className={styles.description}
          >
            خدمات ملکی و معماری ملکیست در یک مسیر یکپارچه
            برای تصمیم‌گیری دقیق‌تر در اختیار شماست.
          </p>
        </div>

        <div
          className={styles.grid}
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={styles.card}
            >
              <span
                className={styles.number}
              >
                {service.number}
              </span>

              <h3
                className={styles.cardTitle}
              >
                {service.title}
              </h3>

              <p
                className={styles.cardDescription}
              >
                {service.description}
              </p>

              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                ←
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
