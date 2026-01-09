import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import api from '../utils/axiosInstance' 

export default function MainTask() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products') 
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <ProductList products={products} />
    </div>
  )
}
