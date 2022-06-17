import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Social } from "../components/Social/Social";
import { getContact, IContactData } from "../lib/graphcms";

const Contact: NextPage<IContactData> = ({ contact }: IContactData) => {
  return (
    <main className="w-full h-[90vh] bg-slate-800 p-4 text-white">
      <Head>
        <title>{"Contact Vincent"}</title>
      </Head>
      <div className="max-w-[675px] mr-auto ml-auto p-8 border-2 border-cyan-200 rounded mt-[10%]">
        <h1 className="font-bold font-PlayFairDisplay text-4xl">Contact Me</h1>
        <div className="text-2xl my-5 flex flex-col gap-4 text-slate-200">
          <p>{"I'm open to freelance opportunities or remote position."}</p>
          <p>
            Have a question or want to collaborate? Contact me on one of my
            socials below
          </p>
        </div>

        <Social contact={contact} className="flex gap-2 flex-wrap" />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contactData = await getContact();
  return {
    props: { contact: contactData.contact },
    revalidate: 86400, // revalidate after 1 day
  };
};

export default Contact;
