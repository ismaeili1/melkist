import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Text.module.css";

export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "caption"
  | "label"
  | "overline";

export type TextWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TextAlign =
  | "start"
  | "center"
  | "end";

export interface TextProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  /**
   * سبک تایپوگرافی
   */
  variant?: TextVariant;

  /**
   * وزن متن
   */
  weight?: TextWeight;

  /**
   * تراز متن
   */
  align?: TextAlign;

  /**
   * رنگ معنایی متن
   */
  tone?:
    | "primary"
    | "secondary"
    | "muted"
    | "inverse"
    | "brand"
    | "accent"
    | "error"
    | "success";

  /**
   * عنصر HTML
   */
  as?: ElementType;

  /**
   * محدود کردن متن به تعداد خطوط
   */
  lineClamp?: 1 | 2 | 3 | 4 | 5;
}

export function Text({
  children,
  variant = "body",
  weight,
  align = "start",
  tone = "primary",
  as,
  lineClamp,
  className = "",
  style,
  ...props
}: TextProps) {
  const Component =
    as ?? getDefaultElement(variant);

  const classNames = [
    styles.text,
    styles[variant],
    styles[`align-${align}`],
    styles[`tone-${tone}`],
    weight ? styles[`weight-${weight}`] : "",
    lineClamp
      ? styles[`line-clamp-${lineClamp}`]
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classNames}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

function getDefaultElement(
  variant: TextVariant,
): ElementType {
  switch (variant) {
    case "display":
      return "h1";

    case "h1":
      return "h1";

    case "h2":
      return "h2";

    case "h3":
      return "h3";

    case "h4":
      return "h4";

    case "caption":
      return "small";

    case "label":
      return "span";

    case "overline":
      return "span";

    case "body":
    case "body-sm":
    default:
      return "p";
  }
}