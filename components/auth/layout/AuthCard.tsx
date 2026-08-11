import type { ReactNode } from "react";
import styles from "../styles/card.module.css";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <section className={styles.card}>
      {children}
    </section>
  );
}
