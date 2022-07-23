export type ContentNode = {
  id: string
  title: string
  slug: string
  top: number
  children?: TableOfContents
}

export type TableOfContents = Array<ContentNode>
