import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="relative flex flex-col w-full min-w-0 p-4 mb-6 text-gray-800 break-words bg-white rounded-lg shadow-xl lg:p-6 md:px-8">
      {children}
    </div>
  )
}

export default Card
