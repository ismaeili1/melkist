"use client";

import { ReactNode } from "react";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className={styles.page}>
      <div className={styles.overlay} />

      <section className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>

            {subtitle && (
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            )}
          </header>

          <div className={styles.body}>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}