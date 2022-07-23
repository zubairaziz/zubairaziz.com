import * as React from 'react'

import * as HIcons from '@heroicons/react/outline'
import type * as HeroIcons from '@heroicons/react/outline'
import * as SolidHIcons from '@heroicons/react/solid'

import classNames from 'classnames'

import * as CustomIcons from './custom-icons'

export type IconName = keyof typeof HeroIcons | keyof typeof CustomIcons

type DynamicIconProps = {
  icon: IconName
  className?: string
  solid?: boolean
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  icon,
  className = '',
  solid = false,
  ...otherProps
}) => {
  const id = React.useId()

  const { ...icons } = Object.assign(HIcons, { ...CustomIcons })
  const { ...solidIcons } = Object.assign(SolidHIcons, { ...CustomIcons })
  const TheIcon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element = solid
    ? solidIcons[icon]
    : icons[icon]

  const cls = classNames(className || 'w-6 h-6')

  if (!(icon in icons)) {
    console.warn(`${icon} is not a valid icon name`)
    return null
  }

  return <TheIcon id={id} className={cls} aria-hidden="true" {...otherProps} />
}

export default DynamicIcon
