import PredictionBtn from '@components/ui/PredictionBtn'
import React from 'react'
import { PredictionType } from 'src/types/game.types'

interface Props {
  bitcoinPrice: number
  prediction: PredictionType
  lockedPrice: number
}

const GameActive: React.FC<Props> = ({
  bitcoinPrice,
  lockedPrice,
  prediction,
}) => {
  return (
    <div className="select-none text-slate-50 ">
      {/* Live chart */}
      <div className="flex">
        <p className="text-xl font-medium">Live Price Updates</p>
      </div>
      {/* Prediction info */}
      <div className="mt-4 ">
        <p className="mb-1 text-center text-xl font-medium tracking-wide">
          Prediction
        </p>
        <div className="flex items-center justify-around rounded bg-primary-dark p-5 px-6">
          {/* Current prediction */}
          <PredictionBtn
            smallSize
            isHigher={prediction === 'higher' ? true : false}
          />
          <span className="mx-2 text-xl font-semibold tracking-wide">than</span>
          {/* Locked price */}
          <div className="relative rounded-md bg-violet-300 px-6 py-3.5 font-bold text-slate-900 ">
            <p className="text-2xl font-medium">{lockedPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameActive
