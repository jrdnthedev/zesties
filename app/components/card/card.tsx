import { useShoppingCart } from "@/app/context/CartContext";
import styles from "./card.module.scss";
import React from "react";
import { Product } from "@/app/interfaces/product/product";

export default function Card(props: Product) {
  const { addItem } = useShoppingCart();
  return (
    <>
      <div className={styles.blog_card}>
        <div className={styles.card_img}>
          <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          <h1>{props.name}</h1>
        </div>
        <div className={styles.card_details}>
          <span className={styles.bold}>
            <i className="fa fa-calendar"></i>Genus:
          </span>
          <span>
            <i className="fa fa-heart"></i>
            {props.genus}
          </span>
        </div>
        <div className={styles.card_text}>
          <ul>
            <li>
              <p>
                <span className={styles.bold}>calories</span>:{" "}
                {props.nutritions.calories}
              </p>
            </li>
            <li>
              <p>
                <span className={styles.bold}>carbohydrates</span>:{" "}
                {props.nutritions.carbohydrates}
              </p>
            </li>
            <li>
              <p>
                <span className={styles.bold}>fat</span>: {props.nutritions.fat}
              </p>
            </li>
            <li>
              <p>
                <span className={styles.bold}>protein</span>:{" "}
                {props.nutritions.protein}
              </p>
            </li>
            <li>
              <p>
                <span className={styles.bold}>sugar</span>:{" "}
                {props.nutritions.sugar}
              </p>
            </li>
          </ul>
        </div>
        <button className={styles.add_to_cart} onClick={() => addItem(props)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
