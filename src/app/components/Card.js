import Link from 'next/link'
import React from 'react'

export default function Card({ data }) {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-3/5 w-auto justify-items-center mx-auto lg:gap-y-18 lg:gap-0 gap-8'>
        {data.cardlist.map((elem,index)=>(
            <div className='p-10 lg:w-96 w-auto lg:h-[450px] h-auto bg-gradient-to-br from-[#eef2f3] to-[#8e9eab] flex flex-col gap-y-6 lg:transition-transform lg:-translate-y-1/3 lg:hover:-translate-y-2/5 cursor-pointer transition-all duration-300 shadow-lg shadow-black' key={index}>
                <p className='text-5xl font-head tracking-wider leading-tight text-blue-900'>{elem.title}</p>
                <p className='font-subtitle text-xl leading-9 text-sky-700'>{elem.description}</p>
                <Link href={''} className='text-xl text-red-600'>{elem.more}</Link >
            </div>
        ))}
    </div>
  )
}