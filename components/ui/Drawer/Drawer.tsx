"use client";

import {
  useEffect,
  useRef,
} from "react";

import type {
  ReactNode,
} from "react";

import styles from "./Drawer.module.css";

export type DrawerSide =
  | "left"
  | "right"
  | "top"
  | "bottom";

export type DrawerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface DrawerProps {
  open: boolean;

  onClose: () => void;

  children: ReactNode;

  title?: string;

  description?: string;

  side?: DrawerSide;

  size?: DrawerSize;

  closeOnOverlayClick?: boolean;

  closeOnEscape?: boolean;

  showCloseButton?: boolean;
}

export function Drawer({
  open,
  onClose,
  children,
  title,
  description,
  side = "right",
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}: DrawerProps) {
  const drawerRef =
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
      drawerRef.current?.focus();
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const drawerClassNames = [
    styles.drawer,
    styles[side],
    styles[size],
  ]
    .join(" ");

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

      <aside
        ref={drawerRef}
        className={drawerClassNames}
        role="dialog"
        aria-modal="true"
        aria-labelledby={
          title
            ? "drawer-title"
            : undefined
        }
        aria-describedby={
          description
            ? "drawer-description"
            : undefined
        }
        tabIndex={-1}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <header
          className={styles.header}
        >
          <div
            className={styles.heading}
          >
            {title && (
              <h2
                id="drawer-title"
                className={styles.title}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                id="drawer-description"
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
              aria-label="بستن پنل"
            >
              ×
            </button>
          )}
        </header>

        <div
          className={styles.content}
        >
          {children}
        </div>
      </aside>
    </div>
  );
}