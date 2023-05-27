import { ProjectDetails } from '@/src/components/ProjectDetails'
import { ProjectSections } from '@/src/components/ProjectSections'
import React from 'react'
import {
  ProjectPageData,
  ProjectsPageData,
  ProjectsPageStaticData,
} from '@/src/@types/PageInfoTypes'
import { fetchHygraphQuery } from '@/src/utils/fetch-hygraph-query'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `
  return fetchHygraphQuery(query, 24)
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug)

  // if (!project?.title) return notFound()
  return (
    <div>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </div>
  )
}
