import type {
  ReactNode,
} from "react";

import styles from "./PageShell.module.css";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({
  children,
  className,
}: PageShellProps) {
  const pageClassName = [
    styles.pageShell,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={pageClassName}
    >
      {children}
    </div>
  );
}
