export type ContentNode = {
  id: string
  title: string
  slug: string
  top: number
  children?: TableOfContents
}

export type TableOfContents = Array<ContentNode>

export type FrontMatter = {
  title: string
  slug: string
  folder: string
  description?: string
  pageTitle?: string
  categories?: string[]
  publishedAt: Date | string
  updatedAt?: Date | string
}
