import React from 'react'
import Footer from './footer'
import Header from './header'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="layout-wrapper">
        <div className="top-content">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
