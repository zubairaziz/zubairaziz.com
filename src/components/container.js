import React from 'react'

class Container extends React.Component {
  render() {
    const { children } = this.props
    return <div className="container mx-auto p-3">{children}</div>
  }
}

export default Container
