import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="flex items-center bg-primary-800 p-3 flex-wrap">
      <Link
        to="/"
        className="nav-link p-2 mr-4 text-yellow inline-flex items-center"
      >
        <span className="text-xl text-yellow font-bold uppercase tracking-wide">
          <span className="text-xl text-white">Zubair</span> Aziz
        </span>
      </Link>
      <button
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="text-white inline-flex p-3 hover:bg-primary-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
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
        <div className="bg-primary-800 lg:inline-flex lg:flex-row text-primary-100 lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-in-out-sine"
            to="/about"
            className="nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-primary-900 hover:text-white"
            activeClassName="text-yellow"
          >
            <span>About</span>
          </Link>
          <Link
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease-in-out-sine"
            to="/portfolio"
            className="nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-primary-900 hover:text-white"
            activeClassName="text-yellow"
          >
            <span>Portfolio</span>
          </Link>
          <Link
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out-sine"
            to="/uses"
            className="nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-primary-900 hover:text-white"
            activeClassName="text-yellow"
          >
            <span>Uses</span>
          </Link>
          <Link
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in-out-sine"
            to="/blog"
            className="nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-primary-900 hover:text-white"
            activeClassName="text-yellow"
          >
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
