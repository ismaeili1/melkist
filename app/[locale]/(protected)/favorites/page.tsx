import { propertyResults } from "@/app/[locale]/property/property-data";
import { SavedProperties } from "./components/SavedProperties";
import styles from "./favorites.module.css";

export default function FavoritesPage() {
  return (
    <main className={styles.page}>
      <SavedProperties properties={propertyResults} />
    </main>
  );
}
