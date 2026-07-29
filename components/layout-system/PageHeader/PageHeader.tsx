import type {
  ReactNode,
} from "react";

import {
  Container,
} from "@/components/layout-system/Container";

import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageHeaderProps) {
  const headerClassName = [
    styles.pageHeader,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={headerClassName}
    >
      <Container>
        <div
          className={styles.content}
        >
          <div
            className={styles.text}
          >
            {eyebrow ? (
              <p
                className={styles.eyebrow}
              >
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={styles.title}
            >
              {title}
            </h1>

            {description ? (
              <p
                className={styles.description}
              >
                {description}
              </p>
            ) : null}
          </div>

          {actions ? (
            <div
              className={styles.actions}
            >
              {actions}
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
