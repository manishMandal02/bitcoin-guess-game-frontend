import PredictionBtn from '@components/ui/PredictionBtn'
import Tooltip from '@components/ui/Tooltip'
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useBitcoinPriceStore } from 'src/store/bitcoinPrice'
import { PredictionType } from 'src/types/game.types'

const bitcoinLogo =
  'https://res.cloudinary.com/vastia/image/upload/v1647950730/bitcoin-price-predict/bitcoin-logo.png'

interface Props {
  makePrediction: (guess: PredictionType) => void
  bitcoinPrice: number
}

const StartGame: React.FC<Props> = ({ makePrediction, bitcoinPrice }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-slate-50">
      {/* Bitcoin live price */}
      <div className="-mt-32 flex flex-col items-center justify-center">
        <div className="-ml-3 flex items-center justify-center">
          <Image
            src={bitcoinLogo}
            height={26}
            width={26}
            className="select-none"
          />
          <p className="ml-1.5 text-2xl font-semibold">Bitcoin Price</p>
        </div>
        {/* Show fetching... if the price is not available */}
        <div className="relative mt-3 rounded-md  bg-primary-dark px-6 py-3.5 ">
          {bitcoinPrice ? (
            <p className="text-2xl font-medium">{bitcoinPrice}</p>
          ) : (
            <p className="text-2xl">fetching...</p>
          )}
          <span className="absolute -top-px -right-px  flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
          </span>
        </div>
      </div>
      {/* Predict buttons with on click handler to start the game after prediction is made */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex  select-none items-center ">
          <p className=" -mt-1 text-xl"> Make a guess</p>
          <Tooltip text="Select either Higher or Lower to make a prediction for the bitcoin price after 1 minute" />
        </div>
        <div className="mt-3 flex items-center">
          <PredictionBtn
            onClick={() => {
              makePrediction('higher')
            }}
            isHigher
          />
          <PredictionBtn
            onClick={() => {
              makePrediction('lower')
            }}
            marginLeft={3}
          />
        </div>
      </div>
    </div>
  )
}

export default StartGame
