import React from 'react'
import { SectionTitle } from './SectionTitle'
import { DivideH } from './DivideH'
import { ProjectCard } from './ProjectCard'
import { Link } from './Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '../@types/ProjectsTypes'

interface HighlightedProjectsProps {
  projects: Project[]
}

export function HighlightedProjects({ projects }: HighlightedProjectsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em Destaque" />
      <DivideH className="mb-16" />
      <div className="">
        {projects?.map((project) => (
          <div className="" key={project.slug}>
            <ProjectCard project={project} />
            <DivideH className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-zinc-400">Se interessou?</span>
          <Link href="" className="inline-flex">
            Veja mais projetos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
