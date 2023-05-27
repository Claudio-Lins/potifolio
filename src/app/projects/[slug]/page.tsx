import { ProjectDetails } from '@/src/components/ProjectDetails'
import { ProjectSections } from '@/src/components/ProjectSections'
import React from 'react'
import {
  ProjectPageData,
  ProjectsPageData,
  ProjectsPageStaticData,
} from '@/src/@types/PageInfoTypes'
import { fetchHygraphQuery } from '@/src/utils/fetch-hygraph-query'
import { Metadata } from 'next'

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
export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}
export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
