import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./ProjectsTypes";
import { WorkExperiences } from "./WorkExperiences";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profileCover: {
    url: string;
  };
  cv: {
    url: string;
  };
  cl: {
    url: string;
  };
  socialNetworks: Social[];
  knownTechs: KnownTech[];
  highlightProjects: Project[];
};
export type ProjectPageData = {
  project: Project;
};

export type ProjectsPageData = {
  projects: Project[];
};

export type ProjectsPageStaticData = {
  projects: {
    slug: string;
  }[];
};
export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperiences[];
};
