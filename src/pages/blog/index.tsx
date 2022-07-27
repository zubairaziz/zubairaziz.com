import * as React from 'react'

import Image from 'next/image'

import type { FrontMatter, Page } from 'types'

import { Card, PageHeader } from 'core/components'
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
      <Card>
        <ul>
          {posts.map((post) => {
            const image = require(`pages/blog/${post.slug}/featured-image.png`).default

            return (
              <div
                key={post.slug}
                className="flex flex-col-reverse items-stretch justify-between md:flex-row"
              >
                <div className="flex flex-col items-start justify-start w-full h-full">
                  <h2 className="text-lg font-semibold lg:text-xl">{post.title}</h2>
                  <a href={`/blog/${post.slug}`}>Read More</a>
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
              </div>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return { props: { posts } }
}

BlogIndexPage.getLayout = function getLayout(page) {
  return <AppLayout title="Home">{page}</AppLayout>
}

export default BlogIndexPage
