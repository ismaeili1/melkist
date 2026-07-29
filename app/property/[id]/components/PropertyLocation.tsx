import type { PropertyResult } from "../../property-data";

import styles from "./PropertyLocation.module.css";

type PropertyLocationProps = {
  property: PropertyResult;
};

export function PropertyLocation({
  property,
}: PropertyLocationProps) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>LOCATION</span>

        <h2>موقعیت ملک</h2>
      </div>

      <div className={styles.locationCard}>
        <div className={styles.address}>
          <strong>
            {property.neighborhood}
          </strong>

          <span>
            {property.city}،{" "}
            {property.district}
          </span>
        </div>

        <div className={styles.mapPlaceholder}>
          <span>
            نقشه در مرحله Map & Location
            Intelligence متصل خواهد شد.
          </span>
        </div>
      </div>
    </section>
  );
}