import { useMemo, useCallback, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    )
  }, [products, search])

  const handleAddToCart = useCallback((product) => {
    alert(`Added "${product.title}" to cart successfully!`)
  }, [])

  return (
    <div className='w-full px-5 py-8'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4 sm:mb-0 text-center sm:text-left'>
          🛒 Product Catalog
        </h2>
        <div className='w-full sm:w-72 mx-auto sm:mx-0'>
          <input
            type='text'
            placeholder='🔍 Search products...'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-200 outline-none'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {filteredProducts.length === 0 ? (
          <div className='col-span-full flex justify-center items-center py-10'>
            <span className='text-lg text-gray-500'>No products found.</span>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  )
}
