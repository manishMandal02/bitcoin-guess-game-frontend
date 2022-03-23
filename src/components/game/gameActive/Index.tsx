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
    <div>
      {/* Live chart */}
      <div className="flex"></div>
      {/* Prediction info */}
      <div className="flex"></div>
    </div>
  )
}

export default GameActive
