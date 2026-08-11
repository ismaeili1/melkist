import Link from "next/link";
import styles from "../styles/logo.module.css";

export default function AuthLogo() {
  return (
    <Link href="/" className={styles.logo}>
      MELKIST
    </Link>
  );
}
