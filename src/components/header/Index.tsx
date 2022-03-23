import React from 'react'

const Header = () => {
  return (
    <div
      className="mb-10 flex w-full items-center justify-between 
         py-8 pl-52 pr-80 text-left text-slate-100"
    >
      <h1 className="flex cursor-pointer items-center text-xl font-medium">
        <span className="select-none text-4xl">🅱️</span> Bitcoin Price Predict
      </h1>
      {/* Username */}
      <div className="flex items-center  ">
        <p className="select-none text-xl font-semibold text-slate-100">
          Welcome,{' '}
          <span className="cursor-pointer text-primary">@{'onemandal'}</span>
        </p>
        <button className="ml-6 flex select-none items-center justify-center rounded border-2 border-primary-secondary px-2 py-1 font-semibold text-white">
          Sign out
        </button>
      </div>
    </div>
  )
}

export default Header
