"use client";
import Card from "@/app/components/card/card";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import SearchBar from "@/app/components/search_bar/search_bar";
import { Product } from "@/app/interfaces/product/product";
import getProducts from "@/app/services/products/products";
import { useEffect, useState } from "react";
import styles from "./product_catalog.module.scss";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/navbar/navbar";

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

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

  if (!isAuthenticated) {
    router.push("/");
  }
  return (
    <>
      <NavBar />
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
