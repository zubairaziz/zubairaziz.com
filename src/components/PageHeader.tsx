import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const PageHeader = ({ pageTitle, imageData }) => {
  return (
    <section className="relative block">
      <header className="flex items-center justify-center page-header min-h-sm md:min-h-md lg:min-h-lg xl:min-h-xl">
        <GatsbyImage
          image={imageData}
          alt=""
          className="absolute inset-0 z-0 object-cover w-screen h-auto"
          style={{ position: 'absolute' }}
        />
        <div className="absolute inset-0 z-0 w-full h-full opacity-75 bg-gun-metal"></div>
        <div className="z-50 max-w-4xl p-12 mx-auto text-center">
          <h1
            data-sal="fade"
            data-sal-delay="250"
            data-sal-easing="ease-in-out-sine"
            className="text-3xl font-bold leading-none uppercase md:text-4xl lg:text-5xl xl:text-6xl text-yellow"
          >
            {pageTitle}
          </h1>
        </div>
      </header>
      <div
        className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
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

export default PageHeader
