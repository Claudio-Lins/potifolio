import Image from 'next/image'
import React from 'react'
import iconProject from '../../public/images/icons/project-title-icon.svg'
import { TechBadge } from './TechBadge'
import { Link } from './Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '../@types/ProjectsTypes'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex items-center gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src={project.thumbnail.url}
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${project.title}`}
          className="object-cover rounded-lg w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        />
      </div>
      <div className="">
        <h3 className="flex items-center gap-3 font-medium text-lg text-zinc-50">
          <Image
            src="/images/icons/project-title-icon.svg"
            height={20}
            width={20}
            alt=""
          />
          {project.title}
        </h3>
        <p className="my-6 text-zinc-400">{project.shortDescription}</p>
        <div className="flex items-center gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-sm">
          {project.technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
