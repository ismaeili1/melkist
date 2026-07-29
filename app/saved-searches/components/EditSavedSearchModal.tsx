"use client";

import {
  useState,
} from "react";

import type {
  SavedSearch,
} from "@/lib/saved-searches";

type EditSavedSearchModalProps = {
  search: SavedSearch;

  onClose: () => void;

  onSave: (
    name: string,
  ) => void;
};

export function EditSavedSearchModal({
  search,
  onClose,
  onSave,
}: EditSavedSearchModalProps) {
  const [
    name,
    setName,
  ] = useState(search.name);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmed =
      name.trim();

    if (!trimmed) {
      return;
    }

    onSave(trimmed);
  }

  return (
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rename-title"
      >
        <h2 id="rename-title">
          تغییر نام جستجو
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <label>
            نام جستجو

            <input
              value={name}
              onChange={(event) =>
                setName(
                  event.target
                    .value,
                )
              }
              autoFocus
            />
          </label>

          <button
            type="button"
            onClick={onClose}
          >
            انصراف
          </button>

          <button
            type="submit"
          >
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}