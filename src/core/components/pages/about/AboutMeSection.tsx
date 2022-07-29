import * as React from 'react'

import { Card, AppLink } from 'core/components/common'
import { Prose } from 'core/components/markdown'

const AboutMeSection = () => {
  return (
    <Card>
      <Prose>
        <h2>About Me</h2>
        <p>
          I&apos;m a software engineer based out of Kuala Lumpur, Malaysia. Though I&apos;ve worked
          with multiple different technologies and programming languages on multiple different
          platforms (including Python for data analytics, or Java for mobile app development),
          I&apos;ve always been attracted to the web and the underlying technologies behind it.
        </p>
        <p>
          If you&apos;re familiar at all with web technologies, you&apos;ll know that there are many
          different tools to work with on the web and a lot of different paradigms for web app
          development. Though I started my web development journey with the classic LAMP stack (PHP
          and MySQL for the backend, jQuery and Bootstrap/SCSS for the frontend, served on a Linux
          server), and have a soft spot for PHP, I&apos;ve since moved on to preferring TypeScript
          front to back, and my preferred tech-stack is now React, Next.js, and Tailwind CSS, with a
          Node backend if I need anything more custom then Next.js&apos; API routes.
        </p>
        <p>
          Of course, I&apos;m still learning new things every day, and I&apos;m always open to
          trying out new things. Though I&apos;m quite comfortable with my current tech stack,
          I&apos;m open to trying new things and adding more tools to my arsenal.
        </p>
        <p>
          I&apos;m currently working as a Full-Stack Software Engineer at{' '}
          <AppLink href="https://www.quiltt.io/">Quiltt, Inc.</AppLink>, where I&apos;m primarily
          responsible for building out the front-end components of many of our different projects,
          ranging from our internal tools to our customer-facing web apps.
        </p>
      </Prose>
    </Card>
  )
}

export default AboutMeSection
