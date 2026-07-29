"use client";

import type {
  ReactNode,
} from "react";

import styles from "./Toast.module.css";

export type ToastVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface ToastData {
  id: string;

  title?: string;

  message: string;

  variant: ToastVariant;

  duration?: number;
}

export interface ToastProps
  extends ToastData {
  onClose: (
    id: string
  ) => void;
}

export function Toast({
  id,
  title,
  message,
  variant,
  onClose,
}: ToastProps) {
  return (
    <div
      className={[
        styles.toast,
        styles[variant],
      ].join(" ")}
      role={
        variant === "error"
          ? "alert"
          : "status"
      }
    >
      <div
        className={styles.icon}
        aria-hidden="true"
      >
        {variant === "success" && "✓"}
        {variant === "error" && "×"}
        {variant === "warning" && "!"}
        {variant === "info" && "i"}
      </div>

      <div
        className={styles.content}
      >
        {title && (
          <strong
            className={styles.title}
          >
            {title}
          </strong>
        )}

        <p
          className={styles.message}
        >
          {message}
        </p>
      </div>

      <button
        type="button"
        className={
          styles.closeButton
        }
        onClick={() => {
          onClose(id);
        }}
        aria-label="بستن اعلان"
      >
        ×
      </button>
    </div>
  );
}