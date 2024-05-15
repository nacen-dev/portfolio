import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Contact } from "../components/Contact/contact";
import { Projects } from "../components/Projects/projects";
import {
  IContact,
  IProject,
  getAbout,
  getContact,
  getProjects,
} from "../lib/graphcms";
import { dayInSeconds } from "../util/util";

interface Props {
  about: {
    introduction: string;
    description: string;
  };
  projects: IProject[];
  contact: IContact;
}

const Home: NextPage<Props> = ({ about, contact, projects }) => {
  return (
    <main className="bg-slate-800 p-4">
      <Head>
        <title>{"Vincent's Portfolio"}</title>
      </Head>
      <section
        id="about"
        className="rounded text-white p-4 py-6 px-[5%] sm:py-10 mt-10 mx-4 sm:mr-auto sm:ml-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-PlayFairDisplay font-bold mb-4">
          {about.introduction}
        </h1>
        <p className="text-xl text-slate-200  whitespace-pre-wrap">
          {about.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-end w-full mt-6 gap-4">
          <button className="bg-sky-800 px-5 py-2 text-white rounded flex items-center gap-2 hover:scale-105 text-lg max-w-[200px] w-full justify-center">
            <Link href="/#projects" scroll={false}>
              View my work
            </Link>
          </button>
          <button className="bg-sky-800 px-5 py-2 text-white rounded flex items-center gap-2 hover:scale-105 text-lg max-w-[200px] w-full justify-center">
            <Link href="/#contact" scroll={false}>
              Contact Me
            </Link>
          </button>
        </div>
      </section>
      <section id="projects" className=" py-4 px-[5%]">
        <h2 className="mt-[10vh] text-center text-white text-2xl sm:text-3xl font-PlayFairDisplay font-bold mb-8">
          Projects
        </h2>
        <Projects projects={projects} />
      </section>
      <section id="contact">
        <h2 className="text-center mt-[10vh] text-white text-2xl sm:text-3xl font-PlayFairDisplay font-bold mb-4">
          Contact
        </h2>
        <Contact contact={contact} />
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutData = await getAbout();
  const projectsData = await getProjects();
  const contactData = await getContact();
  return {
    props: {
      about: aboutData.about,
      projects: projectsData.projects,
      contact: contactData.contact,
    },
    revalidate: dayInSeconds * 3,
  };
};

export default Home;
