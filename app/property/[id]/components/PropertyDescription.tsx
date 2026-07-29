import type { PropertyResult } from "../../property-data";

import styles from "./PropertyDescription.module.css";

type PropertyDescriptionProps = {
  property: PropertyResult;
};

export function PropertyDescription({
  property,
}: PropertyDescriptionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>PROPERTY DESCRIPTION</span>

        <h2>درباره این ملک</h2>
      </div>

      <p className={styles.description}>
        {property.description}
      </p>

      <div className={styles.amenities}>
        {property.amenities.map((amenity) => (
          <span
            key={amenity}
            className={styles.amenity}
          >
            {amenity}
          </span>
        ))}
      </div>
    </section>
  );
}