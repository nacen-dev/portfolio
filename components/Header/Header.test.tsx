import { screen, render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("has home, projects, contact link and correct href values", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });


    expect(homeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute("href", "/")
    expect(contactLink).toHaveAttribute("href", "/contact")
    expect(projectsLink).toHaveAttribute("href", "/projects")
  });
});
