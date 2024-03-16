"use client";
import Cart from "@/app/components/cart/cart";
import styles from "./cart.module.scss";
import NavBar from "@/app/components/navbar/navbar";

export default function CartPage() {
  return (
    <section>
      <NavBar />
      <Cart />
    </section>
  );
}
