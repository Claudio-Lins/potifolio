import React from 'react'
import { SectionTitle } from './SectionTitle'
import { KnowTech } from './KnowTech'
import { SiNextdotjs } from 'react-icons/si'
import { KnownTech } from '../@types/ProjectsTypes'
import { CMSIcon } from './CMSIcon'

interface KnowledgePorps {
  techs: KnownTech[]
}

export function Knowledge({ techs }: KnowledgePorps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => {
          return <KnowTech key={i} tech={tech} />
        })}
      </div>
    </section>
  )
}
