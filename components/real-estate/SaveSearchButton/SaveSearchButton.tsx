"use client";

import {
  useState,
} from "react";

import {
  createSavedSearch,
} from "@/lib/saved-searches";

import type {
  SavedSearchFilters,
} from "@/lib/saved-searches";

import styles from "./SaveSearchButton.module.css";

type SaveSearchButtonProps = {
  filters: SavedSearchFilters;
};

export function SaveSearchButton({
  filters,
}: SaveSearchButtonProps) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    name,
    setName,
  ] = useState("");

  const [
    isSaved,
    setIsSaved,
  ] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedName =
      name.trim();

    if (!normalizedName) {
      return;
    }

    createSavedSearch(
      normalizedName,
      filters,
    );

    setIsSaved(true);

    setIsOpen(false);

    setName("");
  }

  if (isSaved) {
    return (
      <button
        type="button"
        className={
          styles.savedButton
        }
        onClick={() =>
          setIsSaved(false)
        }
      >
        ✓ جستجو ذخیره شد
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        className={
          styles.button
        }
        onClick={() =>
          setIsOpen(true)
        }
      >
        ♡ ذخیره این جستجو
      </button>

      {isOpen && (
        <div
          className={
            styles.overlay
          }
          role="presentation"
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className={
              styles.modal
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="save-search-title"
          >
            <div
              className={
                styles.header
              }
            >
              <div>
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  MELKIST SEARCH
                </span>

                <h2
                  id="save-search-title"
                >
                  ذخیره این جستجو
                </h2>
              </div>

              <button
                type="button"
                className={
                  styles.closeButton
                }
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="بستن"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className={
                styles.form
              }
            >
              <label
                className={
                  styles.field
                }
              >
                <span>
                  نام جستجو
                </span>

                <input
                  type="text"
                  value={name}
                  onChange={(
                    event,
                  ) =>
                    setName(
                      event.target.value,
                    )
                  }
                  placeholder="مثلاً آپارتمان نیاوران"
                  autoFocus
                  required
                />
              </label>

              <button
                type="submit"
                className={
                  styles.submitButton
                }
              >
                ذخیره جستجو
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}