import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAbout } from "../lib/graphcms";

interface Props {
  about: {
    introduction: string;
    description: string;
  };
}

const Home: NextPage<Props> = ({ about }) => {
  return (
    <main className="bg-slate-800 h-[90vh] p-4">
      <Head>
        <title>{"Vincent's Portfolio"}</title>
      </Head>
      <div className="rounded text-white border-cyan-200 border-2 p-4 py-6 sm:p-10 mt-10 max-w-[768px] mx-4 sm:mr-auto sm:ml-auto">
        <h1 className="text-3xl sm:text-4xl font-PlayFairDisplay font-bold mb-4">
          {about.introduction}
        </h1>
        <p className="text-xl text-slate-200">{about.description}</p>
        <div className="flex sm:justify-end w-full mt-4">
          <button className="bg-sky-800 px-5 py-2 text-white rounded flex items-center gap-2 hover:scale-105 text-lg max-w-[200px] w-full justify-center">
            <Link href="/projects">
              View my work
            </Link>
          </button>
        </div>
        <div className="flex sm:justify-end w-full mt-4">
          <button className="bg-sky-800 px-5 py-2 text-white rounded flex items-center gap-2 hover:scale-105 text-lg max-w-[200px] w-full justify-center">
            <Link href="/contact">
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await getAbout();
  return {
    props: { about: aboutData.about },
    revalidate: 86400, // revalidate after 1 day
  };
};

export default Home;
