"use client";

import Link from "next/link";

import type {
  SavedSearch,
} from "@/lib/saved-searches";

import {
  filtersToQueryString,
} from "@/lib/saved-searches";

import styles from "../saved-searches.module.css";

type SavedSearchCardProps = {
  search: SavedSearch;

  onRename: (
    search: SavedSearch,
  ) => void;

  onEdit: (
    search: SavedSearch,
  ) => void;

  onDelete: (
    id: string,
  ) => void;
};

export function SavedSearchCard({
  search,
  onRename,
  onEdit,
  onDelete,
}: SavedSearchCardProps) {
  return (
    <article
      className={
        styles.card
      }
    >
      <div
        className={
          styles.cardContent
        }
      >
        <h2>
          {search.name}
        </h2>

        <p>
          آخرین به‌روزرسانی:
          {" "}
          {new Date(
            search.updatedAt ??
              search.createdAt,
          ).toLocaleDateString(
            "fa-IR",
          )}
        </p>

        <div
          className={
            styles.filterSummary
          }
        >
          {search.filters.city && (
            <span>
              {search.filters.city}
            </span>
          )}

          {search.filters
            .neighborhood && (
            <span>
              {
                search.filters
                  .neighborhood
              }
            </span>
          )}

          {search.filters
            .minArea && (
            <span>
              حداقل{" "}
              {
                search.filters
                  .minArea
              }{" "}
              متر
            </span>
          )}
        </div>
      </div>

      <div
        className={
          styles.actions
        }
      >
        <Link
          href={`/property?${filtersToQueryString(
            search.filters,
          )}`}
          className={
            styles.replayButton
          }
        >
          اجرای جستجو
        </Link>

        <button
          type="button"
          onClick={() =>
            onEdit(search)
          }
        >
          ویرایش فیلترها
        </button>

        <button
          type="button"
          onClick={() =>
            onRename(search)
          }
        >
          تغییر نام
        </button>

        <button
          type="button"
          onClick={() =>
            onDelete(
              search.id,
            )
          }
        >
          حذف
        </button>
      </div>
    </article>
  );
}