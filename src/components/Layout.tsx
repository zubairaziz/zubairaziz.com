import React from 'react'
import Footer from './footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <div className="top-content">
        <Header />
        <main className="max-w-screen">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
