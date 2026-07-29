"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  isFavorite,
  toggleFavorite,
} from "@/lib/favorites";

import styles from "./FavoriteButton.module.css";

type FavoriteButtonProps = {
  propertyId: string;
  onChange?: (
    isFavorite: boolean,
  ) => void;
};

export function FavoriteButton({
  propertyId,
  onChange,
}: FavoriteButtonProps) {
  const [
    favorite,
    setFavorite,
  ] = useState(false);

  const [
    isReady,
    setIsReady,
  ] = useState(false);

  useEffect(() => {
    setFavorite(
      isFavorite(propertyId),
    );

    setIsReady(true);
  }, [propertyId]);

function handleToggle() {
  const result =
    toggleFavorite(
      propertyId,
    );

  setFavorite(
    result.isFavorite,
  );

  onChange?.(
    result.isFavorite,
  );
}

  return (
    <button
      type="button"
      className={[
        styles.button,
        favorite
          ? styles.active
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleToggle}
      disabled={!isReady}
      aria-pressed={favorite}
      aria-label={
        favorite
          ? "حذف از ذخیره‌ها"
          : "ذخیره ملک"
      }
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        {favorite
          ? "♥"
          : "♡"}
      </span>

      <span>
        {favorite
          ? "ذخیره شد"
          : "ذخیره ملک"}
      </span>
    </button>
  );
}