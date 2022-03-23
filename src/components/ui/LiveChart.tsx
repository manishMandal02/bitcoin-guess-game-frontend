import React from 'react'

interface Props {
  initialValue: number
}

const LiveChart: React.FC<Props> = ({ initialValue }) => {
  return (
    <>
      <svg>
        <polyline
          points="0,0 80,20 125,125 250,125"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </>
  )
}

export default LiveChart
