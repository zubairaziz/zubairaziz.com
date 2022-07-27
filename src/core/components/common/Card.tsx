import * as React from 'react'

type CardProps = React.PropsWithChildren

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="w-full p-4 shadow bg-primary-2 rounded-xl">{children}</div>
}

export default Card
