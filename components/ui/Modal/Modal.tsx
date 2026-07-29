"use client";

import {
  useEffect,
  useRef,
} from "react";

import type {
  ReactNode,
} from "react";

import styles from "./Modal.module.css";

export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface ModalProps {
  open: boolean;

  onClose: () => void;

  children: ReactNode;

  title?: string;

  description?: string;

  size?: ModalSize;

  closeOnOverlayClick?: boolean;

  closeOnEscape?: boolean;

  showCloseButton?: boolean;
}

export function Modal({
  open,
  onClose,
  children,
  title,
  description,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}: ModalProps) {
  const dialogRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !closeOnEscape) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    closeOnEscape,
    onClose,
  ]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const classNames = [
    styles.dialog,
    styles[size],
  ].join(" ");

  return (
    <div
      className={styles.root}
      role="presentation"
    >
      <div
        className={styles.overlay}
        onMouseDown={() => {
          if (closeOnOverlayClick) {
            onClose();
          }
        }}
      />

      <div
        ref={dialogRef}
        className={classNames}
        role="dialog"
        aria-modal="true"
        aria-labelledby={
          title
            ? "modal-title"
            : undefined
        }
        aria-describedby={
          description
            ? "modal-description"
            : undefined
        }
        tabIndex={-1}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          className={
            styles.header
          }
        >
          <div
            className={
              styles.heading
            }
          >
            {title && (
              <h2
                id="modal-title"
                className={
                  styles.title
                }
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                id="modal-description"
                className={
                  styles.description
                }
              >
                {description}
              </p>
            )}
          </div>

          {showCloseButton && (
            <button
              type="button"
              className={
                styles.closeButton
              }
              onClick={onClose}
              aria-label="بستن پنجره"
            >
              ×
            </button>
          )}
        </div>

        <div
          className={
            styles.content
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}