import Button from '@components/ui/Button'
import { useBitcoinPriceStore } from '@store/bitcoinPrice'
import { usePlayerStore } from '@store/playerStore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import debounce from 'src/utils/debounce'
import InputBoxWithMessage from './InputBoxWithMessage'

const PlayerEntry = () => {
  // Global state - price & get player,, create player
  const setIsLive = useBitcoinPriceStore((state) => state.setIsLive)
  const fetchPlayer = usePlayerStore((state) => state.fetchPlayer)
  const createPlayer = usePlayerStore((state) => state.createPlayer)
  const isLoadingGlobal = usePlayerStore((state) => state.isLoading)
  // local state - username, name availability, is new user
  const [username, setUsername] = useState('')
  const [isUserNameAvailable, setIsUserNameAvailable] = useState(false)
  const [isNewUser, setIsNewUser] = useState(true)
  const [isLoadingLocal, setIsLoadingLocal] = useState(false)

  // check username availability while typing
  const checkUsernameAvailability = async (username: string) => {
    let data = { isUserNameAvailable: false }
    if (username.length > 3) {
      setIsLoadingLocal(true)
      const { data: resData } = await axios.post(
        '/player/usernameAvailability',
        {
          username,
        }
      )
      setIsLoadingLocal(false)
      data = resData
    }
    if (data && data.isUserNameAvailable) {
      setIsUserNameAvailable(true)
    } else {
      setIsUserNameAvailable(false)
    }
    return data
  }

  // check username availability as user types
  useEffect(() => {
    //
    debounce(checkUsernameAvailability(username))
  }, [username])

  // stop api call to fetch live bitcoin price
  useEffect(() => {
    setIsLive(false)
  }, [])

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="-mb-6 flex flex-col rounded-lg bg-primary-dark py-5 px-16 text-slate-50 ">
          {/* Heading - based new or old users */}
          <p className="text-center text-2xl font-semibold">
            {isNewUser ? 'Get Ready to Play' : 'Welcome back!'}
          </p>
          {/* Input box with message area */}
          <InputBoxWithMessage
            title="Username"
            username={username}
            isNewUser={isNewUser}
            onChange={setUsername}
            isUserNameAvailable={isUserNameAvailable}
            isLoading={isLoadingLocal}
          />

          {/* Play button - if new user or old & username availability */}
          {isNewUser ? (
            <Button
              title="Play"
              isDisabled={
                !isUserNameAvailable || isLoadingGlobal || isLoadingLocal
              }
              onClick={async () => {
                setIsLive(true)
                await createPlayer(username)
              }}
              isLoading={isLoadingGlobal}
            />
          ) : (
            <Button
              title="Play"
              isDisabled={
                isUserNameAvailable ||
                username.length < 4 ||
                isLoadingGlobal ||
                isLoadingLocal
              }
              onClick={async () => {
                setIsLive(true)
                await fetchPlayer(username)
              }}
              isLoading={isLoadingGlobal}
            />
          )}
          {/* Switch between - new or old user */}
          <p
            className="mt-1.5 cursor-pointer self-center  text-sm text-slate-200 transition-all duration-200 hover:text-slate-50"
            onClick={() => {
              setIsNewUser(!isNewUser)
              setUsername('')
            }}
          >
            Already a user?
          </p>
        </div>
      </div>
    </>
  )
}

export default PlayerEntry
