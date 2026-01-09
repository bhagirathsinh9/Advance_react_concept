import Navbar from '@/components/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[75vh] px-4">
        <div className="bg-white/80 rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col items-center text-center py-14 px-6 backdrop-blur-lg">
          <h1 className="font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-6 animate-fadeIn">
            Discover Premium Products
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your one-stop shop for the latest and greatest. Browse top categories, exclusive deals, and new arrivals curated just for you.
          </p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 animate-bounce"
          >
            Shop Products
          </Link>
        </div>
      </section>
    </div>
  )
}
