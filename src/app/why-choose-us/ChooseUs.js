import React from 'react'

export default function ChooseUs({ data }) {
  return (
    <div className='lg:w-2/5 w-full h-80 bg-[#EBEBEB] transition-transform lg:translate-x-2/3 lg:-translate-y-1/2 flex flex-col items-center justify-center shadow-lg shadow-gray-400'>
      <p className='lg:text-7xl text-2xl w-80 text-start tracking-widest lg:w-2xl leading-20 text-blue-900'>{data.title}</p>
    </div>
  )
}
