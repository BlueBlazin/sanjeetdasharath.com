import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-52 w-screen flex flex-col justify-center items-center mt-40 bg-gray-200 dark:bg-gray-800">
      <div className="text-sm text-gray-500 dark:text-gray-300">{`© ${year} Sanjeet N. Dasharath`}</div>
      <div className="flex">
        <Link href="https://twitter.com/suicuneblue">
          <a
            target="_blank"
            className="mx-4 mt-5 text-xl text-gray-600 dark:text-gray-200"
          >
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://github.com/BlueBlazin">
          <a
            target="_blank"
            className="mx-4 mt-5 text-xl text-gray-600 dark:text-gray-200"
          >
            <FaGithub />
          </a>
        </Link>
      </div>
    </footer>
  );
}
