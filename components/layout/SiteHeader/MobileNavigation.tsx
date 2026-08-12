"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNavigation } from "@/components/navigation/navigation.config";
import styles from "./SiteHeader.module.css";

export interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

function isNavigationItemActive(pathname: string, href: string) {
  const hrefPath = href.split("?")[0];

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const tActions = useTranslations("actions");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.mobileNavigationOverlay} role="presentation" onClick={onClose}>
      <nav
        id="mobile-navigation"
        className={styles.mobileNavigationPanel}
        aria-label={tHeader("mainMenuMobile")}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.mobileNavigationHeader}>
          <span className={styles.mobileNavigationTitle}>
            {tHeader("mainMenu")}
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.mobileNavigationClose}
            onClick={onClose}
            aria-label={tHeader("closeMenu")}
          >
            ×
          </button>
        </div>

        <ul className={styles.mobileNavigationList}>
          {mainNavigation.map((item) => {
            const isActive = isNavigationItemActive(pathname, item.href);

            return (
              <li key={item.id} className={styles.mobileNavigationItem}>
                <Link
                  href={item.href}
                  className={[
                    styles.mobileNavigationLink,
                    isActive ? styles.mobileNavigationLinkActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.id)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.mobileNavigationActions}>
          <Link href="/login" className={styles.mobileLoginLink} onClick={onClose}>
            {tActions("login")}
          </Link>

          <Link
            href="/property/create"
            className={styles.mobileCreateListingButton}
            onClick={onClose}
          >
            {tActions("createListing")}
          </Link>
        </div>
      </nav>
    </div>
  );
}
