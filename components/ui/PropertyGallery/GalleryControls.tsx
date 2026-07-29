"use client";

import styles from "./PropertyGallery.module.css";

interface GalleryControlsProps {
  activeIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onFullscreen: () => void;
}

export function GalleryControls({
  activeIndex,
  total,
  onPrevious,
  onNext,
  onFullscreen,
}: GalleryControlsProps) {
  return (
    <div className={styles.controls}>
      <button
        type="button"
        aria-label="تصویر قبلی"
        onClick={onPrevious}
      >
        ‹
      </button>

      <span
        className={styles.counter}
        aria-live="polite"
      >
        {activeIndex + 1} / {total}
      </span>

      <button
        type="button"
        aria-label="تصویر بعدی"
        onClick={onNext}
      >
        ›
      </button>

      <button
        type="button"
        aria-label="نمایش تمام صفحه"
        onClick={onFullscreen}
      >
        ⛶
      </button>
    </div>
  );
}