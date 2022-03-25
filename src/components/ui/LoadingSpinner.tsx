import React from 'react'

interface Props {
  color?: string
  size: number
}

const LoadingSpinner: React.FC<Props> = ({ color, size }) => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-b-2 border-${
          color ? color : 'black'
        }  `}
      ></div>
    </div>
  )
}

export default LoadingSpinner
