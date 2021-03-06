import React from 'react'
import Footer from './footer'
import Header from './Header'

const Layout = (props) => {
  const { children, location } = props
  return (
    <div className="flex flex-col min-h-screen">
      <div className="top-content">
        <Header location={location} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
