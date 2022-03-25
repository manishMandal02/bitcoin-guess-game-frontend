import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

interface Props {
  onClick?: () => void
  isHigher?: boolean
  smallSize?: boolean
  isDisabled?: boolean
}

const PredictionBtn: React.FC<Props> = ({
  onClick,
  isHigher,
  smallSize,
  isDisabled,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick && !isDisabled) onClick()
      }}
      className={`flex ${
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } select-none  flex-col items-center justify-center rounded text-slate-900 ${
        isHigher ? 'bg-emerald-300' : 'bg-red-400'
      } ${!smallSize ? 'px-5 py-2' : 'px-3.5 py-2'}   ${
        smallSize ? 'text-sm' : 'text-lg'
      } font-semibold tracking-wide text-slate-100 transition-all duration-300 hover:scale-105`}
    >
      {isHigher ? (
        <>
          <AiOutlineArrowUp size={smallSize ? 32 : 45} />
          Higher
        </>
      ) : (
        <>
          <AiOutlineArrowDown size={smallSize ? 36 : 45} />
          Lower
        </>
      )}
    </div>
  )
}

export default PredictionBtn
