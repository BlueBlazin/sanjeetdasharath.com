import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import Layout from "../components/layout";
import Description, { Paragraph } from "../components/description";

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <div className="w-36 h-36 dark:border-2 dark:border-white dark:border-solid dark:rounded-full">
          <Image
            src="/profilepic.png"
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
        <Description className={"text-custom !items-start"}>
          <Paragraph className="!text-left !mb-4">
            I am someone who enjoys doing machine learning, systems programming,
            as well as web/mobile development. My work has encompassed all three
            of these at different points in time and my hobby projects are
            generally around these as well.
          </Paragraph>

          <Paragraph className={"!text-left"}>
            Some hobby projects that I have recently done:
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            <span className="font-black">GBEmu</span> - is a gameboy color
            emulator that runs in the browser. It’s written in Rust and was
            built from the start with the intention of being compiled to WASM
            and having a UI implemented using web technologies.
            <div>
              <Link href="https://github.com/BlueBlazin/gbemu">
                <a target="_blank" className="text-blue-700">
                  https://github.com/BlueBlazin/gbemu
                </a>
              </Link>
            </div>
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            <span className="font-black">Thislang</span> - is a subset of
            javascript (a bytecode VM javascript engine) implemented in that
            subset of javascript. It can run itself and is fairly feature
            complete including prototypal inheritance, closures, etc.
            <div>
              <Link href="https://github.com/BlueBlazin/thislang">
                <a target="_blank" className="text-blue-700">
                  https://github.com/BlueBlazin/thislang
                </a>
              </Link>
            </div>
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            <span className="font-black">Giron</span> - is a ECMAScript (partly
            spec compliant) parser written in Rust. I made it as a project to
            learn Rust and it can easily parse through minified react and
            angular js. It outputs ESTree specification JSON which most open
            source parsers use.
            <div>
              <Link href="https://github.com/BlueBlazin/giron-rs">
                <a target="_blank" className="text-blue-700">
                  https://github.com/BlueBlazin/giron-rs
                </a>
              </Link>
            </div>
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            <span className="font-black">Rslox</span> - the lox programming
            language implemented in Rust.
            <div>
              <Link href="https://github.com/BlueBlazin/rslox">
                <a target="_blank" className="text-blue-700">
                  https://github.com/BlueBlazin/rslox
                </a>
              </Link>
            </div>
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            I have spent a lot of my programming journey writing Python, Rust,
            and Javascript (as well as Typescript). In the past I have also used
            Java and C.
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            I enjoy programming language implementation, deep learning, and
            building web apps. I also love data structures and algorithms and
            always try to match new problems to existing algorithmic solutions.
            But more generally I just really love programming.
          </Paragraph>

          <Paragraph className="!text-left !mb-4">
            If any of this sounds interesting then feel free to contact me, I’m
            happy to have a chat.
          </Paragraph>

          <Paragraph className="!text-sm !text-left !text-gray-700 dark:!text-gray-400">
            <span className="font-bold mr-3">Email:</span>{" "}
            sanjeet.dasharath[at]gmail.com
          </Paragraph>
        </Description>
      </div>
    </Layout>
  );
}
