import * as React from 'react'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import type { NavigationItem } from 'types'

import { PageHeader, Prose } from 'core/components'

import BlogLayoutPagination from './BlogLayoutPagination'

type BlogLayoutMainProps = React.PropsWithChildren<{
  title?: string
  pageTitle?: string
  previousPage?: NavigationItem
  nextPage?: NavigationItem
  featuredImage?: StaticImageData
  frontmatter: Record<string, unknown>
}>

const BlogLayoutMain: React.FC<BlogLayoutMainProps> = ({
  title,
  pageTitle,
  children,
  previousPage,
  nextPage,
  featuredImage,
  frontmatter,
}) => {
  const headerTitle = pageTitle ?? title
  const backgroundImage = featuredImage?.src ?? undefined

  console.log({ frontmatter })

  const categories: string[] = (frontmatter?.categories as string[]) ?? []
  const publishedAt = (frontmatter?.publishedAt as string) ?? undefined
  const updatedAt = (frontmatter?.updatedAt as string) ?? undefined

  return (
    <div className="relative flex-auto w-full min-w-0 py-20 max-w-7xl lg:max-w-full">
      <article className="relative block w-full px-4 lg:px-8">
        {backgroundImage && (
          <figure className="relative w-full h-full mb-4">
            <Image
              src={backgroundImage}
              alt="Featured Image"
              layout="responsive"
              width={1200}
              height={630}
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end w-full h-full via-black/50 bg-gradient-to-b from-transparent to-black/80">
              <div className="relative flex justify-between p-4 text-white">
                <ul className="flex flex-wrap gap-2 text-xs md:text-sm max-w-1/2">
                  {categories &&
                    categories?.length > 0 &&
                    categories?.map((category: string) => (
                      <li
                        className="px-3 py-1 leading-none border border-white rounded-full"
                        key={category}
                      >
                        {category}
                      </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 text-xs md:text-sm max-w-1/2">
                  {publishedAt && (
                    <span>
                      <strong className="font-bold">Published: </strong>
                      {new Date(publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  )}
                  {updatedAt && (
                    <span>
                      <strong className="font-bold">Updated: </strong>
                      {new Date(updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  )}
                </div>
              </div>
            </figcaption>
          </figure>
        )}
        {headerTitle && <PageHeader title={headerTitle} />}
        <Prose>{children}</Prose>
      </article>
      {!!(previousPage || nextPage) && (
        <BlogLayoutPagination previousPage={previousPage} nextPage={nextPage} />
      )}
    </div>
  )
}

export default BlogLayoutMain
