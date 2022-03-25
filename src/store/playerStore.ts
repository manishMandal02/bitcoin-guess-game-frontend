//
import axios from 'axios'
import { Player } from 'src/types/game.types'
import create, { GetState, SetState } from 'zustand'

import { persist } from 'zustand/middleware'

interface PlayerStateType {
  username: string
  score: number
  isLoading: boolean
  updateScore: (score: number) => Promise<void>
  fetchPlayer: (username: string) => Promise<void>
  createPlayer: (username: string) => Promise<void>
}
export const usePlayerStore = create<PlayerStateType>(
  persist(
    (set: SetState<PlayerStateType>, get: GetState<PlayerStateType>) => ({
      username: '',
      score: 0,
      isLoading: Boolean(false),
      updateScore: async (score) => {
        try {
          set((state) => ({ ...state, isLoading: true }))
          const { data } = await axios.put(`/player`, {
            score,
            username: get().username,
          })
          set((state) => ({
            ...state,
            score: data.score,
            isLoading: false,
          }))
        } catch (error) {
          // TODO error handler
        }
      },
      fetchPlayer: async (username) => {
        try {
          set((state) => ({ ...state, isLoading: true }))
          const { data } = await axios.get(`/player/${username}`)
          set((state) => ({
            ...state,
            username: data.username,
            score: data.score,
            isLoading: false,
          }))
        } catch (error) {
          // TODO error handler
        }
      },
      createPlayer: async (username) => {
        try {
          set((state) => ({ ...state, isLoading: true }))
          const { data } = await axios.post(`/player`, { username })
          set((state) => ({
            ...state,
            username: data.username,
            score: 0,
            isLoading: false,
          }))
        } catch (error) {
          // TODO error handler
        }
      },
    }),
    {
      name: 'playerStore',
    }
  )
)
