import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <Section
      className={styles.heroSection}
    >
      <Container>
        <div
          className={styles.hero}
        >
          <div
            className={styles.content}
          >
            <p
              className={styles.eyebrow}
            >
              MELKIST REAL ESTATE & ARCHITECTURE
            </p>

            <h1
              className={styles.title}
            >
              مسیر هوشمندانه‌تر
              <span>
                ملک + معماری
              </span>
            </h1>

            <p
              className={styles.description}
            >
              ملکیست بستری برای جست‌وجو، خرید، فروش،
              رهن و اجاره ملک، سرمایه‌گذاری و دریافت
              خدمات تخصصی معماری و ساختمان است.
            </p>

            <div
              className={styles.actions}
            >
              <Link
                href="/property"
                className={styles.primaryAction}
              >
                جست‌وجوی ملک
              </Link>

              <Link
                href="/consulting"
                className={styles.secondaryAction}
              >
                دریافت مشاوره
              </Link>
            </div>
          </div>

          <div
            className={styles.visual}
            aria-hidden="true"
          >
            <div
              className={styles.visualCard}
            >
              <img
                src="/brand/logo/melkist-logo-Mark.png"
                alt=""
                className={styles.mark}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
