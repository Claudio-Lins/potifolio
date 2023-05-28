import Image from 'next/image'
import React from 'react'
import { TechBadge } from './TechBadge'
import { WorkExperiences } from '../@types/WorkExperiences'
import { RichText } from './Richtext'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import pt from 'date-fns/locale/pt'

interface ExperienseItemProps {
  experience: WorkExperiences
}

export function ExperienseItem({ experience }: ExperienseItemProps) {
  const startDate = new Date(experience.startDate)
  const formattedStartDate = format(startDate, 'MMM, yyyy', { locale: pt })
  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), 'MMM yyyy', { locale: pt })
    : 'O momento'

  const end = experience.endDate ? new Date(experience.endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-zinc-500 p-0.5">
          <Image
            src={experience.companyLogo.url}
            width={40}
            height={40}
            alt=""
            className="rounded-full object-cover bg-zinc-300"
          />
        </div>
        <div className="h-full w-px bg-zinc-700" />
      </div>
      <div className="">
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-zinc-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            {experience.companyName}
          </a>
          <h4 className="text-zinc-300">{experience.role}</h4>
          <span className="text-zinc-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-zinc-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>
        <p className="text-zinc-400 mb-3 text-sm mt-6 font-semibold">
          Competência
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-sm mb-8">
          {experience.technologies?.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
