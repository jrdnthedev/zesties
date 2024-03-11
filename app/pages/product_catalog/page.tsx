"use client";

import SearchBar from "@/app/components/searchBar/searchBar";

export default function productCatalog() {
  function filter(e: any) {}
  return (
    <>
      <h1>Product Catalog Page</h1>

      <div id="product_catalog">
        <SearchBar filter={filter} />
      </div>
    </>
  );
}
