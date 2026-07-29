import type {
  ReactNode,
} from "react";

import {
  Button,
} from "@/components/ui/Button";

import styles from "./EmptyState.module.css";

export type EmptyStateVariant =
  | "default"
  | "search"
  | "favorites"
  | "listings"
  | "messages";

export interface EmptyStateProps {
  title: string;

  description?: string;

  icon?: ReactNode;

  actionLabel?: string;

  onAction?: () => void;

  secondaryActionLabel?: string;

  onSecondaryAction?: () => void;

  variant?: EmptyStateVariant;
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  variant = "default",
}: EmptyStateProps) {
  return (
    <section
      className={[
        styles.emptyState,
        styles[variant],
      ].join(" ")}
      aria-live="polite"
    >
      {icon && (
        <div
          className={styles.icon}
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <div
        className={styles.content}
      >
        <h2
          className={styles.title}
        >
          {title}
        </h2>

        {description && (
          <p
            className={
              styles.description
            }
          >
            {description}
          </p>
        )}
      </div>

      {(actionLabel ||
        secondaryActionLabel) && (
        <div
          className={
            styles.actions
          }
        >
          {actionLabel &&
            onAction && (
              <Button
                variant="primary"
                onClick={onAction}
              >
                {actionLabel}
              </Button>
            )}

          {secondaryActionLabel &&
            onSecondaryAction && (
              <Button
                variant="secondary"
                onClick={
                  onSecondaryAction
                }
              >
                {
                  secondaryActionLabel
                }
              </Button>
            )}
        </div>
      )}
    </section>
  );
}