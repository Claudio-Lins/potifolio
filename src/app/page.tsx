import { HomePageData } from "../@types/PageInfoTypes";
import { HeroSection } from "../components/HeroSection";
import { HighlightedProjects } from "../components/HighlightedProjects";
import { Knowledge } from "../components/Knowledge";
import { WorkExperiense } from "../components/WorkExperiense";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies (first: 100) {
          name
        }
        profileCover {
          url
        }
        socialNetworks (first: 100) {
          url
          iconSvg
        }
        cv {
          url
        }
        cl {
          url
        }
        knownTechs (first: 100) {
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
          technologies (first: 100) {
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
        technologies( first: 100) {
          name
        }
      }
    }
  `;
  return fetchHygraphQuery(query, 10);
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();
  return (
    <div className="pt-[330px] md:pt-8">
      <HeroSection homeInfo={pageData} />
      <Knowledge techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperiense experiences={workExperiences} />
    </div>
  );
}
