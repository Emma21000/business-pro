import React from 'react'

export default function Card({ data }) {
  return (
    <div className="lg:w-3/4 w-full mx-auto flex lg:flex-row flex-col items-center justify-center gap-10 lg:mb-26 my-20 lg:my-0">
      {data.cardlist.map((elem, index) => (
        <div
          key={index}
          className="cursor-pointer w-full min-h-64 p-8 rounded-2xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 shadow-lg hover:shadow-gray-700 hover:-translate-y-4 transition-all duration-300 flex flex-col gap-4">
          <div className="text-blue-900 text-3xl font-bold tracking-widest font-head">
            {elem.title}
          </div>
          <p className="text-white/100 text-xl leading-8 font-subtitle">
            {elem.description}
          </p>
        </div>
      ))}
    </div>
  )
}
