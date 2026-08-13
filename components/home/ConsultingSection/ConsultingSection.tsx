import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./ConsultingSection.module.css";

const consultingServiceIds = [
  "buy-consulting",
  "sale-consulting",
  "rent-consulting",
  "investment-consulting",
  "valuation-consulting",
];

export async function ConsultingSection() {
  const t = await getTranslations("home.consulting");
  const tNav = await getTranslations("nav");

  return (
    <Section>
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>CONSULTING</span>

            <h2 className={styles.title}>
              {t("title1")}
              <br />
              {t("title2")}
            </h2>

            <p className={styles.description}>{t("description")}</p>

            <Link href="/consulting" className={styles.action}>
              {t("action")}
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div className={styles.services}>
            {consultingServiceIds.map((id, index) => (
              <Link key={id} href="/consulting" className={styles.service}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{tNav(id)}</strong>

                <span aria-hidden="true">←</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
