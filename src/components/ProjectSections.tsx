import Image from 'next/image'
import React from 'react'
import { ProjectSection } from '../@types/ProjectsTypes'
interface ProjectSectionsProps {
  sections: ProjectSection[]
}

export function ProjectSections({ sections }: ProjectSectionsProps) {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          className="flex flex-col items-center gap-6 md:gap-12"
          key={section.title}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-300">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
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
