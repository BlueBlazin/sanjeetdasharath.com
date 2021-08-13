import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <div className="h-16 hidden md:flex items-center">
        <HeaderLink name="Home" href="/" />
        <HeaderLink name="Projects" href="/projects" />
        <HeaderLink name="Blog" href="/blog" />
        <HeaderLink name="Knowledge Bank" href="/knowledge-bank" />
        <HeaderLink name="About" href="/about" />
      </div>
    </>
  );
}

function MobileHeader() {
  const [visibility, setVisibility] = useState("hidden");

  function toggleVisibility() {
    if (visibility === "hidden") {
      setVisibility("block");
    } else {
      setVisibility("hidden");
    }
  }

  return (
    <div className="w-screen flex flex-col text-gray-600 bg-gray-200 md:hidden">
      <button
        onClick={toggleVisibility}
        className="ml-auto my-3 mr-4 h-9 w-9 text-4xl flex justify-center rounded-full active:border active:border-gray-400 transition duration-100 ease-in"
      >
        {visibility === "hidden" ? <MdArrowDropDown /> : <MdArrowDropUp />}
      </button>
      <div
        className={`bg-gray-300 transition duration-100 ease-in ${visibility}`}
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
    <div className="mx-12 text-gray-600">
      <Link href={href}>
        <a className="active:text-gray-700 hover:text-gray-500">{name}</a>
      </Link>
    </div>
  );
}
