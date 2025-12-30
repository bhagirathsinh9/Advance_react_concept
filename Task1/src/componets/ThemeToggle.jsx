import React, { useContext } from 'react'
import { Themecontext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { toggleTheme } = useContext(Themecontext)
  return (
    <button onClick={toggleTheme} className='bg-green-400 m-5 rounded-full p-2'>
      Toggle Theme
    </button>
  )
}
