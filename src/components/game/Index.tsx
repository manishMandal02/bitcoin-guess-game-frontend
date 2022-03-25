import PlayerEntry from '@components/PlayerEntry/Index'
import { usePlayerStore } from '@store/playerStore'
import React, { useEffect, useState } from 'react'
import { useBitcoinPriceStore } from 'src/store/bitcoinPrice'
import { PredictionType } from 'src/types/game.types'
import GameActive from './gameActive/Index'
import StartGame from './startGame/Index'

const Game = () => {
  // global state - bitcoin price, score, update score
  const bitcoinPrice = useBitcoinPriceStore((state) => state.price)
  // Global state - setIsLive fn to stop fetching for live price
  const setIsLive = useBitcoinPriceStore((state) => state.setIsLive)
  const isFetchPriceLive = useBitcoinPriceStore((state) => state.isLive)
  const score = usePlayerStore((state) => state.score)
  const updateScore = usePlayerStore((state) => state.updateScore)
  const username = usePlayerStore((state) => state.username)
  // Local state - game state, prediction, locked price
  const [isGameActive, setIsGameActive] = useState(false)
  const [prediction, setPrediction] = useState<PredictionType | null>(null)
  const [lockedPrice, setLockedPrice] = useState<number>(0)
  const [isWinning, setIsWinning] = useState(false)

  const handelOnPredict = (prediction: PredictionType) => {
    setIsGameActive(true)
    setLockedPrice(bitcoinPrice)
    setPrediction(prediction)
  }

  useEffect(() => {
    if (
      (bitcoinPrice > lockedPrice && prediction === 'higher') ||
      (bitcoinPrice < lockedPrice && prediction === 'lower')
    ) {
      setIsWinning(true)
    } else {
      setIsWinning(false)
    }
  }, [bitcoinPrice])

  // On game end
  const handleGameEnd = async () => {
    setIsGameActive(false)
    setIsLive(false)
    if (isWinning) {
      await updateScore(score + 1)
    } else {
      await updateScore(score === 0 ? 0 : score - 1)
    }
  }

  // On Play again
  const handlePlayAgain = () => {
    setIsLive(true)
    setPrediction(null)
  }

  return (
    <div className="flex h-full w-full text-slate-50">
      {/* If is game state is not active than show the StartGame cmp or else show the GameActive cmp */}
      {username ? (
        !prediction ? (
          <StartGame
            bitcoinPrice={bitcoinPrice}
            makePrediction={handelOnPredict}
          />
        ) : (
          <GameActive
            bitcoinPrice={bitcoinPrice}
            lockedPrice={lockedPrice}
            prediction={prediction}
            isGameActive={isGameActive}
            isWinning={isWinning}
            onGameEnd={handleGameEnd}
            onPlayAgain={handlePlayAgain}
          />
        )
      ) : (
        <PlayerEntry />
      )}
    </div>
  )
}

export default Game
