"use client";

import styles from "./Input.module.css";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function EmailInput({
  value,
  onChange,
  error,
}: EmailInputProps) {
  return (
    <div className={styles.field}>

      <label className={styles.label}>
        ایمیل
      </label>

      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        type="email"
        autoComplete="email"
        placeholder="example@email.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}

    </div>
  );
}