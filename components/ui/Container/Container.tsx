import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Container.module.css";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export interface ContainerProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  /**
   * حداکثر عرض Container
   */
  size?: ContainerSize;

  /**
   * حذف فاصله افقی داخلی
   */
  noPadding?: boolean;

  /**
   * عنصر HTML مورد استفاده
   */
  as?: "div" | "main" | "section" | "article";
}

export function Container({
  children,
  size = "xl",
  noPadding = false,
  as: Component = "div",
  className = "",
  ...props
}: ContainerProps) {
  const classNames = [
    styles.container,
    styles[size],
    noPadding ? styles.noPadding : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classNames}
      {...props}
    >
      {children}
    </Component>
  );
}