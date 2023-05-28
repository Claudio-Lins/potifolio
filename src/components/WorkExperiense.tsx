'use client'
import React from 'react'
import { SectionTitle } from './SectionTitle'
import { ExperienseItem } from './ExperienseItem'
import { WorkExperiences } from '../@types/WorkExperiences'
import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-zinc-200 tracking-wider mt-6 gap-3 flex flex-col"
        >
          <p>
            Nesta seção, você encontrará um resumo das minhas experiências
            profissionais como desenvolvedor Fullstack Javascript. Trabalhei em
            agências de publicidade renomadas, onde desenvolvi projetos de
            design utilizando ferramentas como Photoshop, Illustrator e
            InDesign. Minha formação em Fotografia e mais de 20 anos de
            experiência na área publicitária me forneceram uma base sólida para
            criar soluções estéticas e funcionais.
          </p>
          <p>
            Atualmente, estou focado no desenvolvimento Fullstack Javascript,
            utilizando tecnologias como JavaScript, HTML, CSS, React e Node.js.
            Trabalhar em equipe é fundamental para mim, e colaborar com
            profissionais talentosos tem sido enriquecedor. Estou animado para
            compartilhar mais detalhes sobre meus projetos e estou aberto a
            novas oportunidades desafiadoras.
          </p>
          <p>
            Obrigado por explorar a seção de experiências profissionais do meu
            site. Espero que você possa ter uma visão mais abrangente das minhas
            habilidades e do meu comprometimento em fornecer soluções de alta
            qualidade.
          </p>
        </motion.div>
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
