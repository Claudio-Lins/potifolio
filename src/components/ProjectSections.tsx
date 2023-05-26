import Image from 'next/image'
import React from 'react'

const sections = [
  {
    id: 1,
    title: 'Login',
    image: '/images/projects/login.png',
  },
  {
    id: 2,
    title: 'Home',
    image: '/images/projects/home.png',
  },
]

export function ProjectSections() {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          className="flex flex-col items-center gap-6 md:gap-12"
          key={section.id}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            alt=""
            className="w-full aspect-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </section>
  )
}
