import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./FeaturedPropertiesSection.module.css";

const propertyIds = ["property1", "property2", "property3"] as const;

export async function FeaturedPropertiesSection() {
  const t = await getTranslations("home.featuredProperties");

  return (
    <Section variant="muted">
      <Container>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>{t("eyebrow")}</span>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>

          <Link href="/property" className={styles.viewAll}>
            {t("viewAll")}
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {propertyIds.map((id) => {
            const title = t(`${id}Title`);

            return (
              <article key={id} className={styles.card}>
                <div className={styles.image} aria-label={t("sampleImageAlt", { title })}>
                  <span>MELKIST</span>
                </div>

                <div className={styles.content}>
                  <span className={styles.type}>{t(`${id}Type`)}</span>

                  <h3 className={styles.cardTitle}>{title}</h3>

                  <p className={styles.location}>{t(`${id}Location`)}</p>

                  <p className={styles.details}>{t(`${id}Details`)}</p>

                  <div className={styles.footer}>
                    <span>{t("priceOnRequest")}</span>

                    <Link href="/property" className={styles.cardLink}>
                      {t("viewLabel")}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
