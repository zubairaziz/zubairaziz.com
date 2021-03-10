import React from 'react'

const Card = (props) => {
  const { children } = props
  return (
    <div className="relative flex flex-col w-full p-4 mx-auto mb-6 text-gray-800 break-words bg-white rounded-lg shadow-xl max-w-7xl lg:p-6 md:p-8 xl:p-12 richtext">
      {children}
    </div>
  )
}

export default Card
