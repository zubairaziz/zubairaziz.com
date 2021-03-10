import React from 'react'

const PageContent = ({ children, isHomePage = false }) => {
  return (
    <div
      className={
        isHomePage
          ? `relative -mt-24 sm:-mt-32 md:-mt-36 lg:-mt-48 xl:-mt-64`
          : 'relative -mt-16 sm:-mt-24 md:-mt-28 lg:-mt-40 xl:-mt-48'
      }
    >
      <div className="container">{children}</div>
    </div>
  )
}

export default PageContent
