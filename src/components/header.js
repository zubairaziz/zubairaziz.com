import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <Link to="/" className="p-2 mr-4 text-yellow inline-flex items-center">
        <span className="text-xl text-yellow font-bold uppercase tracking-wide">
          <span className="text-xl text-white">Zubair</span> Aziz
        </span>
      </Link>
      <button
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i>menu</i>
      </button>
      <div
        className={
          navbarOpen
            ? `top-navbar fixed inset-0 top-1/8 w-full lg:relative lg:inline-flex lg:flex-grow lg:w-auto z-50`
            : `hidden lg:relative lg:inline-flex lg:flex-grow lg:w-auto `
        }
        id="navigation"
      >
        <div className="bg-gray-800 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            to="/about"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>About</span>
          </Link>
          <Link
            to="/portfolio"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Portfolio</span>
          </Link>
          <Link
            to="/uses"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Uses</span>
          </Link>
          <Link
            to="/blog"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
