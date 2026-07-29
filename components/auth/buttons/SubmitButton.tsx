"use client";

import styles from "./Button.module.css";

interface SubmitButtonProps {
  title: string;
  loading?: boolean;
}

export default function SubmitButton({
  title,
  loading = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={styles.button}
      disabled={loading}
    >
      {loading ? (
        <span className={styles.loading}>
          در حال پردازش...
        </span>
      ) : (
        title
      )}
    </button>
  );
}