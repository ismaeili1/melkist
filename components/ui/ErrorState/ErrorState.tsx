import type {
  ReactNode,
} from "react";

import {
  Button,
} from "@/components/ui/Button";

import styles from "./ErrorState.module.css";

export type ErrorStateVariant =
  | "default"
  | "network"
  | "server"
  | "permission"
  | "not-found";

export interface ErrorStateProps {
  title: string;

  description?: string;

  icon?: ReactNode;

  actionLabel?: string;

  onAction?: () => void;

  secondaryActionLabel?: string;

  onSecondaryAction?: () => void;

  variant?: ErrorStateVariant;
}

export function ErrorState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  variant = "default",
}: ErrorStateProps) {
  return (
    <section
      className={[
        styles.errorState,
        styles[variant],
      ].join(" ")}
      role="alert"
      aria-live="assertive"
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
          className={styles.actions}
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