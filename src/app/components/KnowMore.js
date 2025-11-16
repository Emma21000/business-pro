import React from 'react'

export default function KnowMore({ data }) {
  return (
    <div className='lg:w-1/2 w-auto h-full bg-gray-200 flex flex-col justify-center items-center gap-y-8 py-16 mx-auto my-26 shadow-lg shadow-gray-400'>
        <p className='lg:text-6xl text-2xl font-head tracking-widest text-blue-900'>{data.title}</p>
       <div className='flex lg:flex-row flex-col justify-center items-start gap-10'>    
        <p className='border-2 border-blue-900 lg:w-28 w-4/5 my-5 mx-auto'></p>
        <p className='lg:text-xl text-base font-subtitle lg:w-xl h-30 overflow-hidden leading-8 px-8'>{data.description}</p>
       </div> 
    </div>
  )
}
