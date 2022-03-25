import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
//
import BitcoinPrice from '@components/ui/BitcoinPrice'
import CountdownTimer from '@components/ui/CountdownTimer'
import EmojiReaction from '@components/ui/EmojiReaction'
import LiveChart from '@components/ui/LiveChart'
import PredictionBtn from '@components/ui/PredictionBtn'
import { PredictionType } from 'src/types/game.types'
interface Props {
  bitcoinPrice: number
  prediction: PredictionType
  lockedPrice: number
  isGameActive: boolean
  isWinning: boolean
  onGameEnd: () => void
  onPlayAgain: () => void
}

const GameActive: React.FC<Props> = ({
  bitcoinPrice,
  lockedPrice,
  prediction,
  isGameActive,
  isWinning,
  onGameEnd,
  onPlayAgain,
}) => {
  // Local state - Game state, is player winning

  // Checking if the player is winning or not

  return (
    <div className="relative flex w-full select-none flex-col items-center justify-between pt-4 text-slate-50">
      {/* Live chart */}
      {/* <p className="text-xl font-medium">Live Price Updates</p> */}
      <div className="flex w-full flex-col">
        <div>
          <BitcoinPrice isLive={isGameActive} price={bitcoinPrice} />
        </div>
        <div className="mt-6   h-44 w-full bg-primary-dark">
          <LiveChart isWinning={isWinning} initialValue={lockedPrice} />
        </div>
      </div>
      {/* Emoji reaction */}

      {/* Prediction info */}
      <div className="relative mb-16 flex w-full items-center justify-around px-6">
        {isGameActive && (
          <p className="absolute right-72 left-60  -top-4  text-center text-xl font-medium tracking-wider">
            Prediction
          </p>
        )}
        <div className=" left-8 -bottom-10">
          <CountdownTimer onComplete={onGameEnd} duration={60} />
        </div>
        {/* If game active then show prediction made info or show game over if game ended */}
        {isGameActive ? (
          <div className="-mb-9 flex items-center justify-around rounded bg-primary-dark p-5 px-7">
            {/* Current prediction */}
            <PredictionBtn
              smallSize
              isHigher={prediction === 'higher' ? true : false}
            />
            <span className="mx-2.5 text-xl font-semibold tracking-wide">
              than
            </span>
            {/* Locked price */}
            <div className="relative rounded-md bg-violet-300 px-6 py-3.5 font-bold text-slate-900 ">
              <p className="text-2xl font-medium">${lockedPrice}</p>
            </div>
          </div>
        ) : (
          // After Game end message with play again btn
          <div className=" mt-5 flex flex-col rounded-lg bg-primary-dark py-5 px-16 pt-5 pb-6 text-slate-50 ">
            {/* <p className="text-center text-2xl font-semibold">Game Over</p> */}
            <p className="text-center text-xl font-medium">
              {isWinning ? (
                <>
                  <span className="mb-3  text-lg">
                    🎊 &nbsp; CONGRATULATIONS &nbsp; 🎊 <br />
                  </span>
                  🏆 YOU WON 🏆
                </>
              ) : (
                <>
                  YOU LOST 😥 <br />{' '}
                  <span className="mt-2 text-base"> Better Luck Next Time</span>
                </>
              )}
            </p>
            <button
              className="mt-3 flex items-center justify-center rounded bg-primary py-1.5 px-1 font-semibold tracking-wide text-black transition-all duration-300 hover:scale-105"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </div>
        )}

        <div className=" -mb-4">
          <EmojiReaction reaction={isWinning ? 'happy' : 'sad'} />
        </div>
      </div>
      {/* Confetti celebration on player win */}
      {!isGameActive && isWinning && (
        <div className="fixed top-0 left-0 right-0">
          <Confetti gravity={0.4} />
        </div>
      )}
    </div>
  )
}

export default GameActive
