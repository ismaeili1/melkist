import type { ReactNode } from "react";
import { AuthCard } from "./index";
import styles from "../styles/layout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={styles.page}>
      <AuthCard>
        {children}
      </AuthCard>
    </main>
  );
}
