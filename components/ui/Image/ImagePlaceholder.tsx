import styles from "./Image.module.css";

export interface ImagePlaceholderProps {
  label?: string;
}

export function ImagePlaceholder({
  label = "در حال بارگذاری تصویر...",
}: ImagePlaceholderProps) {
  return (
    <div
      className={styles.placeholder}
      role="status"
      aria-label={label}
    >
      {label}
    </div>
  );
}