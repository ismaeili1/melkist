import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./ArchitectureSection.module.css";

const services: { id: string; fromNav: boolean }[] = [
  { id: "architecture-design", fromNav: true },
  { id: "interior-design", fromNav: true },
  { id: "facadeDesign", fromNav: false },
  { id: "landscape-design", fromNav: true },
  { id: "architecture-supervision", fromNav: true },
  { id: "architecture-execution", fromNav: true },
  { id: "renovation", fromNav: true },
  { id: "modelingRendering", fromNav: false },
];

export async function ArchitectureSection() {
  const t = await getTranslations("home.architecture");
  const tNav = await getTranslations("nav");

  return (
    <Section>
      <Container>
        <div className={styles.layout}>
          <div>
            <span className={styles.eyebrow}>ARCHITECTURE & BUILDING</span>

            <h2 className={styles.title}>
              {t("title1")}
              <br />
              {t("title2")}
            </h2>

            <p className={styles.description}>{t("description")}</p>

            <Link href="/architecture" className={styles.action}>
              {t("action")}
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Link key={service.id} href="/architecture" className={styles.service}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{service.fromNav ? tNav(service.id) : t(service.id)}</strong>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
