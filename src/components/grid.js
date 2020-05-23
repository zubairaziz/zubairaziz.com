import React from 'react'

const Grid = (props) => {
  const { children } = props
  return (
    <div className="grid sm:gap-2 md:gap-4 lg:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 mb-10">
      {children}
    </div>
  )
}

export default Grid
