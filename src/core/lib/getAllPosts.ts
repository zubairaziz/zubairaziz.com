import matter from 'gray-matter'
import fs from 'node:fs'
import type { FrontMatter } from 'types'

/**
 * Gets all blog posts from the './src/core/pages/blog/' directory
 * */
export const getAllPosts = async () => {
  const allFiles: string[] = fs.readdirSync('./src/pages/blog')
  // remove index.tsx from list
  const slugs = allFiles.filter((post) => {
    if (post !== 'index.tsx' && post !== '.DS_Store') {
      return post
    }
  })

  const posts: FrontMatter[] = []
  for await (const slug of slugs) {
    const data = fs.readFileSync(`./src/pages/blog/${slug}/index.md`)
    const content = await matter(data)
    const { publishedAt, updatedAt, ...rest } = content.data as FrontMatter
    const post = {
      ...rest,
      slug,
      publishedAt: (publishedAt as Date).toDateString(),
      updatedAt: (updatedAt as Date)?.toDateString() ?? null,
    }

    posts.push(post as FrontMatter)
  }

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return sortedPosts
}
