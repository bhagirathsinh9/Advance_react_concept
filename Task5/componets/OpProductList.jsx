import { useMemo, useCallback, useState } from "react";
import ProductCard from "./ProductCard";
import OpProductCard from "./OpProductCard";

export default function OpProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const handleAddToCart = useCallback((product) => {
    console.log("Added to cart", product.id);
  }, []);

  return (
    <>
      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map(product => (
        <OpProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}
