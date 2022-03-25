import ScoreBoard from '@components/game/scoreBoard/Index'
import { usePlayerStore } from '@store/playerStore'
import React from 'react'

const Header = () => {
  const username = usePlayerStore((state) => state.username)
  const signOut = usePlayerStore((state) => state.signOut)
  const playerScore = usePlayerStore((state) => state.score)

  return (
    <div
      className={`mb-10 flex w-full items-center justify-between py-2 pl-52 pr-80 text-left text-slate-100`}
    >
      <h1 className="flex cursor-pointer items-center text-xl font-medium">
        <span className="select-none text-4xl">🅱️</span>Guess Bitcoin Price
      </h1>
      {/* Username */}
      <div className=" -mb-6 -mr-28">
        {username && <ScoreBoard score={playerScore} />}
      </div>
      {username ? (
        <div className="flex items-center  ">
          <p className="select-none text-xl font-semibold text-slate-100">
            Welcome,{' '}
            <span className="cursor-pointer text-emerald-300">@{username}</span>
          </p>
          <button
            className="ml-6 flex select-none items-center justify-center rounded border-2 border-primary-secondary px-2.5 py-1 text-sm font-medium text-white"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Header
