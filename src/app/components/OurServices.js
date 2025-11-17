import React from 'react'

export default function OurServices({ data }) {
  return (
    <div className='lg:min-h-[500px] h-auto bg-blue-950 w-full py-20 flex flex-col' id='our-services'>
      <div className='flex flex-col w-[55%] justify-items-center mx-auto gap-y-8 '>
        <span className='text-5xl font-head font-medium text-white tracking-wider'>{data.name}</span>
        <span className='text-xl font-thin font-subtitle text-white max-w-[550px] leading-relaxed'>{data.description}</span>
      </div>
    </div>
  )
}