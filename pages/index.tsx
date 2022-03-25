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
  // axios.defaults.baseURL = 'http://localhost:8000/api'
  axios.defaults.baseURL = 'https://bitcoin-game.herokuapp.com/api'

  return (
    <div className="flex h-screen flex-col items-center justify-start bg-primary-dark py-2">
      <Head>
        <title>Bitcoin Price Predict</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🅱️</text></svg>"
        />
      </Head>
      {/* Main root container */}
      <div className=" flex h-screen w-full flex-col  items-center justify-between">
        {/* Header*/}
        <Header />
        <div className="flex h-full w-full items-center justify-center">
          {/* Game main container */}
          <div className="z-20 mt-8 flex h-100 w-150 items-center justify-center rounded bg-slate-800 shadow-md shadow-emerald-400 ">
            {/* Score board */}

            <Game />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
