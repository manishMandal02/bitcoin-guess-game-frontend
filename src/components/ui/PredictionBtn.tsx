import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

interface Props {
  onClick?: () => void
  isHigher?: boolean
  marginLeft?: number
  smallSize?: boolean
}

const PredictionBtn: React.FC<Props> = ({ onClick, isHigher, smallSize }) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer select-none flex-col items-center justify-center rounded ${
        isHigher ? 'bg-green-500' : 'bg-red-500'
      } ${
        !smallSize ? 'px-6' : 'px-2.5'
      } py-2  font-semibold text-slate-100 transition-all duration-300 hover:scale-105`}
    >
      {isHigher ? (
        <>
          <AiOutlineArrowUp
            className={`${!smallSize ? 'text-4xl' : 'text-2xl'} font-bold `}
          />
          Higher
        </>
      ) : (
        <>
          <AiOutlineArrowDown
            className={`${!smallSize ? 'text-4xl' : 'text-2xl'} font-bold `}
          />
          Lower
        </>
      )}
    </div>
  )
}

export default PredictionBtn
