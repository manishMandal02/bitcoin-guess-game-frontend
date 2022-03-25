import React from 'react'

import { AiFillInfoCircle } from 'react-icons/ai'

interface Props {
  text: string
}

const Tooltip: React.FC<Props> = ({ text }) => {
  return (
    <div className="group relative ml-2.5 -mb-2 flex cursor-pointer flex-col items-center text-white opacity-80">
      <AiFillInfoCircle className="scale-110" />
      <div className="absolute bottom-0 mb-6  hidden flex-col items-center group-hover:flex">
        <span className="relative z-10 w-56 rounded bg-black p-2 text-sm leading-4     text-white shadow-lg">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Tooltip
