import React from 'react'

interface Props {
  score: number
}

const ScoreBoard: React.FC<Props> = ({ score }) => {
  return (
    <div className="z-0 flex select-none flex-col items-center justify-center self-end rounded-sm  bg-violet-300 py-1 px-1.5 text-slate-900   ">
      <p className="text-4xl font-bold">{score}</p>
      <p className="mt-px font-semibold tracking-wide text-slate-900">
        Your Score
      </p>
    </div>
  )
}

export default ScoreBoard
