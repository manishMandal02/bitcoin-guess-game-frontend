import CountdownTimer from '@components/ui/CountdownTimer'
import EmojiReaction from '@components/ui/EmojiReaction'
import LiveChart from '@components/ui/LiveChart'
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
    <div className="relative flex w-full select-none flex-col items-center justify-between text-slate-50">
      {/* Live chart */}
      <p className="text-xl font-medium">Live Price Updates</p>
      <div className="flex w-full flex-col">
        <div className="mt-18 w-full">
          <LiveChart initialValue={lockedPrice} />
        </div>
      </div>
      {/* Emoji reaction */}

      {/* Prediction info */}
      <div className="relative  mb-16 flex w-full items-center justify-center px-6">
        <p className="absolute right-96 left-96  -top-7  text-center text-xl font-medium tracking-wide">
          Prediction
        </p>
        <div className="absolute left-8 -bottom-10">
          <CountdownTimer duration={60} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-around rounded bg-primary-dark p-5 px-6">
            {/* Current prediction */}
            <PredictionBtn
              smallSize
              isHigher={prediction === 'higher' ? true : false}
            />
            <span className="mx-2 text-xl font-semibold tracking-wide">
              than
            </span>
            {/* Locked price */}
            <div className="relative rounded-md bg-violet-300 px-6 py-3.5 font-bold text-slate-900 ">
              <p className="text-2xl font-medium">{lockedPrice}</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-14 right-2.5">
          <EmojiReaction reaction={'happy'} />
        </div>
      </div>
    </div>
  )
}

export default GameActive
