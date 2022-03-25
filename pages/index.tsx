import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/header/Index'
import ScoreBoard from '@components/game/scoreBoard/Index'

const Game = dynamic(() => import('../src/components/game/Index'), {
  ssr: false,
})
import { useEffect } from 'react'
import { useBitcoinPriceStore } from 'src/store/bitcoinPrice'
import axios from 'axios'
import { usePlayerStore } from 'src/store/playerStore'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  // Global state - fetch price, isLive, score
  const fetchPrice = useBitcoinPriceStore((state) => state.fetchPrice)
  const isFetchPriceLive = useBitcoinPriceStore((state) => state.isLive)
  const playerScore = usePlayerStore((state) => state.score)
  const username = usePlayerStore((state) => state.username)

  useEffect(() => {
    fetchPrice()
    const interval = setInterval(() => {
      if (isFetchPriceLive) {
        fetchPrice()
      }
    }, 6000)

    return () => {
      clearInterval(interval)
    }
  }, [isFetchPriceLive])

  // axios default backend url
  axios.defaults.baseURL = 'http://localhost:8000/api'

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-primary-dark py-2">
      <Head>
        <title>Bitcoin Price Predict</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🅱️</text></svg>"
        />
      </Head>
      {/* Main root container */}
      <div className="relative flex  h-full w-full flex-col items-center">
        {/* Header*/}
        <Header />

        {/* Game main container */}
        <div className="relative z-20 mt-12 flex h-100 w-150 items-center justify-center rounded bg-slate-800 shadow-md shadow-emerald-500  ">
          {/* Score board */}
          <div className="absolute -top-22 right-1 ">
            {username && <ScoreBoard score={playerScore} />}
          </div>
          <Game />
        </div>
      </div>
    </div>
  )
}

export default Home
