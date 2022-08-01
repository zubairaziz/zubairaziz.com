import * as React from 'react'

import type { FrontMatter, Page } from 'types'

import { PageHeader, PostList } from 'core/components'
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
      <div className="z-10 w-full mx-auto mb-20 space-y-4 max-w-7xl md:-mt-20 md:space-y-8">
        <PostList posts={posts} />
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
