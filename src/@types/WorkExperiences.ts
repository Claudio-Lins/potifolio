import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech } from './ProjectsTypes'

export type WorkExperiences = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  stardDate: string
  endDate: string
  technologies: KnownTech[]
  description: {
    raw: RichTextContent
  }
}
