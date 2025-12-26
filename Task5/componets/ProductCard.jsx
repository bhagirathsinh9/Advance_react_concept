export default function ProductCard({ product }) {
  console.log("ProductCard rendered", product.id);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
