import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface Props {
  duration: number
}

const CountdownTimer: React.FC<Props> = ({ duration }) => {
  return (
    <div className="svgSelector">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={['#3aceb8', '#3aceb8']}
        colorsTime={[60, 0]}
        isSmoothColorTransition
        size={85}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default CountdownTimer
