import type { PropertyResult } from "../../property-data";

import styles from "./PropertyFacts.module.css";

type PropertyFactsProps = {
  property: PropertyResult;
};

export function PropertyFacts({
  property,
}: PropertyFactsProps) {
  const facts = [
    {
      label: "متراژ",
      value: `${property.area} متر`,
    },

    {
      label: "اتاق خواب",
      value: `${property.bedrooms}`,
    },

    {
      label: "حمام",
      value: `${property.bathrooms}`,
    },

    {
      label: "طبقه",
      value: `${property.floor} از ${property.totalFloors}`,
    },

    {
      label: "سن بنا",
      value: `${property.buildingAge} سال`,
    },

    {
      label: "پارکینگ",
      value: `${property.parking}`,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>PROPERTY FACTS</span>

        <h2>مشخصات ملک</h2>
      </div>

      <div className={styles.grid}>
        {facts.map((fact) => (
          <div
            key={fact.label}
            className={styles.fact}
          >
            <span className={styles.label}>
              {fact.label}
            </span>

            <strong className={styles.value}>
              {fact.value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}