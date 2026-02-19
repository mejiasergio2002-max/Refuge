import Link from "next/link";
import styles from "./landing.module.css";

export default function LandingPage() {
  return (
    <main className={`matrix-bg ${styles.wrap}`}>
      <section className={styles.center}>
        <h1 className={styles.brand}>Refuge.</h1>
        <p className={styles.tagline}>Your Safety. My Priority.</p>

        <nav className={styles.links}>
          <Link className={styles.link} href="/register">
            Register
          </Link>
          <Link className={styles.link} href="/login">
            Login
          </Link>
          <Link className={styles.linkActive} href="/feed">
            Enter Feed
          </Link>
        </nav>
      </section>
    </main>
  );
}
