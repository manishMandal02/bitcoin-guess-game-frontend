import { useBitcoinPriceStore } from '@store/bitcoinPrice'
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface Props {
  duration: number
  onComplete: () => void
}

const CountdownTimer: React.FC<Props> = ({ duration, onComplete }) => {
  return (
    <div className="svgSelector">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={['#34d399', '#34d399']}
        colorsTime={[60, 0]}
        isSmoothColorTransition
        size={85}
        onComplete={onComplete}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default CountdownTimer
