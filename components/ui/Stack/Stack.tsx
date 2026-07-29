import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Stack.module.css";

export type StackDirection =
  | "vertical"
  | "horizontal";

export type StackGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";

export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * جهت چیدمان
   */
  direction?: StackDirection;

  /**
   * فاصله بین عناصر
   */
  gap?: StackGap;

  /**
   * تراز در محور مخالف
   */
  align?: StackAlign;

  /**
   * نحوه توزیع عناصر
   */
  justify?: StackJustify;

  /**
   * اجازه شکستن در چیدمان افقی
   */
  wrap?: boolean;

  /**
   * تمام عرض والد
   */
  fullWidth?: boolean;
}

export function Stack({
  children,
  direction = "vertical",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  fullWidth = false,
  className = "",
  ...props
}: StackProps) {
  const classNames = [
    styles.stack,
    styles[direction],
    styles[`gap-${gap}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    wrap ? styles.wrap : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      {...props}
    >
      {children}
    </div>
  );
}