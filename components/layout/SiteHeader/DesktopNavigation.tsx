"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  mainNavigation,
} from "@/components/navigation/navigation.config";

import styles from "./SiteHeader.module.css";

function isNavigationItemActive(
  pathname: string,
  href: string,
) {
  const hrefPath = href.split("?")[0];

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return (
    pathname === hrefPath ||
    pathname.startsWith(`${hrefPath}/`)
  );
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className={styles.desktopNavigation}
      aria-label="منوی اصلی"
    >
      <ul
        className={styles.navigationList}
      >
        {mainNavigation.map((item) => {
          const isActive =
            isNavigationItemActive(
              pathname,
              item.href,
            );

          return (
            <li
              key={item.id}
              className={styles.navigationItem}
            >
              <Link
                href={item.href}
                className={[
                  styles.navigationLink,
                  isActive
                    ? styles.activeNavigationLink
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}