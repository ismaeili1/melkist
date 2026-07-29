import {
  useId,
} from "react";

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Input.module.css";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export type InputState =
  | "default"
  | "error"
  | "success";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  /**
   * عنوان فیلد
   */
  label?: string;

  /**
   * متن راهنما
   */
  helperText?: string;

  /**
   * متن خطا
   */
  errorMessage?: string;

  /**
   * وضعیت موفقیت
   */
  successMessage?: string;

  /**
   * آیکون ابتدای فیلد
   */
  startIcon?: ReactNode;

  /**
   * آیکون انتهای فیلد
   */
  endIcon?: ReactNode;

  /**
   * اندازه فیلد
   */
  size?: InputSize;

  /**
   * حالت خطا
   */
  error?: boolean;

  /**
   * حالت موفقیت
   */
  success?: boolean;

  /**
   * عرض کامل
   */
  fullWidth?: boolean;
}

export function Input({
  id,
  label,
  helperText,
  errorMessage,
  successMessage,
  startIcon,
  endIcon,
  size = "md",
  error = false,
  success = false,
  fullWidth = true,
  className = "",
  disabled = false,
  required = false,
  ...props
}: InputProps) {
  
  const reactId = useId();

const generatedId =
  id ?? `melkist-input-${reactId}`;

  const describedBy = [
    helperText
      ? `${generatedId}-helper`
      : "",
    error && errorMessage
      ? `${generatedId}-error`
      : "",
    success && successMessage
      ? `${generatedId}-success`
      : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const classNames = [
    styles.wrapper,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    styles.input,
    styles[size],
    startIcon ? styles.hasStartIcon : "",
    endIcon ? styles.hasEndIcon : "",
    error ? styles.error : "",
    success ? styles.success : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {label && (
        <label
          htmlFor={generatedId}
          className={styles.label}
        >
          {label}

          {required && (
            <span
              className={styles.required}
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {startIcon && (
          <span
            className={styles.startIcon}
            aria-hidden="true"
          >
            {startIcon}
          </span>
        )}

        <input
          {...props}
          id={generatedId}
          className={inputClassNames}
          disabled={disabled}
          required={required}
          aria-invalid={
            error ? true : undefined
          }
          aria-describedby={describedBy}
        />

        {endIcon && (
          <span
            className={styles.endIcon}
            aria-hidden="true"
          >
            {endIcon}
          </span>
        )}
      </div>

      {error && errorMessage ? (
        <p
          id={`${generatedId}-error`}
          className={styles.errorMessage}
        >
          {errorMessage}
        </p>
      ) : success && successMessage ? (
        <p
          id={`${generatedId}-success`}
          className={styles.successMessage}
        >
          {successMessage}
        </p>
      ) : helperText ? (
        <p
          id={`${generatedId}-helper`}
          className={styles.helperText}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}