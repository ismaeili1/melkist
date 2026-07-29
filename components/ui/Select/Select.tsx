import {
  useId,
} from "react";

import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import styles from "./Select.module.css";

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size"
  > {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  successMessage?: string;

  options: SelectOption[];

  placeholder?: string;

  size?: SelectSize;

  error?: boolean;

  success?: boolean;

  fullWidth?: boolean;

  startIcon?: ReactNode;
}

export function Select({
  id,
  label,
  helperText,
  errorMessage,
  successMessage,
  options,
  placeholder,
  size = "md",
  error = false,
  success = false,
  fullWidth = true,
  startIcon,
  className = "",
  disabled = false,
  required = false,
  ...props
}: SelectProps) {
  const reactId = useId();

  const generatedId =
    id ?? `melkist-select-${reactId}`;

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

  const selectClassNames = [
    styles.select,
    styles[size],
    startIcon ? styles.hasStartIcon : "",
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

      <div className={styles.selectWrapper}>
        {startIcon && (
          <span
            className={styles.startIcon}
            aria-hidden="true"
          >
            {startIcon}
          </span>
        )}

        <select
          {...props}
          id={generatedId}
          className={selectClassNames}
          disabled={disabled}
          required={required}
          aria-invalid={
            error ? true : undefined
          }
          aria-describedby={describedBy}
        >
          {placeholder && (
            <option
              value=""
              disabled
            >
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span
          className={styles.chevron}
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
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