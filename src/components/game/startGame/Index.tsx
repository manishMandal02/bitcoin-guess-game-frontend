import BitcoinPrice from '@components/ui/BitcoinPrice'
import PredictionBtn from '@components/ui/PredictionBtn'
import Tooltip from '@components/ui/Tooltip'
import React from 'react'
import { PredictionType } from 'src/types/game.types'

interface Props {
  makePrediction: (guess: PredictionType) => void
  bitcoinPrice: number
}

const StartGame: React.FC<Props> = ({ makePrediction, bitcoinPrice }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start pt-28 text-slate-50">
      {/* Bitcoin live price */}
      <BitcoinPrice isLive={!!bitcoinPrice} price={bitcoinPrice} />
      {/* Predict buttons with on click handler to start the game after prediction is made */}
      <div className="mt-10 flex flex-col   items-center">
        <div className="flex select-none items-center justify-center ">
          <p className=" -mt-1 text-xl"> Make a guess</p>
          <Tooltip text="Select either Higher or Lower to make a prediction for the bitcoin price after 1 minute" />
        </div>
        <div className="mt-3 flex items-center ">
          <PredictionBtn
            onClick={() => {
              makePrediction('higher')
            }}
            isHigher
          />
          <div className="ml-3">
            <PredictionBtn
              onClick={() => {
                makePrediction('lower')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartGame
