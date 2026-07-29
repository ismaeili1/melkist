import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Grid.module.css";

export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 12;

export type GridGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * تعداد ستون‌ها در دسکتاپ
   */
  columns?: GridColumns;

  /**
   * تعداد ستون‌ها در موبایل
   */
  mobileColumns?: 1 | 2;

  /**
   * تعداد ستون‌ها در تبلت
   */
  tabletColumns?: 1 | 2 | 3 | 4;

  /**
   * فاصله بین آیتم‌ها
   */
  gap?: GridGap;

  /**
   * حداقل عرض خودکار هر آیتم
   */
  minItemWidth?: string;

  /**
   * تمام عرض والد
   */
  fullWidth?: boolean;
}

export function Grid({
  children,
  columns = 3,
  mobileColumns = 1,
  tabletColumns = 2,
  gap = "md",
  minItemWidth,
  fullWidth = false,
  className = "",
  style,
  ...props
}: GridProps) {
  const classNames = [
    styles.grid,
    styles[`columns-${columns}`],
    styles[`mobile-columns-${mobileColumns}`],
    styles[`tablet-columns-${tabletColumns}`],
    styles[`gap-${gap}`],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      style={{
        ...style,
        ...(minItemWidth
          ? {
              "--melkist-grid-min-width": minItemWidth,
            }
          : {}),
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}