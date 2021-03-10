import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

import '../styles/index.css'

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-primary-500">
      <Header />
      <div
        className="relative z-0 min-h-screen grid pt-16"
        style={{ gridTemplateRows: '1fr auto' }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
