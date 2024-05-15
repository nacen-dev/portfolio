import { IProject } from "../../lib/graphcms";
import { ProjectPreview } from "../ProjectPreview/ProjectPreview";

interface ProjectProps {
  projects: IProject[];
  className?: string;
}

export const Projects = ({ projects, className }: ProjectProps) => (
  <div className={`flex flex-col gap-16 ${className ?? ""}`}>
    {projects.map((project) => (
      <ProjectPreview key={project.id} project={project} />
    ))}
  </div>
);
