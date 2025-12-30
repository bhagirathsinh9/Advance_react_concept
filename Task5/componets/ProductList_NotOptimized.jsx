import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList_NotOptimized({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
