import React, { useEffect, useState } from 'react'
import { useBitcoinPriceStore } from 'src/store/bitcoinPrice'
import { Coordinate, Coordinates } from 'src/types/game.types'
import priceDiffPercentage from 'src/utils/priceDiffPercentage'

interface Props {
  initialValue: number
  isWinning: boolean
}

const LiveChart: React.FC<Props> = ({ initialValue, isWinning }) => {
  // Global state - price, isLive
  const latestPrice = useBitcoinPriceStore((state) => state.price)
  const isGameActive = useBitcoinPriceStore((state) => state.isLive)
  //   Local state - coordinates
  const [coordinates, setCoordinates] = useState<Coordinates>([
    { x: 0, y: 120, price: initialValue },
  ])

  //   update chart fn
  const updateChart = () => {
    const lastCoord = coordinates[coordinates.length - 1]
    let priceDiff = priceDiffPercentage(initialValue, latestPrice)
    //
    priceDiff = priceDiff > 50 ? 50 : priceDiff < -55 ? -55 : priceDiff
    console.log('diff', priceDiff)
    const newCoord: Coordinate = {
      x:
        coordinates.length <= 1
          ? 0
          : lastCoord.x === 0
          ? 100
          : lastCoord.x + 100,
      y:
        priceDiff <= 0
          ? Math.floor(120 + Math.abs(priceDiff * 2))
          : Math.floor(120 - priceDiff * 2),
      price: latestPrice,
    }
    console.log('inside', newCoord)
    setCoordinates((prevState) => [...prevState, newCoord])
  }

  //   Chart updates every time the price changes
  useEffect(() => {
    if (isGameActive) {
      updateChart()
    }
  }, [latestPrice])

  return (
    <div className="relative">
      {/* Chart */}
      <svg width={1050} height={256} className="transition-all duration-200">
        <defs>
          <marker
            id="circle"
            viewBox="0 0 10 10"
            refX="1"
            refY="3"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle
              cx="3"
              cy="3"
              r="2.2"
              fill={isWinning ? '#34d399' : '#f87171'}
            />
          </marker>
        </defs>
        <polyline
          points={`${coordinates.map((coord) => `${coord.x},${coord.y} `)}`}
          stroke="white"
          strokeWidth="3"
          fill="none"
          className="transition-all duration-200"
          marker-end="url(#circle)"
        />
      </svg>
      {/* Reference Line changes bg based on isWinning state */}
      <div
        className={`absolute top-31 h-1 w-full  opacity-70 ${
          isWinning ? 'bg-emerald-300' : 'bg-red-300'
        }`}
      ></div>
    </div>
  )
}

export default LiveChart
