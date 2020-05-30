import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = (props) => {
  const { children, location } = props
  return (
    <div className="layout-wrapper">
      <div className="top-content">
        <Header location={location} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
