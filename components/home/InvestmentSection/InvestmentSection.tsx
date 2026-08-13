import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./InvestmentSection.module.css";

const opportunityIds = ["project1", "project2"] as const;

export async function InvestmentSection() {
  const t = await getTranslations("home.investment");

  return (
    <Section variant="brand">
      <Container>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>DEVELOPMENT & INVESTMENT</span>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>

          <Link href="/projects" className={styles.viewAll}>
            {t("viewAll")}
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {opportunityIds.map((id) => (
            <Link key={id} href="/projects" className={styles.card}>
              <span className={styles.category}>{t(`${id}Category`)}</span>

              <h3>{t(`${id}Title`)}</h3>

              <p>{t(`${id}Description`)}</p>

              <span className={styles.action}>
                {t("detailsLabel")}
                <span aria-hidden="true">←</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
