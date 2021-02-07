import React, { useState } from 'react'
import { Link } from 'gatsby'

import Bars from '../../content/assets/icon-bars.svg'
import Times from '../../content/assets/icon-times.svg'

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
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-primary-900 lg:hidden hover:text-white nav-toggler"
          data-target="#navigation"
        >
          <i>{navbarOpen ? <Times /> : <Bars />}</i>
        </button>
        <div
          className={
            navbarOpen
              ? `top-navbar fixed inset-0 top-1/8 w-full lg:relative lg:inline-flex lg:flex-grow lg:w-auto z-50`
              : `hidden lg:relative lg:inline-flex lg:flex-grow lg:w-auto `
          }
          id="navigation"
        >
          <div className="flex flex-col items-start w-full bg-primary-800 lg:inline-flex lg:flex-row text-primary-100 lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-in-out-sine"
              to="/about"
              className="items-center justify-center w-full px-3 py-2 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>About</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease-in-out-sine"
              to="/portfolio"
              className="items-center justify-center w-full px-3 py-2 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Portfolio</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out-sine"
              to="/uses"
              className="items-center justify-center w-full px-3 py-2 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Uses</span>
            </Link>
            <Link
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-easing="ease-in-out-sine"
              to="/blog"
              className="items-center justify-center w-full px-3 py-2 rounded nav-link lg:inline-flex lg:w-auto hover:underline hover:text-white"
              activeClassName="text-yellow"
            >
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
