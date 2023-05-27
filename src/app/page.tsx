import { HomePageData } from '../@types/PageInfoTypes'
import { HeroSection } from '../components/HeroSection'
import { HighlightedProjects } from '../components/HighlightedProjects'
import { Knowledge } from '../components/Knowledge'
import { WorkExperiense } from '../components/WorkExperiense'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profileCover {
          url
        }
        socialNetworks {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw,
          text
        }
        technologies {
          name
        }
      }
    }
  `
  return fetchHygraphQuery(query, 10)
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()
  return (
    <div className="pt-64 md:pt-8">
      <HeroSection homeInfo={pageData} />
      <Knowledge techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperiense experiences={workExperiences} />
    </div>
  )
}
