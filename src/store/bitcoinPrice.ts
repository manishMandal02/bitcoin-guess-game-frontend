//
import create, { SetState } from 'zustand'

import axios from 'axios'

interface BitcoinPriceStateType {
  price: number
  isLive: boolean
  fetchPrice: () => void
  setIsLive: (value: boolean) => void
}

export const useBitcoinPriceStore = create<BitcoinPriceStateType>(
  (set: SetState<BitcoinPriceStateType>) => ({
    price: 0,
    isLive: true,
    setIsLive: (value) => set((state) => ({ ...state, isLive: value })),
    fetchPrice: async () => {
      let data = 0
      try {
        const { data: resData } = await axios.get(`/bitcoinPrice`)
        console.log(resData)
        data = resData.price
      } catch (error) {
        // TODO error handler
      }
      set((state) => ({ ...state, price: data }))
    },
  })
)
