import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="404: Not Found" />
      <div className="container mx-auto">
        <h1 className="mt-2 mb-3 text-xl font-bold md:text-3xl">Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
