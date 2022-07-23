import * as React from 'react'

import type { ContentNode, TableOfContents } from 'types'

const useTableOfContents = (tableOfContents: TableOfContents) => {
  const [currentSection, setCurrentSection] = React.useState(tableOfContents[0]?.id)

  const getHeadings = React.useCallback(() => {
    function* traverse(
      node: TableOfContents | ContentNode
    ): Generator<ContentNode, any, undefined> {
      if (Array.isArray(node)) {
        for (const child of node) {
          yield* traverse(child)
        }
      } else {
        const element = document.getElementById(node.id)
        if (!element) return

        const style = window.getComputedStyle(element)
        const scrollMarginTop = parseFloat(style.scrollMarginTop)

        const top = window.scrollY + element.getBoundingClientRect().top - scrollMarginTop
        yield { id: node.id, top } as unknown as ContentNode

        for (const child of node.children ?? []) {
          yield* traverse(child)
        }
      }
    }

    return Array.from(traverse(tableOfContents))
  }, [tableOfContents])

  React.useEffect(() => {
    const headings = getHeadings()
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      const sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)

      const top = window.pageYOffset
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    } as EventListenerOptions)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
        passive: true,
      } as EventListenerOptions)
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export default useTableOfContents
