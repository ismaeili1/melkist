import type {
  ReactNode,
} from "react";

import styles from
  "./Section.module.css";

type SectionProps = {
  children: ReactNode;

  className?: string;

  variant?:
    | "default"
    | "muted"
    | "brand";
};

export function Section({
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  return (
    <section
      className={[
        styles.section,
        styles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}