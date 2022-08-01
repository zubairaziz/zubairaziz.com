import * as React from 'react'

import Image from 'next/image'

import type { FrontMatter } from 'types'

import { Card, AppLink } from 'core/components'

type PostListProps = {
  posts: FrontMatter[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Card>
      <ul className="divide-y">
        {posts.map((post) => {
          const { title, description, categories, readTime, slug, publishedAt } = post || {}
          const image = require(`pages/blog/${slug}/featured-image.png`).default
          const niceDate = new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })

          return (
            <li key={slug}>
              <AppLink
                href={`/blog/${slug}`}
                className="flex flex-col-reverse justify-between h-full p-4 mx-1 my-2 border-2 border-transparent hover:bg-white items-between md:p-8 md:flex-row hover:border-primary-6 rounded-xl hover:bg-opacity-10"
              >
                <div className="flex-1 md:w-[calc(100%_-_18rem)]">
                  <div className="flex flex-col justify-between w-full h-full gap-3">
                    <div>
                      <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{niceDate}</p>
                      <p className="text-xs text-gray-500">
                        <strong className="font-semibold uppercase">Read Time:</strong> {readTime}{' '}
                        {readTime <= 1 ? 'minute' : 'minutes'}
                      </p>
                    </div>
                    <div className="pr-4">
                      <p className="w-full">{description}</p>
                    </div>
                    {categories && categories.length > 0 && (
                      <ul className="flex flex-wrap w-full gap-2 pr-4 text-xs md:text-sm">
                        {categories.map((category) => (
                          <li key={category} className="px-5 py-2 leading-none border rounded-full">
                            {category}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="relative w-full h-auto mb-4 rounded-md md:w-72">
                  <Image
                    src={image.src}
                    alt={`${title} featured image`}
                    className="rounded-md"
                    layout="responsive"
                    width={300}
                    height={158}
                  />
                </div>
              </AppLink>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default PostList
