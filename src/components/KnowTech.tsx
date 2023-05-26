import React from 'react'
import { getRelativeTimeString } from '../utils/get-relative-time'
import { KnownTech } from '../@types/ProjectsTypes'
import { CMSIcon } from './CMSIcon'

interface KnowTechPros {
  tech: KnownTech
}

export function KnowTech({ tech }: KnowTechPros) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-PT',
  ).replace('há', '')
  return (
    <div className="p-6 rounded-lg bg-zinc-600/20 flex flex-col gap-2 text-zinc-500 hover:text-emerald-500 hover:bg-zinc-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p>{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <span>{relativeTime}</span>
    </div>
  )
}
