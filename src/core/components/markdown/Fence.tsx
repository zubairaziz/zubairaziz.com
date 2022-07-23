import * as React from 'react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language, DefaultProps } from 'prism-react-renderer'

type AvailableLanguages = Language | 'http' | 'ruby' | 'php' | 'java'
type FenceProps = React.PropsWithChildren<{ language: AvailableLanguages }>

const Fence: React.FC<FenceProps> = ({ children, language }) => {
  const code = (children as string).toString()
  const { ...highlightProps } = defaultProps
  return (
    <Highlight
      {...highlightProps}
      code={code.trimEnd()}
      language={language as Language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, index) => (
              <React.Fragment key={`line-${index}`}>
                {line.map((token, tokenIndex) => {
                  const { key, ...otherProps } = getTokenProps({ token })
                  return <span key={`line-${index}-token-${tokenIndex}-${key}`} {...otherProps} />
                })}
                {'\n'}
              </React.Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default Fence
