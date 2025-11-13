"use client";
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar({ data }) {
  const [menu,setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <div className='w-full lg:px-20 px-8 lg:my-16 my-8 flex items-center justify-between relative'>
      <p className='py-4 border-8 px-8 border-blue-900 text-4xl font-head font-extrabold text-blue-900 tracking-wider lg:fixed top-10 bg-white'>{data.logo}</p>        
      <div className='w-11/12 lg:flex gap-12 items-center justify-center px-10 hidden'>
            {data.links.map((elem,index)=>(
              <Link key={index} href={elem.path} className={`tracking-wider text-2xl font-bold ${index === 0 ? 'text-red-600' : 'text-blue-900 hover:text-red-600'} duration-300 transition-all font-head`}>{elem.name}</Link>
            ))}
        </div>
        <div className='lg:hidden'>
          <span className='text-4xl transition-all duration-300' onClick={toggleMenu}>{data.icon}</span>
        </div>
         {menu && (
           <div className='fixed top-0 left-0 w-full h-screen flex flex-col bg-white'>
              <div className='lg:hidden flex items-end justify-end px-8 py-14'>
                <span className='text-4xl transition-all duration-300' onClick={toggleMenu}>{data.close}</span>
              </div>
              <div className='w-full flex flex-col gap-12 items-start justify-start px-16'>
                {data.links.map((elem,index)=>(
                  <Link href={elem.path} key={index} className='font-bold tracking-wider text-xl font-head text-blue-900 hover:text-red-600 duration-300 transition-all'>{elem.name}</Link>
                ))}
                  <div className='flex gap-8 text-2xl'>
                    {data.icons.map((item,idx)=>(
                      <Link href={item.path} key={idx} target='_blank'>{item.icon}</Link>
                    ))}
                  </div>
              </div>
          </div>
         )}
    </div>
  )
}