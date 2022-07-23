import type { Tag } from '@markdoc/markdoc'

export function getNodeText(node: Tag): string {
  let text = ''
  for (const child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child as Tag)
  }
  return text
}
