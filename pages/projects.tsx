import { GetStaticProps } from "next";
import React from "react";
import { ProjectPreview } from "../components/ProjectPreview/ProjectPreview";

import { getProjects, IProject } from "../lib/graphcms";

interface Props {
  projects: IProject[];
}

const Projects = ({ projects }: Props) => {
  return (
    <main className="bg-slate-800 py-8 px-[5%]">
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await getProjects();
  return {
    props: { projects: projectsData.projects },
    revalidate: 86400, // revalidate after 1 day
  };
};

export default Projects;
