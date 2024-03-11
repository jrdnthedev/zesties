"use client";
import styles from "./loading_spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
}
