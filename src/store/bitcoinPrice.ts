//
import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'

import axios from 'axios'

interface BitcoinPriceStateType {
  price: number
  fetchPrice: () => void
}

export const useBitcoinPriceStore = create<BitcoinPriceStateType>(
  (set: SetState<BitcoinPriceStateType>) => ({
    price: 0,
    fetchPrice: async () => {
      let data = { price: 0 }
      try {
        const { data: resData } = await axios.get(`/bitcoinPrice`)
        data = resData
      } catch (error) {}
      set({ price: data.price || 0 })
    },
  })
)
