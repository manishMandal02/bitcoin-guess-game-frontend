import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/header/Index'
import ScoreBoard from '@components/game/scoreBoard/Index'
import Game from '@components/game/Index'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-primary-dark py-2">
      <Head>
        <title>Bitcoin Price Game</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🅱️</text></svg>"
        />
      </Head>
      {/* Main root container */}
      <div className="relative flex  h-full w-full flex-col items-center">
        {/* Header*/}
        <Header />
        {/* Score board */}
        <div className="fixed right-64 top-30   z-0">
          <ScoreBoard score={5} />
        </div>
        {/* Game main container */}
        <div className="relative z-20 mt-12 flex h-100 w-9/12 items-center justify-center rounded bg-slate-800 shadow-sm shadow-teal-400  ">
          <Game />
        </div>
      </div>
    </div>
  )
}

export default Home
