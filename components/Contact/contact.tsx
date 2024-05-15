import { IContact } from "../../lib/graphcms";
import { Social } from "../Social/Social";

interface ContactProps {
  contact: IContact;
}

export const Contact = ({ contact }: ContactProps) => {
  return (
    <div
      className={`max-w-[675px] mr-auto ml-auto px-6 py-4 md:px-8 rounded text-white justify-center items-center`}
    >
      <div className="text-2xl my-5 flex flex-col gap-4 text-slate-200 text-center">
        <p>I&apos;m open to freelance opportunities or remote position.</p>
        <p>Have a question or want to collaborate?</p>
        <p>Contact me on one of my socials below</p>
      </div>

      <Social contact={contact} className="flex gap-2 flex-wrap items-center" />
    </div>
  );
};
