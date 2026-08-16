"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { SavedSearch } from "@/lib/saved-searches";
import { filtersToQueryString } from "@/lib/saved-searches";
import styles from "../saved-searches.module.css";

type SavedSearchCardProps = {
  search: SavedSearch;
  onRename: (search: SavedSearch) => void;
  onEdit: (search: SavedSearch) => void;
  onDelete: (id: string) => void;
};

export function SavedSearchCard({
  search,
  onRename,
  onEdit,
  onDelete,
}: SavedSearchCardProps) {
  const t = useTranslations("savedSearches");
  const locale = useLocale();

  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{search.name}</h2>

        <p>
          {t("lastUpdated")}{" "}
          {new Date(
            search.updatedAt ?? search.createdAt,
          ).toLocaleDateString(locale)}
        </p>

        <div className={styles.filterSummary}>
          {search.filters.city && <span>{search.filters.city}</span>}

          {search.filters.neighborhood && (
            <span>{search.filters.neighborhood}</span>
          )}

          {search.filters.minArea && (
            <span>
              {t("minAreaLabel")} {search.filters.minArea} {t("areaUnit")}
            </span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <Link
          href={`/property?${filtersToQueryString(search.filters)}`}
          className={styles.replayButton}
        >
          {t("runSearch")}
        </Link>

        <button type="button" onClick={() => onEdit(search)}>
          {t("editFilters")}
        </button>

        <button type="button" onClick={() => onRename(search)}>
          {t("rename")}
        </button>

        <button type="button" onClick={() => onDelete(search.id)}>
          {t("delete")}
        </button>
      </div>
    </article>
  );
}