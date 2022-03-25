import React from 'react'
import LoadingSpinner from './LoadingSpinner'

interface Props {
  onClick: () => void
  isDisabled: boolean
  title: string
  isLoading: boolean
}

const Button: React.FC<Props> = ({ isDisabled, onClick, title, isLoading }) => {
  return (
    <button
      className={`mt-4 flex items-center justify-center rounded ${
        isDisabled ? 'bg-slate-100' : 'bg-primary'
      } py-2 px-4 font-semibold tracking-wide text-black transition-all duration-300 ${
        !isDisabled && 'hover:scale-105'
      }`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? <LoadingSpinner size={7} /> : title}
    </button>
  )
}

export default Button
