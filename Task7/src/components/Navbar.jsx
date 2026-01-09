import React from 'react'
import logo from '../assets/logo123.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaListAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa'

export default function Navbar() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <header className="w-full shadow-lg bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between h-16 relative">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Brand Logo" className="h-10 w-24 object-contain drop-shadow-lg" />
          <span className="hidden md:block text-xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
            B-Store
          </span>
        </Link>
        <div className="flex items-center space-x-2">
          <NavLinks token={token} handleLogout={handleLogout} />
        </div>
      </nav>
    </header>
  )
}

function NavLinks({ token, handleLogout }) {
  const base =
    "px-4 py-2 rounded-lg transition font-semibold text-sm flex items-center gap-2"
  const active =
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:from-purple-500 hover:to-pink-500"
  const inactive =
    "text-gray-800 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-blue-700"

  return (
    <>
      <Link
        to="/"
        className={`${base} ${inactive}`}
      >
        <FaHome /> Home
      </Link>
      <Link
        to="/products"
        className={`${base} ${inactive}`}
      >
        <FaListAlt /> Products
      </Link>
      <Link
        to="/about"
        className={`${base} ${inactive}`}
      >
        <FaInfoCircle /> About Us
      </Link>
      {token ? (
        <button
          onClick={handleLogout}
          className={`${base} ${active}`}
        >
          <FaSignOutAlt />
          Logout
        </button>
      ) : null}
    </>
  )
}
