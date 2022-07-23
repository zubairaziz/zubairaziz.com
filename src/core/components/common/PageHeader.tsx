import * as React from 'react'

type PageHeaderProps = {
  title: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const PageHeader: React.FC<PageHeaderProps> = ({ as = 'h1', title }) => {
  const Component = as

  return (
    <header className="mb-4">
      {title && (
        <Component
          className="text-2xl font-semibold text-primary-10 lg:text-3xl"
          data-test="page-header"
        >
          {title}
        </Component>
      )}
    </header>
  )
}

export default PageHeader
