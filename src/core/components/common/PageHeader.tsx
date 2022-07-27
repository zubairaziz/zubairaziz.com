import * as React from 'react'

import classNames from 'classnames'

type PageHeaderProps = {
  title: string
  backgroundImage?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage = '', as = 'h1' }) => {
  const Component = as

  const headerCls = classNames('w-full mb-4', backgroundImage && 'h-32 md:h-64 xl:h-96')
  const titleCls = classNames(
    'relative z-10 font-semibold text-primary-10',
    backgroundImage
      ? 'inset-y-0 text-center text-secondary-6 text-4xl lg:text-5xl mt-8 md:mt-24 xl:mt-40'
      : 'text-2xl lg:text-3xl'
  )

  return (
    <header className={headerCls}>
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 w-full h-32 bg-center bg-cover md:h-64 xl:h-96 filter brightness-50 contrast-75"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {title && (
        <Component className={titleCls} data-test="page-header">
          {title}
        </Component>
      )}
    </header>
  )
}

export default PageHeader
