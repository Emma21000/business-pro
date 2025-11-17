import Link from 'next/link'
import React from 'react'

export default function ContactUs({ data }) {
  return (
    <div className='w-full h-full bg-[#0c4897] pt-16'>
      <p className='lg:w-1/2 w-2/3 text-white text-5xl lg:text-6xl font-head text-start mx-auto tracking-wider mb-14' >{data.name}</p>
        <form className='flex flex-col text-white w-3/4 items-center justify-center mx-auto gap-y-12' >
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-2/3 w-11/12 gap-x-10 gap-y-8'>
              <div className='grid grid-cols-1'>
                <label htmlFor='Name' className='lg:text-3xl text-xl font-head tracking-wider cursor-pointer' >First Name</label>
                <input type='text' id='Name' name='' className='w-full py-4 border-white border-b-2 hover:border-white/60 transition-all duration-200 focus:outline-none'></input>
              </div>  
              <div className='grid grid-cols-1'>
                <label htmlFor='LastName' className='lg:text-3xl text-xl font-head tracking-wider cursor-pointer'>Last Name</label>
                <input type='text' id='LastName' name='' className='w-full py-4 border-white border-b-2 hover:border-white/60 transition-all duration-200 focus:outline-none'></input>
              </div>
            </div>
            <div className='flex flex-col lg:w-2/3 w-11/12 text-start gap-y-6'>
              <label htmlFor='email' className='lg:text-3xl text-xl font-head tracking-wider cursor-pointer'>Email</label>
              <input type='email' id='email' className='w-full py-4 border-white border-b-2 hover:border-white/60 transition-all duration-200 focus:outline-none'></input>
              <label htmlFor='Message' className='lg:text-3xl text-xl font-head tracking-wider cursor-pointer my-6'>Message</label>
              <textarea id='Message' className='resize-none w-full py-4 h-26 border-white border-b-2 hover:border-white/60 transition-all duration-200 focus:outline-none'></textarea>
            </div>
              <button className='py-6 lg:w-1/3 w-11/12 hover:bg-red-700 border-2 border-red-500 hover:border-transparent shadow-lg hover:shadow-red-600 mt-6 cursor-pointer text-2xl font-head tracking-wider rounded-lg'>Submit</button>
        </form>
        <div  className='py-20 lg:w-1/2 w-2/3 flex flex-col text-center lg:text-start mx-auto gap-10' >
          <div className='w-full flex lg:flex-row flex-col text-center lg:text-start mx-auto gap-10' >
          {data.list.map((elem,index)=>(
              <Link key={index} className='text-white text-start lg:text-2xl text-base font-thin tracking-wide' href={elem.path}>{elem.title}</Link>
            ))}
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between lg:px-10 w-full'>
            <p className='lg:text-2xl text-base text-white font-head tracking-wider'>{data.link} <Link className='underline underline-offset-8' target='_blank' href={data.path}> Wix </Link></p>
            <Link href={'/'} className='text-4xl text-white'>{data.toUpicon}</Link>
          </div>  
        </div>
        
    </div>
  )
}
