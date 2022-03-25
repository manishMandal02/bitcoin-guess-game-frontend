import Image from 'next/image'
import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const bitcoinLogo =
  'https://res.cloudinary.com/vastia/image/upload/v1647950730/bitcoin-price-predict/bitcoin-logo.png'

interface Props {
  price: number
  isLive?: boolean
}
const BitcoinPrice: React.FC<Props> = ({ price, isLive }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="-ml-3 flex items-center justify-center">
        <Image
          src={bitcoinLogo}
          height={26}
          width={26}
          className="select-none"
        />
        <p className="ml-1.5 text-2xl font-semibold">Bitcoin Price</p>
      </div>
      {/* Show fetching... if the price is not available */}
      <div className="relative mt-3 rounded-md  bg-primary-dark px-6 py-3.5 ">
        {price ? (
          <p className="text-2xl font-medium">${price}</p>
        ) : (
          <div className="w-full px-11">
            <LoadingSpinner size={7} color={'slate-100'} />
          </div>
        )}
        {isLive && (
          <span className="absolute -top-px -right-px  flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
          </span>
        )}
      </div>
    </div>
  )
}

export default BitcoinPrice
