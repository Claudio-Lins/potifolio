import { ProjectHero } from '@/src/components/ProjectHero'
import React from 'react'
import { DivideH } from '../../components/DivideH'
import { ProjectList } from '@/src/components/ProjectList'
import { fetchHygraphQuery } from '@/src/utils/fetch-hygraph-query'
import { ProjectsPageData } from '@/src/@types/PageInfoTypes'

export const metadata = {
  title: {
    default: 'Projetos',
    template: '%s | Claudio Lins',
  },
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
  return fetchHygraphQuery(query, 60)
}

export default async function projects() {
  const { projects } = await getPageData()
  return (
    <div className="container pt-32">
      <ProjectHero />
      <DivideH />
      <ProjectList projects={projects} />
    </div>
  )
}
