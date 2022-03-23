import React from 'react'

import { AiFillInfoCircle } from 'react-icons/ai'

interface Props {
  text: string
}

const Tooltip: React.FC<Props> = ({ text }) => {
  return (
    <div className="group relative ml-2 flex cursor-pointer flex-col items-center text-slate-100 opacity-80">
      <AiFillInfoCircle className="" />
      <div className="absolute bottom-0 mb-6  hidden flex-col items-center group-hover:flex">
        <span className="relative z-10 w-56 rounded bg-black p-2 text-sm leading-4   text-slate-50 shadow-lg">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Tooltip
