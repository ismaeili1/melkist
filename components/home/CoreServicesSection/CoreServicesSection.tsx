import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout-system/Container";
import { Section } from "@/components/layout-system/Section";
import styles from "./CoreServicesSection.module.css";

const services = [
  { id: "property", number: "01", href: "/property" },
  { id: "professional-services", number: "02", href: "/professional-services" },
  { id: "construction-equipment", number: "03", href: "/construction-equipment" },
  { id: "projects", number: "04", href: "/projects" },
  { id: "global-opportunities", number: "05", href: "/global-opportunities" },
  { id: "magazine", number: "06", href: "/magazine" },
];

export async function CoreServicesSection() {
  const t = await getTranslations("home.coreServices");
  const tNav = await getTranslations("nav");

  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>MELKIST SERVICES</p>
            <h2 className={styles.title}>{t("title")}</h2>
          </div>

          <p className={styles.description}>{t("description")}</p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link key={service.id} href={service.href} className={styles.card}>
              <span className={styles.number}>{service.number}</span>

              <h3 className={styles.cardTitle}>{tNav(service.id)}</h3>

              <p className={styles.cardDescription}>{t(`${service.id}Desc`)}</p>

              <span className={styles.arrow} aria-hidden="true">
                ←
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
