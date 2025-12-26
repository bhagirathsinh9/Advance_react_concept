import React from "react";

const OpProductCard = React.memo(({ product, onAddToCart }) => {
  console.log("ProductCard rendered", product.id);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
});

export default OpProductCard;
