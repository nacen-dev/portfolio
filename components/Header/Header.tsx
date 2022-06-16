import Link from "next/link";
import React from "react";

interface Props {}

export const Header = (props: Props) => {
  return (
    <header className="p-5 flex justify-center">
      <nav>
        <ul className="flex gap-4 text-2xl p-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
