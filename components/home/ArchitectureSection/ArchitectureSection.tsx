import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./ArchitectureSection.module.css";

const services = [
  "طراحی معماری",
  "معماری داخلی",
  "طراحی نما",
  "طراحی لنداسکیپ",
  "نظارت معماری",
  "اجرای معماری",
  "بازسازی",
  "مدل‌سازی و رندرینگ",
];

export function ArchitectureSection() {
  return (
    <Section>
      <Container>
        <div className={styles.layout}>
          <div>
            <span className={styles.eyebrow}>
              ARCHITECTURE & BUILDING
            </span>

            <h2 className={styles.title}>
              از ایده
              <br />
              تا اجرای پروژه
            </h2>

            <p className={styles.description}>
              خدمات تخصصی معماری و ساختمان ملکیست
              از مرحله ایده و طراحی تا نظارت، اجرا
              و بازسازی در کنار شماست.
            </p>

            <Link
              href="/architecture"
              className={styles.action}
            >
              مشاهده خدمات معماری
              <span aria-hidden="true">
                ←
              </span>
            </Link>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Link
                key={service}
                href="/architecture"
                className={styles.service}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {service}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}