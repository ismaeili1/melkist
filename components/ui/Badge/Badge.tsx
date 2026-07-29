import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Badge.module.css";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  /**
   * نوع رنگ و معنای Badge
   */
  variant?: BadgeVariant;

  /**
   * اندازه Badge
   */
  size?: BadgeSize;

  /**
   * نمایش به صورت کاملاً گرد
   */
  pill?: boolean;

  /**
   * آیکون ابتدای Badge
   */
  startIcon?: ReactNode;

  /**
   * آیکون انتهای Badge
   */
  endIcon?: ReactNode;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  pill = false,
  startIcon,
  endIcon,
  className = "",
  ...props
}: BadgeProps) {
  const classNames = [
    styles.badge,
    styles[variant],
    styles[size],
    pill ? styles.pill : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      {...props}
      className={classNames}
    >
      {startIcon && (
        <span
          className={styles.icon}
          aria-hidden="true"
        >
          {startIcon}
        </span>
      )}

      <span className={styles.content}>
        {children}
      </span>

      {endIcon && (
        <span
          className={styles.icon}
          aria-hidden="true"
        >
          {endIcon}
        </span>
      )}
    </span>
  );
}