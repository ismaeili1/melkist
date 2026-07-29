import styles from "./Image.module.css";

export interface ImageErrorProps {
  alt?: string;
}

export function ImageError({
  alt = "تصویر در دسترس نیست",
}: ImageErrorProps) {
  return (
    <div
      className={styles.error}
      role="img"
      aria-label={alt}
    >
      تصویر در دسترس نیست
    </div>
  );
}