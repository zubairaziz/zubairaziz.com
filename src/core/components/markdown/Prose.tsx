import * as React from 'react'

import classNames from 'classnames'

type ProseProps = React.PropsWithChildren<{
  as?: 'div' | 'span' | 'p'
  className?: string
}>

const Prose: React.FC<ProseProps> = ({ as = 'div', className, children, ...otherProps }) => {
  const Component = as

  return (
    <Component
      className={classNames(
        className,
        'prose prose-primary max-w-none dark:prose-invert',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-primary-500 dark:prose-lead:text-primary-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-primary-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_0_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,8px)-6px))_0_0_var(--tw-prose-underline,theme(colors.primary.4))] hover:prose-a:[--tw-prose-underline-size:10px] dark:[--tw-prose-background:theme(colors.primary.10)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.primary.9))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-primary-10 prose-pre:shadow-lg dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-primary-300/10',
        // hr
        'dark:prose-hr:border-primary-800'
      )}
      {...otherProps}
    >
      {children}
    </Component>
  )
}

export default Prose
