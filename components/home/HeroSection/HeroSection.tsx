import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./HeroSection.module.css";

export async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <Section className={styles.heroSection}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>MELKIST REAL ESTATE & ARCHITECTURE</p>

            <h1 className={styles.title}>
              {t("title1")}
              <span>{t("title2")}</span>
            </h1>

            <p className={styles.description}>{t("description")}</p>

            <div className={styles.actions}>
              <Link href="/property" className={styles.primaryAction}>
                {t("searchAction")}
              </Link>

              <Link href="/consulting" className={styles.secondaryAction}>
                {t("consultAction")}
              </Link>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualCard}>
              <img
                src="/brand/logo/melkist-logo-Mark.svg"
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
