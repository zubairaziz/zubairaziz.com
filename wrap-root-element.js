import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/code'
import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  h2: ({ children }) => (
    <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
      {children}
    </h3>
  ),
  h1: ({ children }) => (
    <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl">
      {children}
    </h1>
  ),
  h4: ({ children }) => (
    <h4 className="mb-4 text-xl font-semibold md:text-2xl lg:text-3xl">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="mb-4 text-lg font-semibold md:text-xl lg:text-2xl">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="mb-4 text-base font-semibold md:text-lg lg:text-xl">
      {children}
    </h6>
  ),
  p: ({ children }) => <p className="mb-1 text-base lg:text-lg">{children}</p>,
  ul: ({ children }) => (
    <ul className="p-4 text-base list-disc lg:text-lg">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="p-4 text-base lg:text-lg list-roman">{children}</ol>
  ),

  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
