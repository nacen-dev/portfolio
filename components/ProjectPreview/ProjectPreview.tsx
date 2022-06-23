import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IProject } from "../../lib/graphcms";

interface Props {
  project: IProject;
}

export const ProjectPreview = ({ project }: Props) => {
  return (
    <div className="flex flex-col md:flex-row rounded text-white">
      <a
        href={
          project.websiteLink ? project.websiteLink : project.repositoryLink
        }
        target="_blank"
        rel="noreferrer"
        className="md:w-[60%] max-w-[600px] h-[450px]"
      >
        <div className="relative w-full h-full shadow-lg">
          <Image
            src={project.image.url}
            alt="Link to project"
            layout="fill"
            className="shadow-sm"
          />
        </div>
      </a>

      <div className="md:w-[30%] flex-1 p-8 flex flex-col justify-center">
        <h3 className="text-4xl font-bold font-PlayFairDisplay mb-6">
          {project.name}
        </h3>
        <p className="text-lg">{project.description}</p>
        <button className="w-full bg-sky-800 text-white py-2 mt-6 rounded-lg flex items-center gap-2 justify-center hover:scale-105 transition-transform duration-300">
          <a href={project.repositoryLink} target="_blank" rel="noreferrer">
            View Code Repository
          </a>
          <BsGithub />
        </button>
        {project.websiteLink && (
          <button className="w-full bg-sky-800 text-white py-2 mt-6 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300">
            <a href={project.websiteLink} target="_blank" rel="noreferrer">
              Visit Website
            </a>
            <BiLinkExternal />
          </button>
        )}
      </div>
    </div>
  );
};
