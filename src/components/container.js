import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="container mx-auto -mt-16 md:-mt-24 lg:-mt-32 p-3">
      {children}
    </div>
  )
}

export default Card
