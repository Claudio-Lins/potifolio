import React from 'react'
import Image from 'next/image'
import { Project } from '../@types/ProjectsTypes'

interface ProjectListCardProps {
  project: Project
}

export function ProjectListCard({ project }: ProjectListCardProps) {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-zinc-800 overflow-hidden border-zinc-800 hover:border-emerald-500 border-2 opacity-70 hover:opacity-100 transition-all duration-500 group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          width={380}
          height={200}
          alt={`Thumbnail do projeto ${project.title} `}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <strong className="text-zinc-50/90 group-hover:text-emerald-500">
          {project.title}
        </strong>
        <p className="mt-2 text-zinc-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-zinc-300 text-sm font-medium block mt-auto truncate">
          {project.technologies.map((tech) => tech.name).join(', ')}
        </span>
      </div>
    </div>
  )
}
