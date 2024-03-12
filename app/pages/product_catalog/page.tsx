"use client";
import Card from "@/app/components/card/card";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import SearchBar from "@/app/components/search_bar/search_bar";
import { Product } from "@/app/interfaces/product/product";
import getProducts from "@/app/services/products/products";
import { useEffect, useState } from "react";
import styles from "./product_catalog.module.scss";
import Logout from "@/app/components/logout/logout";

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  function filter(e: any) {}
  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <>
      <Logout />
      <h1>Product Catalog Page</h1>

      <div id="product_catalog">
        <SearchBar filter={filter} />
        <div id={styles.product_card_container}>
          {products.map((product: Product) => (
            <Card data={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
