"use client";
import Card from "@/app/components/card/card";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import SearchBar from "@/app/components/search_bar/search_bar";
import { Product } from "@/app/interfaces/product/product";
import getProducts from "@/app/services/products/products";
import { useEffect, useState } from "react";

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
      <h1>Product Catalog Page</h1>

      <div id="product_catalog">
        {/* <SearchBar filter={filter} /> */}
        {products.map((product: Product) => (
          <Card data={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
