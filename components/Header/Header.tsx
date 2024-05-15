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
            <Link
              href="/"
              className={`${
                router?.asPath === "/"
                  ? "border-b-2 border-cyan-200 text-cyan-200"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={`${
                router?.asPath === "/#projects"
                  ? "border-b-2 border-cyan-200 text-cyan-200"
                  : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`${
                router?.asPath === "/#contact"
                  ? "border-b-2 border-cyan-200 text-cyan-200"
                  : ""
              } `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
