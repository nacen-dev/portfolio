import { screen, render } from "@testing-library/react";
import { IProject } from "../../lib/graphcms";
import { ProjectPreview } from "./ProjectPreview";

describe("Project Preview", () => {
  const project: IProject = {
    id: "123",
    description: "sample description",
    repositoryLink: "sample repo link",
    image: { url: "https://sample.image" },
    name: "test project",
    websiteLink: "sample website link",
  };
  it("has the project image, name, description, repository link and website link if provided", () => {
    render(<ProjectPreview project={project} />);

    const description = screen.getByText(project.description);
    const repositoryLink = screen.getByRole("link", {
      name: /view code repository/i,
    });
    const websiteLink = screen.getByRole("link", { name: /visit website/i });
    const image = screen.getByRole("img");
    const name = screen.getByRole("heading", { name: project.name });

    expect(description).toBeInTheDocument();
    expect(repositoryLink).toBeInTheDocument();
    expect(repositoryLink).toHaveAttribute("href", project.repositoryLink);
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", project.websiteLink);
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
