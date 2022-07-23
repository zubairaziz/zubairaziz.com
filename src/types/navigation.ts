// import type { IconName } from './icons'

export type NavigationLink = {
  title: string
  href: string
  description?: string
  //   icon?: IconName
}

export type NavigationItem = NavigationLink & { children?: NavigationItem[] }

export type Navigation = NavigationItem[]
