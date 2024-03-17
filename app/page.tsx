"use client";
import Login from "./components/login/login";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.description}>
        <h1>Home</h1>
      </div>
      <Login />
    </section>
  );
}
