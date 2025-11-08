import Link from 'next/link'
import React from 'react'

export default function AboutSection({ data }) {
  return (
    <div className='w-full h-full flex flex-col items-center lg:items-start'>
      <div className='lg:w-2/5 w-[90%] lg:h-[500px] max-h-[550px] bg-[#EBEBEB] transition-transform lg:-translate-y-1/2 lg:translate-x-1/1 flex flex-col p-16 lg:gap-y-12 gap-y-8 shadow-lg shadow-gray-400'>
          <span className='lg:text-6xl text-3xl text-blue-900 font-medium lg:w-[500px] w-auto tracking-widest font-head leading-tight' >{data.title}</span>
          <div className='flex lg:flex-row flex-col items-start justify-between px-4'>
              <p className='border-b-4 border-blue-800 px-20 my-4'></p>
              <span className='lg:w-[500px] lg:text-xl text-base font-subtitle leading-8 overflow-hidden max-h-[200px] tracking-wider'>{data.description}</span>
          </div>
          <div className=' flex justify-end items-end mt-auto'>
              <Link href={''} className='px-10 text-white bg-red-600 py-4 lg:text-2xl text-base tracking-wider font-serif hover:bg-blue-800 transition-all duration-300 whitespace-nowrap shadow-lg shadow-black'>{data.butName}</Link>
          </div>
      </div>
    </div>
  )
}