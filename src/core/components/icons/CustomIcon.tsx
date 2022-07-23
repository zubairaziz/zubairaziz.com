import * as React from 'react'

type CustomIconProps = React.PropsWithChildren<React.SVGProps<SVGSVGElement>>

const CustomIcon: React.FC<CustomIconProps> = ({
  className = '',
  fill = 'none',
  viewBox = '0 0 24 24',
  children,
  ...otherProps
}) => {
  const cls = className || 'w-6 h-6 text-neutral-8'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox={viewBox}
      fill={fill}
      className={cls}
      {...otherProps}
    >
      {children}
    </svg>
  )
}

export default CustomIcon
