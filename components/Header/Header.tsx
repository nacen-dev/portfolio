import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {}

export const Header = (props: Props) => {
  const router = useRouter();

  return (
    <header className="p-5 flex justify-center h-[10vh] sticky top-0 z-10 w-full text-white bg-slate-800">
      <nav>
        <ul className="flex gap-4 text-2xl font-PlayFairDisplay">
          <li>
            <Link href="/">
              <a
                className={`${
                  router?.pathname == "/" ? "border-b-2 border-cyan-200 text-cyan-200" : ""
                } hover:text-`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={`${
                  router?.pathname == "/projects" ? "border-b-2 border-cyan-200 text-cyan-200" : ""
                } hover:text-`}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`${
                  router?.pathname == "/contact" ? "border-b-2 border-cyan-200 text-cyan-200" : ""
                } hover:text-`}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
