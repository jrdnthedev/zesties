"use client";
import styles from "./card.module.css";
import { Product } from "@/app/interfaces/product/product";

export default function Card(props: any) {
  console.log(props);
  return (
    <>
      <div>{props.data.name}</div>
    </>
  );
}
