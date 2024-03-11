"use client";
import styles from "./card.scss";
import { Product } from "@/app/interfaces/product/product";

export default function Card(props: any) {
  console.log(props);
  return (
    <>
      <div className={styles.blog_card}>
        <div className={styles.card_img}>
          <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          <h1>{props.data.name}</h1>
        </div>
        <div className={styles.card_details}>
          <span>
            <i className="fa fa-calendar"></i>AUG 4
          </span>
          <span>
            <i className="fa fa-heart"></i>102
          </span>
        </div>
        <div className={styles.card_text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum
            sequimur, primum longius verbum praepositum quam bonum.
          </p>
        </div>
      </div>
    </>
  );
}
