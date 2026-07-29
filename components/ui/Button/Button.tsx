import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize =
  | "sm"
  | "md"
  | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * محتوای داخلی دکمه
   */
  children: ReactNode;

  /**
   * نوع ظاهری دکمه
   */
  variant?: ButtonVariant;

  /**
   * اندازه دکمه
   */
  size?: ButtonSize;

  /**
   * دکمه تمام عرض Container شود
   */
  fullWidth?: boolean;

  /**
   * وضعیت پردازش
   */
  loading?: boolean;

  /**
   * متن قابل دسترس برای Screen Reader
   */
  loadingText?: string;

  /**
   * آیکون ابتدای دکمه
   */
  startIcon?: ReactNode;

  /**
   * آیکون انتهای دکمه
   */
  endIcon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  loadingText = "در حال پردازش...",
  startIcon,
  endIcon,
  disabled = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? (
        <span className={styles.loadingContent}>
          <span
            className={styles.spinner}
            aria-hidden="true"
          />

          <span>{loadingText}</span>
        </span>
      ) : (
        <>
          {startIcon && (
            <span
              className={styles.icon}
              aria-hidden="true"
            >
              {startIcon}
            </span>
          )}

          <span className={styles.label}>
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
        </>
      )}
    </button>
  );
}