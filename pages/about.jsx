import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import Layout from "../components/layout";
import Description, { Paragraph } from "../components/description";

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <div className="w-36 h-36">
          <Image
            src="/../public/profilepic.png"
            width={150}
            height={150}
            alt="profile picture"
            className="rounded-full"
          />
        </div>
        <div className="my-5">
          <h1 className="font-bold text-xl">Sanjeet N. Dasharath</h1>
        </div>
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
          <Link href="https://www.linkedin.com/in/sanjeet-dasharath/">
            <a
              target="_blank"
              className="mx-4 mt-5 text-xl text-gray-600 dark:text-gray-200"
            >
              <FaLinkedin />
            </a>
          </Link>
        </div>
        <Description>
          <Paragraph>
            Hi, I&apos;m Sanjeet. I&apos;m currently working as a machine
            learning engineer at a startup in Sydney, Australia.
          </Paragraph>
          <Paragraph>
            I&apos;m a programmer with interests in deep learning, systems
            programming, and application development (web and mobile).
          </Paragraph>
          <Paragraph>
            My main academic interests are physics, deep learning research, and
            mathematics. Outside of academics I like to play (decreasingly so)
            and watch (increasingly so) Dota 2, an online competitive team game
            by Valve.
          </Paragraph>
          <Paragraph className="mt-12 text-sm text-gray-700 dark:text-gray-400">
            <span className="font-bold mr-3">Email:</span>{" "}
            sanjeet.dasharath[at]gmail.com
          </Paragraph>
        </Description>
      </div>
    </Layout>
  );
}
