import type { Tag, RenderableTreeNodes } from '@markdoc/markdoc'

import slugify from 'slugify'

import { getNodeText } from './getNodeText'

const slugifyOptions = {
  replacement: '-',
  remove: /[\d*+~=.()`'"!:@$%]/g,
  lower: true,
  strict: false,
  locale: 'en',
  trim: true,
}

export const collectHeadings = (nodes: RenderableTreeNodes) => {
  const existingIds: Record<string, number> = {}
  const sections: Array<Tag> = []

  for (const node of nodes as Tag[]) {
    if (/^h[23]$/.test(node?.name || '')) {
      const title = getNodeText(node)
      if (title) {
        const id = slugify(title, slugifyOptions)
        if (!existingIds[id]) {
          Object.assign(existingIds, { [id]: 0 })
        }
        existingIds[id]++
        if (existingIds[id] > 1) {
          node.attributes.id = `${id}-${existingIds[id]}`
        } else {
          node.attributes.id = id
        }
        if (node.name === 'h3') {
          if (sections[sections.length - 1]) {
            ;(sections[sections.length - 1] as Tag).children.push({
              ...node.attributes,
              // @ts-ignore
              title,
            })
          }
        } else {
          sections.push({
            ...node.attributes,
            // @ts-ignore
            title,
            children: [],
          })
        }
      }
    }

    sections?.push(...collectHeadings(node?.children ?? []))
  }

  return sections
}
