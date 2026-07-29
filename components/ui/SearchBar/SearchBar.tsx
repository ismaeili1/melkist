"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  IconButton,
} from "@/components/ui/IconButton";

import styles from "./SearchBar.module.css";

export interface SearchBarProps {
  /**
   * مقدار اولیه جستجو
   */
  defaultValue?: string;

  /**
   * مقدار کنترل‌شده
   */
  value?: string;

  /**
   * تغییر مقدار
   */
  onChange?: (
    value: string
  ) => void;

  /**
   * اجرای جستجو
   */
  onSearch?: (
    value: string
  ) => void;

  /**
   * Placeholder
   */
  placeholder?: string;

  /**
   * نمایش دکمه جستجو
   */
  showButton?: boolean;

  /**
   * متن دکمه
   */
  buttonLabel?: string;

  /**
   * غیرفعال
   */
  disabled?: boolean;

  /**
   * در حال جستجو
   */
  loading?: boolean;

  /**
   * اندازه
   */
  size?: "sm" | "md" | "lg";

  /**
   * کلاس سفارشی
   */
  className?: string;
}

export function SearchBar({
  defaultValue = "",
  value,
  onChange,
  onSearch,
  placeholder = "شهر، محله یا نوع ملک را جستجو کنید",
  showButton = true,
  buttonLabel = "جستجو",
  disabled = false,
  loading = false,
  size = "md",
  className = "",
}: SearchBarProps) {
  const [
    internalValue,
    setInternalValue,
  ] = useState(defaultValue);

  const currentValue =
    value !== undefined
      ? value
      : internalValue;

  function handleChange(
    nextValue: string
  ) {
    if (
      value === undefined
    ) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      disabled ||
      loading
    ) {
      return;
    }

    onSearch?.(
      currentValue.trim()
    );
  }

  const classNames = [
    styles.searchBar,
    styles[size],
    disabled
      ? styles.disabled
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      className={classNames}
      onSubmit={handleSubmit}
      role="search"
    >
      <div
        className={styles.inputWrapper}
      >
        <span
          className={styles.searchIcon}
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
            />

            <path
              d="m20 20-4-4"
            />
          </svg>
        </span>

        <input
          type="search"
          value={currentValue}
          onChange={(event) => {
            handleChange(
              event.target.value
            );
          }}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={styles.input}
          aria-label="جستجوی ملک"
        />

        {currentValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => {
              handleChange("");
            }}
            aria-label="پاک کردن جستجو"
            disabled={disabled || loading}
          >
            ×
          </button>
        )}
      </div>

      {showButton && (
        <button
          type="submit"
          className={styles.submitButton}
          disabled={
            disabled ||
            loading
          }
        >
          {loading ? (
            <span
              className={styles.spinner}
              aria-hidden="true"
            />
          ) : (
            buttonLabel
          )}
        </button>
      )}
    </form>
  );
}