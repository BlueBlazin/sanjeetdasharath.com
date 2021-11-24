import Link from "next/link";

import ModeToggle from "./mode-toggle";
import MobileHeader from "./mobile-header";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <div className="hidden md:flex items-center h-24">
        <HeaderLink name="Home" href="/" />
        <HeaderLink name="Projects" href="/projects" />
        <HeaderLink name="Blog" href="/blog" />
        {/* <HeaderLink name="Knowledge Bank" href="/knowledge-bank" /> */}
        <HeaderLink name="About" href="/about" />
        <div className="hidden md:block fixed right-11">
          <ModeToggle />
        </div>
      </div>
    </>
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
