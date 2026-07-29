import styles from "./favorites.module.css";

export default function FavoritesPage() {
  return (
    <main
      className={
        styles.page
      }
    >
      <section
        className={
          styles.hero
        }
      >
        <span
          className={
            styles.eyebrow
          }
        >
          MELKIST SAVED
        </span>

        <h1>
          املاک ذخیره‌شده
        </h1>

        <p>
          ملک‌هایی که برای بررسی
          بیشتر ذخیره کرده‌اید،
          در این بخش قرار می‌گیرند.
        </p>
      </section>
    </main>
  );
}