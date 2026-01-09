import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

export default function MainTask() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='max-w-7xl mx-auto'>
      <ProductList products={products} />
    </div>
);

}