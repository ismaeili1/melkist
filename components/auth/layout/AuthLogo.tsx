"use client";

import Link from "next/link";
import styles from "./AuthLogo.module.css";

interface AuthLogoProps {
  showSubtitle?: boolean;
}

export default function AuthLogo({
  showSubtitle = true,
}: AuthLogoProps) {
  return (
    <Link href="/" className={styles.logoWrapper}>

      <div className={styles.logoIcon}>
        M
      </div>

      <div className={styles.textArea}>

        <h2 className={styles.title}>
          MELKIST
        </h2>

        {showSubtitle && (
          <span className={styles.subtitle}>
            Smart Real Estate Platform
          </span>
        )}

      </div>

    </Link>
  );
}