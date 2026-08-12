import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./SiteFooter.module.css";

export async function SiteFooter() {
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            MELKIST
          </Link>

          <p>{tFooter("tagline")}</p>
        </div>

        <div className={styles.column}>
          <h3>{tFooter("propertyServicesHeading")}</h3>

          <Link href="/property?status=sale">{t("buy-sale")}</Link>
          <Link href="/rent">{t("rent")}</Link>
          <Link href="/investment">{tFooter("investmentLink")}</Link>
        </div>

        <div className={styles.column}>
          <h3>{tFooter("melkistServicesHeading")}</h3>

          <Link href="/consulting">{tFooter("consultingLink")}</Link>
          <Link href="/architecture">{tFooter("architectureLink")}</Link>
          <Link href="/projects">{tFooter("projectsLink")}</Link>
        </div>

        <div className={styles.column}>
          <h3>{tFooter("quickAccessHeading")}</h3>

          <Link href="/favorites">{t("favorites")}</Link>
          <Link href="/saved-searches">{t("saved-searches")}</Link>
          <Link href="/settings/alerts">{tFooter("settingsAlerts")}</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>{tFooter("copyright")}</span>
        <span>{tFooter("allRightsReserved")}</span>
      </div>
    </footer>
  );
}
