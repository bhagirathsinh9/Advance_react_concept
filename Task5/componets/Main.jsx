import React, { useEffect, useState } from 'react'
import OpProductList from './OpProductList';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return <OpProductList products={products} />;

}