import { Link } from 'gatsby'
import * as React from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowSize'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  const { width, height } = useWindowSize()

  React.useEffect(() => {
    if (width > 1024) {
      setMenuIsOpen(true)
    }
  }, [width, height])

  return (
    <header className="z-50 w-screen absolute inset-x-0 top-0 bg-primary-800">
      <nav className="flex flex-wrap items-center justify-between py-6 container">
        <div className="flex items-center flex-shrink-0 mr-6 text-white group">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            <span className="text-white group-hover:text-yellow transition-colors ease-in-out duration-300">
              Zubair
            </span>
            <span className="text-yellow group-hover:text-yellow transition-colors ease-in-out duration-300">
              {' '}
              Aziz
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="flex items-center px-3 py-2 text-white rounded hover:text-yellow border-0"
          >
            {menuIsOpen ? (
              <svg
                className="w-3 h-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
              </svg>
            ) : (
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
        <motion.div
          className="relative z-50 w-full block flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col"
          initial={{ height: 0, opacity: 0 }}
          animate={
            menuIsOpen
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
        >
          <div className="text-sm lg:flex-grow lg:justify-end">
            <Link
              to={`/about`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-yellow"
            >
              About
            </Link>
            <Link
              to={`/portfolio`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-yellow"
            >
              Portfolio
            </Link>
            <Link
              to={`/uses`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-yellow"
            >
              Uses
            </Link>
            <Link
              to={`/blog`}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-yellow"
            >
              Blog
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header
