"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderActions } from "./HeaderActions";
import { MobileNavigation } from "./MobileNavigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations("header");

  function openMobileMenu() {
    setMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);

    requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerStart}>
          <Link href="/" className={styles.logo} aria-label={t("homeAriaLabel")}>
            <Image
              src="/brand/logo/melkist-logo.svg"
              alt=""
              width={160}
              height={80}
              priority
              className={styles.logoFull}
            />

            <Image
              src="/brand/logo/melkist-logo-Mark.svg"
              alt=""
              width={48}
              height={48}
              className={styles.logoMark}
            />
          </Link>

          <DesktopNavigation />
        </div>

        <div className={styles.desktopHeaderActions}>
          <HeaderActions />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.mobileMenuButton}
          onClick={openMobileMenu}
          aria-label={t("openMenu")}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileNavigation open={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
