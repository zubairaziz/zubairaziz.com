import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const PageHeader = ({ pageTitle, imageData }) => {
  return (
    <section className="relative block">
      <BackgroundImage
        tag="section"
        className="page-header flex justify-center items-center min-h-sm md:min-h-md lg:min-h-lg xl:min-h-xl"
        fluid={imageData}
        backgroundColor={`#1f1f1f`}
        // style={{ minHeight: `500px` }}
      >
        <div
          className="w-full h-full absolute opacity-75 bg-gun-metal z-0 inset-0"
        ></div>
        <div className="p-12 text-center max-w-2xl mx-auto z-50">
          <h1
            data-sal="fade"
            data-sal-delay="250"
            data-sal-easing="ease"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow font-bold uppercase"
          >
            {pageTitle}
          </h1>
        </div>
      </BackgroundImage>
      <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: '70px', transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
          <polygon
              fill="#227C9D"
              className="text-gray-300"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
    </section>
  )
}

const StyledPageHeader = styled(PageHeader)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;

  @media screen and(min-width: 768px) {
    min-height: 500px;
  }
`

export default StyledPageHeader
