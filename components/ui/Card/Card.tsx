import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Card.module.css";

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "interactive";

export type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * سبک ظاهری کارت
   */
  variant?: CardVariant;

  /**
   * فاصله داخلی
   */
  padding?: CardPadding;

  /**
   * تعامل‌پذیر بودن کارت
   */
  interactive?: boolean;

  /**
   * عرض کامل
   */
  fullWidth?: boolean;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  interactive = false,
  fullWidth = false,
  className = "",
  ...props
}: CardProps) {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    interactive
      ? styles.interactive
      : "",
    fullWidth
      ? styles.fullWidth
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      {...props}
      className={classNames}
    >
      {children}
    </div>
  );
}