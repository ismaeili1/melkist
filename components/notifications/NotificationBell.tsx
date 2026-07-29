"use client";

import {
  useState,
} from "react";

import styles from "./NotificationBell.module.css";

export function NotificationBell() {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  return (
    <div
      className={
        styles.wrapper
      }
    >
      <button
        type="button"
        className={
          styles.button
        }
        onClick={() =>
          setIsOpen(
            (current) => !current,
          )
        }
        aria-label="هشدارها"
        aria-expanded={
          isOpen
        }
      >
        <span
          aria-hidden="true"
        >
          🔔
        </span>
      </button>

      {isOpen && (
        <div
          className={
            styles.panel
          }
        >
          <p>
            هنوز هشداری وجود ندارد.
          </p>
        </div>
      )}
    </div>
  );
}