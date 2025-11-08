"use client";
import React, { useState } from 'react'

export default function Testimonials({ data }) {
  const [click, setClick] = useState(0);
  const [direction, setDirection] = useState("next")
  function changeDir(dir){
    setDirection(dir)
    if(dir === "next"){
      setClick((prev)=>
        prev === data.information.length - 1 ? 0 : prev + 1
      )
    } else {
      setClick((prev)=>
        prev === 0 ? data.information.length - 1 : prev - 1
      )
    }
  }
  return (
    <div className='w-full h-full flex items-center justify-evenly overflow-hidden bg-gradient-to-br from-[#eef2f3] to-[#8e9eab] py-10'> 
      <button onClick={() => changeDir("prev")} className='text-6xl font-thin text-black cursor-pointer'>{data.arrowleft}</button>
      <div className='relative w-1/3 min-h-[400px] overflow-hidden flex justify-center items-center'>
        {data.information.map((elem,index)=>(
        <div key={index} className={`absolute flex flex-col items-start justify-center gap-y-6 ease-in-out transition-all duration-200 ${index === click ? 'opacity-100 translate-x-0' : direction === "next" ? 'opacity-0 translate-x-full' : 'opacity-0 -translate-x-full'}`}>
        <p className='text-5xl font-head tracking-wider text-blue-900'>{elem.title}</p>
        <p className='text-2xl w-xl text-blue-800 font-subtitle'>{elem.description}</p>
        <p className='text-2xl text-red-800 font-head'>{elem.name}</p>
        <p className='text-xl text-red-800 font-head'>{elem.director}</p>
      </div>
        ))}
        <div className='flex gap-8 bottom-0 absolute'>
          {data.information.map((_,index)=>(
            <p key={index} onClick={() => setClick(index)} className={`cursor-pointer p-2 bg-black rounded-full transition-all duration-300 ${index === click  ? 'bg-gray-700' : 'bg-gray-300'}`}></p>
          ))}
        </div>
      </div>
      <button onClick={() => changeDir("next")} className='text-6xl font-thin text-black cursor-pointer'>{data.arrowright}</button>
    </div>
  )
}


 