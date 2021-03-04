import React, { useState } from 'react'
import { Link } from 'gatsby'

import Bars from '../../content/assets/icons/icon-bars.svg'
import Times from '../../content/assets/icons/icon-times.svg'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="p-3 bg-primary-800">
      <div className="container flex flex-wrap items-center mx-auto">
        <Link
          to="/"
          className="inline-flex items-center p-2 mr-4 nav-link text-yellow"
        >
          <span className="text-xl font-bold tracking-wide uppercase text-yellow hover:text-white group">
            <span className="text-xl text-white group-hover:text-yellow">
              Zubair
            </span>{' '}
            Aziz
          </span>
        </Link>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-primary-900 lg:hidden hover:text-white nav-toggler"
          data-target="#navigation"
        >
          <i>{navbarOpen ? <Times /> : <Bars />}</i>
        </button>
        <div
          className={
            navbarOpen
              ? `w-screen h-auto transition-opacity duration-300 opacity-100 top-navbar transform-gpu translate-y-16 fixed inset-0 top-0 w-full lg:relative lg:inline-flex lg:flex-grow lg:w-auto z-50`
              : `w-0 h-0 opacity-0 lg:relative lg:inline-flex lg:flex-grow lg:w-auto transform-gpu translate-y-16`
          }
          id="navigation"
        >
          <nav className="flex flex-col items-start w-full bg-primary-800 lg:inline-flex lg:flex-row text-primary-100 lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-in-out-sine"
              to="/about"
              className="items-center justify-center w-full px-4 py-3 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>About</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease-in-out-sine"
              to="/portfolio"
              className="items-center justify-center w-full px-4 py-3 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Portfolio</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
              to="/uses"
              className="items-center justify-center w-full px-4 py-3 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Uses</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-easing="ease-in-out-sine"
              to="/blog"
              className="items-center justify-center w-full px-4 py-3 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Blog</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Header
