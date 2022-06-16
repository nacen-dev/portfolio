import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { getAbout } from "../lib/graphcms";

interface Props {
  about: {
    introduction: string;
    description: string;
  };
}

const Home: NextPage<Props> = ({ about }) => {
  return (
    <main className="bg-sky-800 h-[90vh] p-4">
      <div className="rounded bg-white p-4 py-6 sm:p-10 mt-10 lg:w-[70%] lg:mr-auto lg:ml-auto">
        <h1 className="text-3xl sm:text-4xl font-PlayFairDisplay font-bold mb-4">
          {about.introduction}
        </h1>
        <p className="text-xl">{about.description}</p>
        <div className="flex justify-end w-full mt-4">
          <button className="bg-sky-800 px-5 py-2 text-white rounded flex items-center gap-2 hover:scale-105 text-lg">
            <MdArrowForwardIos />
            <Link href="/projects">
              <a>View my work</a>
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
