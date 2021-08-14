import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import ModeToggle from "./mode-toggle";

export default function MobileHeader() {
  const [visibility, setVisibility] = useState("hidden");

  function toggleVisibility() {
    setVisibility(visibility === "hidden" ? "block" : "hidden");
  }

  return (
    <div className="md:hidden w-screen flex flex-col text-gray-600 bg-gray-200 dark:text-gray-300 dark:bg-gray-700">
      <div className="flex items-center px-4">
        <div className="ml-5">
          <ModeToggle />
        </div>
        <button
          onClick={toggleVisibility}
          className="ml-auto my-3 mr-4 h-9 w-9 text-4xl flex justify-center rounded-full active:border active:border-gray-400 transition duration-100 ease-in"
        >
          {visibility === "hidden" ? <MdArrowDropDown /> : <MdArrowDropUp />}
        </button>
      </div>
      <div className={`${visibility} bg-gray-300 dark:bg-gray-800`}>
        <MobileHeaderLink name="Home" href="/" />
        <MobileHeaderLink name="Projects" href="/projects" />
        <MobileHeaderLink name="Blog" href="/blog" />
        <MobileHeaderLink name="Knowledge Bank" href="/knowledge-bank" />
        <MobileHeaderLink name="About" href="/about" />
      </div>
    </div>
  );
}

function MobileHeaderLink({ name, href }) {
  return (
    <div className={`flex-1 text-center py-10`}>
      <Link href={href}>
        <a className="px-3 py-2 active:text-gray-700 hover:text-gray-500">
          {name}
        </a>
      </Link>
    </div>
  );
}
