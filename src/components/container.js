import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="container p-3 mx-auto -mt-16 md:-mt-24 lg:-mt-32">
      {children}
    </div>
  )
}

export default Card
