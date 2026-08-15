"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFavoriteIds } from "@/lib/favorites";
import {
  PropertyCard,
  type PropertyCardData,
} from "@/components/real-estate/PropertyCard";
import styles from "./SavedProperties.module.css";

type SavedPropertiesProps = {
  properties: PropertyCardData[];
};

export function SavedProperties({ properties }: SavedPropertiesProps) {
  const t = useTranslations("favorites");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setFavoriteIds(getFavoriteIds());
    setIsReady(true);
  }, []);

  const savedProperties = useMemo(() => {
    if (!isReady) {
      return [];
    }

    const favoriteIdSet = new Set(favoriteIds);

    return properties.filter((property) => favoriteIdSet.has(property.id));
  }, [favoriteIds, isReady, properties]);

  function handleFavoriteChange() {
    setFavoriteIds(getFavoriteIds());
  }

  if (!isReady) {
    return (
      <section className={styles.loading}>
        <p>{t("loading")}</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1>{t("title")}</h1>
          <p className={styles.description}>{t("description")}</p>
        </div>

        <div className={styles.count}>
          <strong>{savedProperties.length}</strong>
          <span>{t("countLabel")}</span>
        </div>
      </div>

      {savedProperties.length === 0 ? (
        <EmptySavedProperties />
      ) : (
        <div className={styles.grid}>
          {savedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onFavoriteChange={handleFavoriteChange}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function EmptySavedProperties() {
  const t = useTranslations("favorites");

  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon} aria-hidden="true">
        &#9825;
      </div>

      <h2>{t("emptyTitle")}</h2>

      <p>{t("emptyDescription")}</p>

      <Link href="/property" className={styles.exploreButton}>
        {t("exploreButton")}
      </Link>
    </div>
  );
}