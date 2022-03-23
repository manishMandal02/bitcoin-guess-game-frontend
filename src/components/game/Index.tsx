import React, { useState } from 'react'
import { useBitcoinPriceStore } from 'src/store/bitcoinPrice'
import { PredictionType } from 'src/types/game.types'
import GameActive from './gameActive/Index'
import ScoreBoard from './scoreBoard/Index'
import StartGame from './startGame/Index'

const Game = () => {
  // global state - bitcoin price
  const bitcoinPrice = useBitcoinPriceStore((state) => state.price)
  // Local state - game state, prediction, locked price
  const [isGameActive, setIsGameActive] = useState(false)
  const [prediction, setPrediction] = useState<PredictionType | null>(null)
  const [lockedPrice, setLockedPrice] = useState<number>(0)

  const handelOnPredict = (prediction: PredictionType) => {
    setIsGameActive(true)
    setLockedPrice(bitcoinPrice)
    setPrediction(prediction)
  }

  return (
    <div className="flex h-full w-full text-slate-50">
      {/* If is game state is not active than show the StartGame cmp or else show the GameActive cmp */}
      {!isGameActive ? (
        <StartGame
          bitcoinPrice={bitcoinPrice}
          makePrediction={handelOnPredict}
        />
      ) : (
        prediction && (
          <GameActive
            bitcoinPrice={bitcoinPrice}
            lockedPrice={lockedPrice}
            prediction={prediction}
          />
        )
      )}
    </div>
  )
}

export default Game
