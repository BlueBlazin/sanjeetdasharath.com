import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import {
  JavascriptIcon,
  PythonIcon,
  RustIcon,
  TailwindIcon,
  ReactIcon,
  TypescriptIcon,
  NextJsIcon,
} from "../components/languages";
import Description, { Paragraph } from "../components/description";
import H1 from "../components/headings";

export default function HomePage() {
  return (
    <Layout>
      <H1 className="text-4xl mt-12">{"Hello, I'm Sanjeet 👋"}</H1>
      <h2 className="flex">
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
      </h2>

      <Description>
        <Paragraph>
          I&apos;m a{" "}
          <span className="font-semibold text-blue-500">Software Engineer</span>{" "}
          currently located in Sydney, Australia 🦘 🇦🇺.
        </Paragraph>

        <Paragraph>
          I take pride in crafting quality software and improving at it every
          day. I have a very strong foundation in algorithms and
          data-structures. I have solved several hundreds of algorithmic
          challenge problems for over half a decade, primarily for fun. I love
          software engineering at and outside of work and plan to continue
          becoming a better programmer for the rest of my life.
        </Paragraph>

        <Paragraph>
          My main interests are deep learning, programming language
          implementation, and web development. That&apos;s quite an eclectic
          mix, but those are the areas I love.
        </Paragraph>
      </Description>

      <section className="flex flex-col items-center my-10">
        <h2 className="text-3xl mb-3">Projects</h2>
        <ViewAllProjectsLink />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ProjectCard
            imgSrc="/projects/thislang.png"
            title="Thislang"
            description="This-lang is a javascript bytecode VM interpreter implemented in javascript. It can run itself making it self-hosting."
            href="https://github.com/BlueBlazin/thislang"
          >
            <JavascriptIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/projects/gbemu.png"
            title="GBEmu"
            description="A Gameboy color emulator that runs in the browser. Implemented in Rust and running on WASM."
            href="https://github.com/BlueBlazin/gbemu"
          >
            <RustIcon />
            <JavascriptIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/projects/giron.png"
            title="Giron"
            description="ECMAScript parser written in Rust which outputs an ESTree compliant JSON abstract syntax tree."
            href="https://github.com/BlueBlazin/giron"
          >
            <RustIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/projects/shuttle.png"
            title="Shuttle"
            description="Shuttle is a screen and webcam recorder. It's a bit like loom but rather free and a webapp instead of an extension."
            href="https://github.com/BlueBlazin/shuttle"
          >
            <TypescriptIcon />
            <ReactIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/projects/dotados.png"
            title="Dota Degrees of Separation"
            description="A webapp to explore the degrees of separation between pro players of the online game Dota 2."
            href="https://github.com/BlueBlazin/dotados"
          >
            <PythonIcon />
            <ReactIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/projects/website.png"
            title="Personal website"
            description="Personal website and blog of yours truly. Crafted with love using next.js, react, and tailwind.css."
            href="https://github.com/BlueBlazin/sanjeetdasharath.com"
          >
            <NextJsIcon />
            <ReactIcon />
            <TailwindIcon />
          </ProjectCard>
        </div>
        <ViewAllProjectsLink />
      </section>
    </Layout>
  );
}

function ViewAllProjectsLink() {
  return (
    <Link href="/projects">
      <a className="cursor-pointer text-blue-700 hover:text-blue-400 active:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500 dark:active:text-blue-700">
        <h3 className="mt-1 mb-2">view all</h3>
      </a>
    </Link>
  );
}
