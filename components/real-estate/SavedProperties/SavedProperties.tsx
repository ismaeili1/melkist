"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getFavoriteIds,
} from "@/lib/favorites";

import styles from "./SavedProperties.module.css";

type SavedPropertiesProps = {
  properties: Array<{
    id: string;
    title: string;
  }>;
};

export function SavedProperties({
  properties,
}: SavedPropertiesProps) {
  const [
    savedIds,
    setSavedIds,
  ] = useState<string[]>([]);

  useEffect(() => {
    setSavedIds(
      getFavoriteIds(),
    );
  }, []);

  const savedProperties =
    properties.filter(
      (property) =>
        savedIds.includes(
          property.id,
        ),
    );

  if (
    savedProperties.length ===
    0
  ) {
    return (
      <div
        className={
          styles.emptyState
        }
      >
        <h2>
          هنوز ملکی ذخیره نکرده‌اید
        </h2>

        <p>
          املاک مورد علاقه خود را
          ذخیره کنید تا بعداً به
          آن‌ها دسترسی داشته باشید.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        styles.grid
      }
    >
      {savedProperties.map(
        (property) => (
          <article
            key={property.id}
            className={
              styles.card
            }
          >
            <h3>
              {property.title}
            </h3>

            <p>
              {property.id}
            </p>
          </article>
        ),
      )}
    </div>
  );
}