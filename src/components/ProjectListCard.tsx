import React from 'react'
import Image from 'next/image'

export function ProjectListCard() {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-zinc-800 overflow-hidden border-zinc-800 hover:border-emerald-500 border-2 opacity-70 hover:opacity-100 transition-all duration-500 group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/base-img.jpg"
          width={380}
          height={200}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <strong className="text-zinc-50/90 group-hover:text-emerald-500">
          Nome do projeto
        </strong>
        <p className="mt-2 text-zinc-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat
          iste, cumque praesentium explicabo natus reprehenderit qui voluptate
          at sequi.
        </p>
        <span className="text-zinc-300 text-sm font-medium block mt-auto truncate">
          Next,js, Next Auth, Stiches
        </span>
      </div>
    </div>
  )
}
