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
        Bem-vindo à seção de projetos do meu portfólio! Aqui você encontrará uma
        seleção dos projetos em que trabalhei como desenvolvedor FullStack
        Javascript. Cada projeto representa um desafio único que abordei com
        entusiasmo e dedicação, buscando oferecer soluções inovadoras e de alta
        qualidade.
      </p>
    </section>
  )
}
