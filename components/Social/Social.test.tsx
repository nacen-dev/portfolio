import { screen, render } from "@testing-library/react";
import { Social } from "./Social";

describe("Social", () => {
  const contact = {
    githubLink: "github",
    linkedinLink: "linkedin",
    email: "email",
  };
  it("has github, linkedin, email link, and correct href values", () => {
    render(<Social contact={contact} />);
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    const email = screen.getByRole("link", { name: /email/i });

    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", contact.githubLink);
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute("href", contact.linkedinLink);
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("href", `mailto:${contact.email}?subject=Hi!`);
  });
});
