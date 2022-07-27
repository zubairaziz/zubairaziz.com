import * as React from 'react'

import Image from 'next/image'

import type { Page } from 'types'
import Typewriter from 'typewriter-effect'

import { SocialLinks } from 'core/components'
import headshot from 'core/images/headshot.jpg'
import { AppLayout } from 'core/layouts'

const HomePage: Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full place-content-center">
      <div className="flex flex-col w-full p-4 xl:items-center xl:justify-center max-w-7xl md:flex-row">
        <div className="relative w-48 h-48 mx-auto border rounded-full xl:mx-0 md:border-2 md:w-64 md:h-64 aspect-square border-secondary-7">
          <Image
            src={headshot.src}
            alt="Zubair's Headshot"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center flex-auto pt-16 xl:flex-none xl:w-[512px] md:pl-16 md:pt-0">
          <div className="flex space-x-2 text-2xl text-center md:text-4xl">
            <span>Zubair,</span>
            <span>
              <Typewriter
                options={{
                  strings: ['Software Engineer', 'Web Developer', 'Designer', 'Photographer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <AppLayout
      title="Home"
      description="Zubair is a software engineer based in Kuala Lumpur, Malaysia. He is interested in all sorts of technologies, with a focus on TypeScript and building apps in Next.js. "
    >
      {page}
    </AppLayout>
  )
}

export default HomePage
