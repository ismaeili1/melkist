"use client";

import { useState } from "react";
import styles from "./Input.module.css";

interface PasswordInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
}

export default function PasswordInput({
  label = "رمز عبور",
  value,
  onChange,
  error,
  autoComplete = "current-password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
      </label>

      <div className={styles.passwordWrapper}>
        <input
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          type={showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          value={value}
          placeholder="••••••••"
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}