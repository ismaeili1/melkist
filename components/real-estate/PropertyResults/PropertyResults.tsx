"use client";

import { useMemo, useState } from "react";

import {
  PropertyCard,
} from "../PropertyCard";

import type {
  PropertyResult,
} from "./property-results.types";

import styles from "./PropertyResults.module.css";

type PropertyResultsProps = {
  properties: PropertyResult[];
  query?: {
    transaction?: string;
    type?: string;
    city?: string;
    district?: string;
    neighborhood?: string;
  };
};

type SortOption =
  | "default"
  | "price-low"
  | "area-high";

export function PropertyResults({
  properties,
  query,
}: PropertyResultsProps) {
  const [sortBy, setSortBy] =
    useState<SortOption>("default");

  const sortedProperties = useMemo(() => {
    const items = [...properties];

    if (sortBy === "area-high") {
      return items.sort(
        (a, b) => b.area - a.area,
      );
    }

    if (sortBy === "price-low") {
      return items;
    }

    return items;
  }, [properties, sortBy]);

  const hasQuery =
    Boolean(query?.transaction) ||
    Boolean(query?.type) ||
    Boolean(query?.city) ||
    Boolean(query?.district) ||
    Boolean(query?.neighborhood);

  return (
    <section className={styles.resultsSection}>
      <div className={styles.container}>
        <div className={styles.resultsHeader}>
          <div>
            <span className={styles.eyebrow}>
              MELKIST PROPERTY SEARCH
            </span>

            <h1 className={styles.title}>
              نتایج جست‌وجوی املاک
            </h1>

            <p className={styles.subtitle}>
              {hasQuery
                ? "نتایج بر اساس معیارهای انتخاب‌شده شما"
                : "املاک منتخب برای شروع جست‌وجو"}
            </p>
          </div>

          <div className={styles.resultCount}>
            <strong>
              {sortedProperties.length}
            </strong>

            <span>
              ملک موجود
            </span>
          </div>
        </div>

        <div className={styles.activeFilters}>
          {query?.transaction && (
            <span className={styles.filterTag}>
              {query.transaction}
            </span>
          )}

          {query?.type && (
            <span className={styles.filterTag}>
              {query.type}
            </span>
          )}

          {query?.city && (
            <span className={styles.filterTag}>
              {query.city}
            </span>
          )}

          {query?.district && (
            <span className={styles.filterTag}>
              {query.district}
            </span>
          )}

          {query?.neighborhood && (
            <span className={styles.filterTag}>
              {query.neighborhood}
            </span>
          )}
        </div>

        <div className={styles.toolbar}>
          <div className={styles.toolbarTitle}>
            املاک موجود
          </div>

          <label className={styles.sortControl}>
            <span>
              مرتب‌سازی:
            </span>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as SortOption,
                )
              }
            >
              <option value="default">
                پیشنهاد MELKIST
              </option>

              <option value="area-high">
                بیشترین متراژ
              </option>

              <option value="price-low">
                کمترین قیمت
              </option>
            </select>
          </label>
        </div>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h2>
                فیلترهای جست‌وجو
              </h2>

              <div className={styles.filterBlock}>
                <span>
                  نوع معامله
                </span>

                <label>
                  <input type="checkbox" />
                  خرید
                </label>

                <label>
                  <input type="checkbox" />
                  رهن
                </label>

                <label>
                  <input type="checkbox" />
                  اجاره
                </label>
              </div>

              <div className={styles.filterBlock}>
                <span>
                  نوع ملک
                </span>

                <label>
                  <input type="checkbox" />
                  آپارتمان
                </label>

                <label>
                  <input type="checkbox" />
                  ویلا
                </label>

                <label>
                  <input type="checkbox" />
                  خانه
                </label>
              </div>
            </div>
          </aside>

          <div className={styles.grid}>
            {sortedProperties.map(
              (property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}