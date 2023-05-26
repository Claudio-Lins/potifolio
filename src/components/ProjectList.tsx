import React from 'react'
import { ProjectListCard } from './ProjectListCard'
import Link from 'next/link'

export function ProjectList() {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/nome-projeto">
        <ProjectListCard />
      </Link>
    </section>
  )
}
