import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="container mx-auto -mt-8 md:-mt-16 lg:-mt-24 p-3">
      {children}
    </div>
  )
}

export default Card
