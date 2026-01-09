import React from 'react'

const ProductCard = React.memo(({ product, onAddToCart }) => {
  return (
    <div className='max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-6 border border-gray-200'>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-56 object-contain bg-gray-50 p-4'
      />
      <div className='p-4 flex flex-col justify-between h-48'>
        <h3 className='text-lg font-semibold mb-2 text-gray-800 truncate'>
          {product.title}
        </h3>
        <p className='text-xl font-bold text-indigo-700 mb-4'>
          ${product.price}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 shadow'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
})

export default ProductCard
