import Link from 'next/link'
import React from 'react'

export default function Hero({ data }) {
  return (
    <div className='w-full flex'>
        <div className='lg:w-[86%] w-full h-[800px] bg-no-repeat bg-cover object-center shadow-lg shadow-black' style={{backgroundImage: data.img}}></div>
        <div className='lg:flex flex-col mx-auto justify-center gap-10 hidden'> 
          {data.icons.map((elem,index)=>(
            <Link className='text-3xl hover:text-red-700 transition-all duration-300' target='_blank' key={index} href={elem.path} >{elem.icon}</Link>
          ))}
        </div>
    </div>
  )
}