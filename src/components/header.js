import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header
      className="bg-gray-800 p-3"
      style={{ borderTop: `3px solid #FFBA49` }}
    >
      <nav className="container mx-auto flex items-center flex-wrap">
        <ul
          style={{
            listStyleType: `none`,
          }}
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          <li>
            <Link
              to="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/uses"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              Uses
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
