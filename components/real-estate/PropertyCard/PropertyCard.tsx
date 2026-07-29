"use client";

import Link from "next/link";

import {
  FavoriteButton,
} from "@/components/real-estate/FavoriteButton";

import styles from "./PropertyCard.module.css";

export type PropertyCardData = {
  id: string;
  title: string;
  type: string;
  transaction: string;
  city: string;
  district: string;
  neighborhood: string;
  area: number;
  bedrooms: number;
  price: string;
  image: string;
  featured?: boolean;
};

type PropertyCardProps = {
  property: PropertyCardData;

  onFavoriteChange?: (
    isFavorite: boolean,
  ) => void;
};

export function PropertyCard({
  property,
  onFavoriteChange,
}: PropertyCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link
          href={`/property/${property.id}`}
          className={styles.cardLink}
        >
          <img
            src={property.image}
            alt={property.title}
            className={styles.image}
          />

          {property.featured && (
            <span className={styles.featuredBadge}>
              منتخب
            </span>
          )}
        </Link>

        <div className={styles.favoriteButton}>
          <FavoriteButton
            propertyId={property.id}
            onChange={onFavoriteChange}
          />
        </div>
      </div>

      <Link
        href={`/property/${property.id}`}
        className={styles.cardLink}
      >
        <div className={styles.cardBody}>
          <div className={styles.cardMeta}>
            <span>{property.type}</span>

            <span>{property.transaction}</span>
          </div>

          <h2 className={styles.cardTitle}>
            {property.title}
          </h2>

          <p className={styles.location}>
            {property.city}، {property.district}،{" "}
            {property.neighborhood}
          </p>

          <div className={styles.specifications}>
            <span>
              {property.area} متر
            </span>

            <span>
              {property.bedrooms} خواب
            </span>
          </div>

          <div className={styles.cardFooter}>
            <strong>
              {property.price}
            </strong>

            <span className={styles.viewButton}>
              مشاهده ملک
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}