import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

import styles from "./Skeleton.module.css";

export type SkeletonVariant =
  | "text"
  | "rect"
  | "circle"
  | "rounded";

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;

  width?: string | number;

  height?: string | number;

  animation?: boolean;
}

function normalizeSize(
  value?: string | number
) {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

export function Skeleton({
  variant = "rect",
  width,
  height,
  animation = true,
  className,
  style,
  ...props
}: SkeletonProps) {
  const customStyle: CSSProperties = {
    ...style,

    width: normalizeSize(width),

    height: normalizeSize(height),
  };

  return (
    <div
      className={[
        styles.skeleton,

        styles[variant],

        animation
          ? styles.animated
          : "",

        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={customStyle}
      aria-hidden="true"
      {...props}
    />
  );
}