import Link from 'next/link'
import React from 'react'

export default function Navbar({ data }) {
  return (
    <div className='w-full mx-20 my-10 flex'>
        <p className='py-4 border-8 px-8 border-blue-900 text-4xl font-extrabold text-blue-900 tracking-wider'>{data.logo}</p>
        <div className='w-2/3 flex gap-10 items-center justify-center'>
            {data.links.map((elem,index)=>(
                <Link href={elem.path} key={index} className='tracking-wider text-2xl font-bold text-blue-900 hover:text-red-600 duration-300 transition-all'>{elem.name}</Link>
            ))}
        </div>
    </div>
  )
}
