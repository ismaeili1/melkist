"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNavigation } from "@/components/navigation/navigation.config";
import styles from "./SiteHeader.module.css";

function isNavigationItemActive(pathname: string, href: string) {
  const hrefPath = href.split("?")[0];

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
}

export function DesktopNavigation() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");

  return (
    <nav className={styles.desktopNavigation} aria-label={tHeader("mainMenu")}>
      <ul className={styles.navigationList}>
        {mainNavigation.map((item) => {
          const isActive = isNavigationItemActive(pathname, item.href);

          return (
            <li key={item.id} className={styles.navigationItem}>
              <Link
                href={item.href}
                className={[
                  styles.navigationLink,
                  isActive ? styles.activeNavigationLink : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {t(item.id)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
