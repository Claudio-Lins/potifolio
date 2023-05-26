import React from 'react'
import { SectionTitle } from './SectionTitle'
import { TechBadge } from './TechBadge'
import { Button } from './Button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from './Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(https://i.assistir.app/t/p/w342/glgKZrHcgsHJ8uBwWg8eeTNZQJk.jpg) no-repeat center/cover',
        }}
      />
      <SectionTitle
        subtitle="Projeto"
        title="Nome do projeto"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-zinc-400 text-center max-w-2xl my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        necessitatibus. Laudantium sit facilis nihil dicta reiciendis quia,
        ipsam odio ducimus incidunt necessitatibus quasi architecto! Deserunt ab
        dicta magnam maiores beatae!
      </p>
      <div className="w-full max-w-xs flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/claudio-lins"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://github.com/claudio-lins"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft />
        Voltar para home
      </Link>
    </section>
  )
}
