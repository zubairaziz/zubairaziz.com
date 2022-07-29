import * as React from 'react'

import Image from 'next/image'

import type { FrontMatter, Page } from 'types'

import { AppLink, Card, PageHeader } from 'core/components'
import featuredImage from 'core/images/blog.jpg'
import { AppLayout } from 'core/layouts'
import { getAllPosts } from 'core/lib'

type BlogIndexPageProps = {
  posts: FrontMatter[]
}

const BlogIndexPage: Page<BlogIndexPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="Blog" backgroundImage={featuredImage?.src} />
      <div className="z-10 w-full mx-auto mb-20 max-w-7xl md:-mt-20 space-y-4 md:space-y-8">
        <Card>
          <ul className="divide-y">
            {posts.map((post) => {
              const image = require(`pages/blog/${post.slug}/featured-image.png`).default
              const niceDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              return (
                <li
                  key={post.slug}
                  className="flex flex-col-reverse justify-between h-full p-4 items-between md:p-8 md:flex-row"
                >
                  <div className="flex-1">
                    <div className="flex flex-col justify-between w-full h-full">
                      <div>
                        <h2 className="text-lg font-semibold lg:text-xl">{post.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{niceDate}</p>
                      </div>
                      <AppLink href={`/blog/${post.slug}`}>Read More</AppLink>
                    </div>
                  </div>
                  <div className="relative w-full h-auto md:w-72">
                    <Image
                      src={image.src}
                      alt={`${post.title} featured image`}
                      layout="responsive"
                      width={300}
                      height={158}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return { props: { posts } }
}

BlogIndexPage.getLayout = function getLayout(page) {
  return (
    <AppLayout title="Blog" description="Read blog posts">
      {page}
    </AppLayout>
  )
}

export default BlogIndexPage
