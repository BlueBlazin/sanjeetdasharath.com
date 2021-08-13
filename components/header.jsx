import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <div className="h-16 p-3 hidden md:block">My header</div>
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
        <MdArrowDropDown />
      </button>
      <div
        className={`bg-gray-300 transition duration-100 ease-in ${visibility}`}
      >
        <HeaderLink name="Home" href="/" />
        <HeaderLink name="Projects" href="/projects" />
        <HeaderLink name="Blog" href="/blog" />
        <HeaderLink name="Knowledge Bank" href="/knowledge-bank" />
        <HeaderLink name="About" href="/about" />
      </div>
    </div>
  );
}

function HeaderLink({ name, href }) {
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
