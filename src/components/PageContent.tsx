import React from 'react'

const PageContent = ({ children, isHomePage = false }) => {
  return (
    <div
      className={`relative -mt-24 sm:-mt-32 md:-mt-36 lg:-mt-48 ${
        isHomePage ? 'xl:-mt-64' : ''
      }`}
    >
      <div className="container">{children}</div>
    </div>
  )
}

export default PageContent
