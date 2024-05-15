import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ProjectPreview } from "../components/ProjectPreview/ProjectPreview";

import { getProjects, IProject } from "../lib/graphcms";
import { dayInSeconds } from "../util/util";

interface Props {
  projects: IProject[];
}

const Projects:NextPage<Props> = ({ projects }) => {
  return (
    <main className="bg-slate-800 py-8 px-[5%]">
      <Head>
        <title>{"Vincent's Projects"}</title>
      </Head>
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
    revalidate: dayInSeconds * 3,
  };
};

export default Projects;
