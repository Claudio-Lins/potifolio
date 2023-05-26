import React from 'react'
import { SectionTitle } from './SectionTitle'

export function ProjectHero() {
  return (
    <section className="py-16 md:py-32">
      <SectionTitle
        subtitle="Projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <p className="text-zinc-400 text-center max-w-2xl mx-auto mt-4 leading-relaxed my-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cumque,
        eos minima totam delectus, voluptas quisquam iste unde quo officia
        cupiditate voluptatum laborum. Illum totam doloremque perspiciatis magni
        nulla, sequi, nostrum laborum consequatur dolorem enim vero illo ipsam
        cumque at.
      </p>
    </section>
  )
}
