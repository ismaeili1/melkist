"use client";

import {
  useRef,
  useState,
} from "react";

import Image from "next/image";

import Link from "next/link";

import {
  DesktopNavigation,
} from "./DesktopNavigation";

import {
  HeaderActions,
} from "./HeaderActions";

import {
  MobileNavigation,
} from "./MobileNavigation";

import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

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
    <header
      className={styles.header}
    >
      <div
        className={
          styles.headerContainer
        }
      >
        <div
          className={
            styles.headerStart
          }
        >
          <Link
  href="/"
  className={styles.logo}
  aria-label="ملکیست - صفحه اصلی"
>
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

        <div
          className={
            styles.desktopHeaderActions
          }
        >
          <HeaderActions />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={
            styles.mobileMenuButton
          }
          onClick={openMobileMenu}
          aria-label="باز کردن منوی اصلی"
          aria-expanded={
            mobileMenuOpen
          }
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileNavigation
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
}