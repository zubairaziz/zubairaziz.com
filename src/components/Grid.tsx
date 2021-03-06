import React from 'react'

const Grid = (props) => {
  const { children } = props
  return (
    <div className="grid grid-cols-1 gap-2 m-5 mb-10 md:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

export default Grid
