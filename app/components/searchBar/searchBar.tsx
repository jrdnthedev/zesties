"use client";
import styles from "./searchBar.module.css";

export default function SearchBar(props: any) {
  return (
    <div id={styles.search_bar}>
      <input id={styles.input} type="text" onChange={props.filter} />
    </div>
  );
}
