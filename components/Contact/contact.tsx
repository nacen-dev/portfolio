import { IContact } from "../../lib/graphcms";
import { Social } from "../Social/Social";

interface ContactProps {
  contact: IContact;
}

export const Contact = ({ contact }: ContactProps) => {
  return (
    <div
      className={`max-w-[675px] mr-auto ml-auto p-8 border-2 border-cyan-200 rounded text-white`}
    >
      <div className="text-2xl my-5 flex flex-col gap-4 text-slate-200">
        <p>I&apos;m open to freelance opportunities or remote position.</p>
        <p>
          Have a question or want to collaborate? Contact me on one of my
          socials below
        </p>
      </div>

      <Social contact={contact} className="flex gap-2 flex-wrap" />
    </div>
  );
};
