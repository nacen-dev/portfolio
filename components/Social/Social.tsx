import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IContact } from "../../lib/graphcms";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  contact: IContact;
}

export const Social = ({
  contact: { email, githubLink, linkedinLink },
  className,
}: Props) => {
  return (
    <div className={className}>
      <a
        href={linkedinLink}
        className="flex gap-2 items-center text-xl hover:text-sky-800"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
        <p>Linkedin</p>
      </a>
      <a
        href={githubLink}
        className="flex gap-2 items-center text-xl hover:text-sky-800"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
        <p>Github</p>
      </a>
      <a
        href={`mailto:${email}?subject=Hi!`}
        className="flex gap-2 items-center text-xl hover:text-sky-800"
      >
        <MdEmail />
        <p>Email</p>
      </a>
    </div>
  );
};
