import React from 'react'

interface Props {
  score: number
}

const ScoreBoard: React.FC<Props> = ({ score }) => {
  return (
    <div className="z-0 flex flex-col items-center justify-center self-end rounded-sm  bg-teal-400 py-1.5 px-3.5 text-slate-50  opacity-95 ">
      <p className="text-5xl font-bold">{score}</p>
      <p className="mt-1 font-semibold text-slate-50">Your Score</p>
    </div>
  )
}

export default ScoreBoard
