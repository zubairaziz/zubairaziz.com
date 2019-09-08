import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "../styles/modules/layout.module.scss"

const Layout = props => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.content}>
      <Header />
      <main className="container">{props.children}</main>
    </div>
    <Footer />
  </div>
)

export default Layout
