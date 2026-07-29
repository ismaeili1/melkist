import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./IconButton.module.css";

export type IconButtonSize =
  | "sm"
  | "md"
  | "lg";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "danger";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * آیکون دکمه
   */
  children: ReactNode;

  /**
   * اندازه
   */
  size?: IconButtonSize;

  /**
   * نوع ظاهری
   */
  variant?: IconButtonVariant;

  /**
   * توضیح برای Screen Reader
   */
  "aria-label": string;
}

export function IconButton({
  children,
  size = "md",
  variant = "ghost",
  className = "",
  type = "button",
  disabled = false,
  ...props
}: IconButtonProps) {
  const classNames = [
    styles.iconButton,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={classNames}
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        {children}
      </span>
    </button>
  );
}