import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/main-layout"
import Head from "../components/head"
const NotFoundPage = () => (
  <Layout>
    <Head pageTitle="404: Page not found" />
    <h1>404: Page not found!</h1>
    <p>Looks like you've entered a URL that doesn't exist on this site.</p>
    <p>
      <Link to="/">Head home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
