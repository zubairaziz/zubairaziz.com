import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="relative flex p-4 md:px-8 flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg text-gray-800">
      {children}
    </div>
  )
}

export default Card
