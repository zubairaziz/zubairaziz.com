import React from "react"
import "../styles/index.scss"
import layoutStyles from "../styles/modules/layout.module.scss"

const Layout = props => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.content}>
      <main className={layoutStyles.homeContainer}>{props.children}</main>
    </div>
  </div>
)

export default Layout
