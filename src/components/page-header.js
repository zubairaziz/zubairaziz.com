import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const PageHeader = ({ pageTitle, imageData }) => {
  return (
    <BackgroundImage
      tag="section"
      className="page-header flex justify-center items-center min-h-sm md:min-h-md lg:min-h-lg xl:min-h-xl"
      fluid={imageData}
      backgroundColor={`#1f1f1f`}
      // style={{ minHeight: `500px` }}
    >
      <div
        style={{
          position: `absolute`,
          width: `100%`,
          height: `100%`,
          top: `0`,
          left: `0`,
          right: `0%`,
          backgroundColor: `#1f1f1f`,
          zIndex: `0`,
          opacity: `0.75`,
        }}
      ></div>
      <div className="p-12 text-center max-w-2xl mx-auto z-50">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow font-bold uppercase">
          {pageTitle}
        </h1>
      </div>
    </BackgroundImage>
  )
}

const StyledPageHeader = styled(PageHeader)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;

  @media screen and(min-width: 768px){
    min-height: 500px;
  }
`

export default StyledPageHeader
