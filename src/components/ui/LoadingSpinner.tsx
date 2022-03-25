import React from 'react'

interface Props {
  color?: string
  size: number
}

const LoadingSpinner: React.FC<Props> = ({ color, size }) => {
  return (
    <>
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-b-2  border-slate-50  `}
      ></div>
    </>
  )
}

export default LoadingSpinner
