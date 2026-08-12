import type { PropertyResult } from "../../property-data";

import styles from "./PropertyPrice.module.css";

type PropertyPriceProps = {
  property: PropertyResult;
};

export function PropertyPrice({
  property,
}: PropertyPriceProps) {
  return (
    <section className={styles.priceBox}>
      <span className={styles.label}>
        قیمت ملک
      </span>

      <strong className={styles.price}>
        {property.price}
      </strong>

      <span className={styles.note}>
        اطلاعات قیمت بر اساس آخرین اطلاعات ثبت‌شده
      </span>
    </section>
  );
}