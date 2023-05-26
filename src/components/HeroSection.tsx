'use client'
import Image from 'next/image'
import React from 'react'
import { TechBadge } from './TechBadge'
import { Button } from './Button'
import { HomePageInfo } from '../@types/PageInfoTypes'
import { RichText } from './Richtext'
import { CMSIcon } from './CMSIcon'

interface HeroSectionProps {
  homeInfo: HomePageInfo
}

export function HeroSection({ homeInfo }: HeroSectionProps) {
  function handleContact() {
    const contactSection = document.querySelector('#contact')
    contactSection && contactSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="w-full h-[755px] bg-[#000203] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <small className="font-mono text-emerald-400">Olá, meu nome é</small>
          <h2 className="font-medium text-4xl mt-2">Claudio Lins</h2>
          <div className="text-zinc-400 my-6 text-sm sm:text-base space-y-2 p-2 h-48 overflow-auto">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-xs">
            {homeInfo.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>
          <div className=" flex flex-col sm:flex-row items-center gap-8 mt-12 w-full sm:max-w-md justify-between">
            <Button
              onClick={handleContact}
              className="hover:bg-emerald-500 w-full text-center"
            >
              <span className="w-full">Entre em contacto</span>
              {/* <ArrowRight className="hidden sm:flex" /> */}
            </Button>
            <div className="flex items-center text-2xl gap-8">
              {homeInfo.socialNetworks.map((contact) => (
                <a
                  className="hover:text-emerald-400"
                  target="_blank"
                  key={contact.url}
                  href={contact.url}
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={homeInfo.profileCover.url}
          alt="Picture of the author"
          width={420}
          height={404}
        />
      </div>
    </section>
  )
}
