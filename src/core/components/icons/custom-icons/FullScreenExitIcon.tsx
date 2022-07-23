import * as React from 'react'

import CustomIcon from '../CustomIcon'

const FullScreenExitIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { className = '', ...otherProps } = props
  const cls = className || 'w-6 h-6 text-neutral-8'

  return (
    <CustomIcon viewBox="0 0 24 24" className={cls} {...otherProps}>
      <path
        d="M14 10V4H16V6.59L19.29 3.3L20.7 4.71L17.41 8H20V10H14ZM3.99999 10V8H6.58999L3.28999 4.71L4.70999 3.29L7.99999 6.59V4H9.99999V10H3.99999ZM20 14V16H17.41L20.7 19.29L19.29 20.7L16 17.41V20H14V14H20ZM9.99999 14V20H7.99999V17.41L4.70999 20.71L3.28999 19.29L6.58999 16H3.99999V14H9.99999Z"
        fill="currentColor"
      />
    </CustomIcon>
  )
}

export default FullScreenExitIcon
