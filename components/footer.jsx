import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-gray-200 h-52 w-screen flex flex-col justify-center items-center mt-40">
      <div className="text-gray-500 text-sm">{`© ${year} Sanjeet N. Dasharath`}</div>
      <div className="flex">
        <Link href="https://twitter.com/suicuneblue">
          <a target="_blank" className="mx-4 mt-5 text-xl text-gray-600">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://github.com/BlueBlazin">
          <a target="_blank" className="mx-4 mt-5 text-xl text-gray-600">
            <FaGithub />
          </a>
        </Link>
      </div>
    </footer>
  );
}
