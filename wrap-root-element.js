import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/code'
import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  h2: ({children}) => (<h2 className="font-semibold mb-4 text-3xl md:text-4xl lg:text-5xl">{children}</h2>),
  h3: ({children}) => (<h3 className="font-semibold mb-4 text-2xl md:text-3xl lg:text-4xl">{children}</h3>),
  h1: ({children}) => (<h1 className="font-semibold mb-4 text-4xl md:text-5xl lg:text-6xl">{children}</h1>),
  h4: ({children}) => (<h4 className="font-semibold mb-4 text-xl md:text-2xl lg:text-3xl">{children}</h4>),
  h5: ({children}) => (<h5 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">{children}</h5>),
  h6: ({children}) => (<h6 className="font-semibold mb-4 text-base md:text-lg lg:text-xl">{children}</h6>),
  p: ({children}) => (<p className="text-base lg:text-lg mb-1">{children}</p>),
  ul: ({children}) => (<ul className="text-base lg:text-lg p-4 list-disc">{children}</ul>),
  ol: ({children}) => (<ol className="text-base lg:text-lg p-4 list-roman">{children}</ol>),

  pre: preProps => {
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
