import React from 'react'
import { ProjectListCard } from './ProjectListCard'
import Link from 'next/link'
import { Project } from '../@types/ProjectsTypes'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <ProjectListCard project={project} />
        </Link>
      ))}
    </section>
  )
}
