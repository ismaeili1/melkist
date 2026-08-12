import type { PropertyResult } from "../../property-data";

import styles from "./PropertyHeader.module.css";

import {
  FavoriteButton,
} from "@/components/real-estate/FavoriteButton";



type PropertyHeaderProps = {
  property: PropertyResult;
};

export function PropertyHeader({
  property,
}: PropertyHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.meta}>
        <span className={styles.transaction}>
          {property.transaction}
        </span>

        <span className={styles.type}>
          {property.type}
        </span>

        {property.featured && (
          <span className={styles.featured}>
            ملک منتخب
          </span>
        )}
      </div>

      <h1 className={styles.title}>
        {property.title}
      </h1>

      <p className={styles.location}>
        {property.city}،{" "}
        {property.district}،{" "}
        {property.neighborhood}
      </p>

      <FavoriteButton
  propertyId={property.id}
/>





    </header>
  );
}