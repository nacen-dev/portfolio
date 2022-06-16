import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {}

export const Header = (props: Props) => {
  const router = useRouter();

  return (
    <header className="p-5 flex justify-center h-[10vh]">
      <nav>
        <ul className="flex gap-4 text-2xl">
          <li>
            <Link href="/">
              <a
                className={`${
                  router.pathname == "/" ? "border-b-2 border-blue-300" : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={`${
                  router.pathname == "/projects" ? "border-b-2 border-blue-300" : ""
                }`}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`${
                  router.pathname == "/contact" ? "border-b-2 border-blue-300" : ""
                }`}
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
