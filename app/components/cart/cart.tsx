"use client";
import { useShoppingCart } from "@/app/context/CartContext";
import styles from "./cart.module.scss";

export default function Cart() {
  const { cart, removeItem } = useShoppingCart();
  console.log(cart);
  return (
    <section>
      <h1>Cart</h1>
      <div>
        <ul>
          {cart.items.map((item, index: number) => (
            <li key={index}>
              <p>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{item.quantity}</span>
                <span>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
