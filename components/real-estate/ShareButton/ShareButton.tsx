"use client";

import {
  useState,
} from "react";

import styles from "./ShareButton.module.css";

type ShareButtonProps = {
  title: string;
  text?: string;
  className?: string;
};

export function ShareButton({
  title,
  text,
  className,
}: ShareButtonProps) {
  const [
    isCopied,
    setIsCopied,
  ] = useState(false);

  const [
    isSharing,
    setIsSharing,
  ] = useState(false);

  async function handleShare() {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

    const shareUrl =
      window.location.href;

    const shareText =
      text ??
      `مشاهده این ملک در MELKIST`;

    if (
      typeof navigator.share ===
      "function"
    ) {
      try {
        setIsSharing(true);

        await navigator.share({
          title,
          text: shareText,
          url: shareUrl,
        });

        return;
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name ===
            "AbortError"
        ) {
          return;
        }
      } finally {
        setIsSharing(false);
      }
    }

    try {
      await navigator.clipboard.writeText(
        shareUrl,
      );

      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 2200);
    } catch {
      setIsCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={[
        styles.button,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleShare}
      disabled={isSharing}
      aria-label="اشتراک‌گذاری این ملک"
      title="اشتراک‌گذاری این ملک"
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        ↗
      </span>

      <span>
        {isSharing
          ? "در حال اشتراک‌گذاری..."
          : isCopied
            ? "لینک کپی شد"
            : "اشتراک‌گذاری"}
      </span>
    </button>
  );
}