import * as React from 'react'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

// import { ButtonGroup, Callout, LinkGrid, ApiEndpoint } from '@quiltt/components'

type FigureProps = ImageProps & {
  caption?: string
}

const variantMatchers = ['primary', 'danger', 'success', 'warning', 'info']
const linkTargetMatchers = ['', '_blank', '_self', '_parent', '_top']

const tags = {
  // callout: {
  //   attributes: {
  //     title: { type: String },
  //     type: {
  //       type: String,
  //       default: 'note',
  //       matches: ['note', 'warning'],
  //       errorLevel: 'critical',
  //     },
  //   },
  //   render: Callout,
  // },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption, ...otherProps }: FigureProps) => (
      <figure>
        <Image src={src} alt={alt} {...otherProps} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  // 'button-group': {
  //   render: ButtonGroup,
  // },
  // button: {
  //   render: ButtonGroup.Button,
  //   attributes: {
  //     variant: { type: String, matches: variantMatchers, default: 'primary' },
  //     hollow: { type: Boolean, default: false },
  //     href: { type: String },
  //     target: { type: String, matches: linkTargetMatchers },
  //     disabled: { type: String },
  //     block: { type: String },
  //   },
  // },
}

export default tags
