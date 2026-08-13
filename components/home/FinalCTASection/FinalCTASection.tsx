import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./FinalCTASection.module.css";

export async function FinalCTASection() {
  const t = await getTranslations("home.finalCta");
  const tActions = await getTranslations("actions");

  return (
    <Section>
      <Container>
        <div className={styles.card}>
          <div>
            <span className={styles.eyebrow}>START WITH MELKIST</span>

            <h2 className={styles.title}>{t("title")}</h2>

            <p className={styles.description}>{t("description")}</p>
          </div>

          <div className={styles.actions}>
            <Link href="/property/create" className={styles.primaryAction}>
              {tActions("createListing")}
            </Link>

            <Link href="/consulting" className={styles.secondaryAction}>
              {t("consultAction")}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
