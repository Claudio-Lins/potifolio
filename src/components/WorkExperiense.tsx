import React from 'react'
import { SectionTitle } from './SectionTitle'
import { ExperienseItem } from './ExperienseItem'
import { WorkExperiences } from '../@types/WorkExperiences'

interface WorkExperienseProps {
  experiences: WorkExperiences[]
}

export function WorkExperiense({ experiences }: WorkExperienseProps) {
  return (
    <section className="container py-16 flex gap-10 md:flex-row flex-col lg:gap-16 md:gap-4">
      <div className="max-w-sm">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-zinc-400 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          incidunt beatae ex sunt consectetur voluptate iure suscipit blanditiis
          dolorem ducimus? Commodi quas recusandae excepturi repellat, placeat
          dolor facere suscipit doloribus dolore molestiae earum fuga qui quidem
          omnis voluptates provident sint! Natus nostrum voluptatem atque,
          assumenda tenetur sapiente corrupti perspiciatis. Odit.
        </p>
      </div>
      <div className="flex gap-4 flex-col">
        {experiences.map((experience) => (
          <ExperienseItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
