'use client'

import React from 'react'
import { SectionTitle } from './SectionTitle'
import { KnowTech } from './KnowTech'
import { SiNextdotjs } from 'react-icons/si'
import { KnownTech } from '../@types/ProjectsTypes'
import { CMSIcon } from './CMSIcon'
import { motion } from 'framer-motion'

interface KnowledgePorps {
  techs: KnownTech[]
}

export function Knowledge({ techs }: KnowledgePorps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              key={i}
            >
              <KnowTech tech={tech} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
