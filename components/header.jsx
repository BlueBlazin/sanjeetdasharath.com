import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <div className="h-16 p-3 hidden sm:block">My header</div>
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
    <div className="w-screen flex flex-col text-gray-500 bg-gray-200 sm:hidden">
      <button
        onClick={toggleVisibility}
        className="ml-auto my-3 mr-4 h-9 w-9 text-4xl flex justify-center rounded-full active:border active:border-gray-400 transition duration-100 ease-in"
      >
        <MdArrowDropDown />
      </button>
      <div
        className={`bg-gray-300 transition duration-100 ease-in ${visibility}`}
      >
        <div className="flex-1 text-center active:text-gray-700 my-5">
          <Link href="/">
            <a className="px-3 py-2">Home</a>
          </Link>
        </div>

        <div className="flex-1 text-center active:text-gray-700 my-5">
          <Link href="/projects">
            <a className="px-3 py-2">Projects</a>
          </Link>
        </div>

        <div className="flex-1 text-center active:text-gray-700 my-5">
          <Link href="/blog">
            <a className="px-3 py-2">Blog</a>
          </Link>
        </div>

        <div className="flex-1 text-center active:text-gray-700 my-5">
          <Link href="/about">
            <a className="px-3 py-2">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
