import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";

import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <div className="hidden md:flex items-center h-24">
        <HeaderLink name="Home" href="/" />
        <HeaderLink name="Projects" href="/projects" />
        <HeaderLink name="Blog" href="/blog" />
        <HeaderLink name="Knowledge Bank" href="/knowledge-bank" />
        <HeaderLink name="About" href="/about" />
        <div className="hidden md:block fixed right-11">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

function MobileHeader() {
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
      <div
        className={`transition duration-100 ease-in ${visibility} bg-gray-300 dark:bg-gray-800`}
      >
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

function HeaderLink({ name, href }) {
  return (
    <div className="mx-12 text-gray-600 dark:text-gray-200">
      <Link href={href}>
        <a className="active:text-gray-700 hover:text-gray-500 dark:hover:text-gray-300 dark:active:text-gray-500">
          {name}
        </a>
      </Link>
    </div>
  );
}
