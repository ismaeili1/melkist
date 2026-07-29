import Link from "next/link";

import {
  Container,
} from "@/components/layout-system/Container";

import {
  Section,
} from "@/components/layout-system/Section";

import styles from "./FeaturedPropertiesSection.module.css";

const featuredProperties = [
  {
    id: "property-1",
    type: "آپارتمان",
    title: "آپارتمان مدرن با طراحی معاصر",
    location: "تهران، منطقه ۱",
    details: "۱۸۵ متر · ۳ خواب · پارکینگ",
    price: "برای اطلاعات قیمت تماس بگیرید",
  },
  {
    id: "property-2",
    type: "ویلا",
    title: "ویلای مستقل با فضای سبز اختصاصی",
    location: "مازندران",
    details: "۴۲۰ متر زمین · ۲۸۰ متر بنا",
    price: "برای اطلاعات قیمت تماس بگیرید",
  },
  {
    id: "property-3",
    type: "دفتر اداری",
    title: "فضای اداری مناسب شرکت‌های حرفه‌ای",
    location: "تهران، منطقه ۶",
    details: "۲۴۰ متر · پارکینگ · دسترسی عالی",
    price: "برای اطلاعات قیمت تماس بگیرید",
  },
];

export function FeaturedPropertiesSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              املاک منتخب
            </span>

            <h2 className={styles.title}>
              فرصت‌های منتخب ملکی
            </h2>
          </div>

          <Link
            href="/property"
            className={styles.viewAll}
          >
            مشاهده همه املاک
            <span aria-hidden="true">
              ←
            </span>
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProperties.map((property) => (
            <article
              key={property.id}
              className={styles.card}
            >
              <div
                className={styles.image}
                aria-label={
                  `تصویر نمونه ${property.title}`
                }
              >
                <span>
                  MELKIST
                </span>
              </div>

              <div className={styles.content}>
                <span className={styles.type}>
                  {property.type}
                </span>

                <h3 className={styles.cardTitle}>
                  {property.title}
                </h3>

                <p className={styles.location}>
                  {property.location}
                </p>

                <p className={styles.details}>
                  {property.details}
                </p>

                <div className={styles.footer}>
                  <span>
                    {property.price}
                  </span>

                  <Link
                    href="/property"
                    className={styles.cardLink}
                  >
                    مشاهده
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}