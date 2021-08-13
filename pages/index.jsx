import Link from "next/link";

import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import {
  JavascriptIcon,
  PythonIcon,
  RustIcon,
  TailwindIcon,
  ReactIcon,
  TypescriptIcon,
} from "../components/languages";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-4xl mt-12 text-gray-900">
        {"Hello, I'm Sanjeet 👋"}
      </h1>
      <section className="px-10 mt-10 text-gray-900 flex flex-col items-center max-w-2xl">
        <p className="my-3 max-w-2xl text-center sm:text-left">
          I&apos;m a{" "}
          <span className="font-semibold text-blue-500">programmer</span> and{" "}
          <span className="font-semibold text-blue-500">
            machine learning engineer
          </span>{" "}
          currently located in Sydney, Australia 🦘 🇦🇺.
        </p>

        <p className="my-3 text-center sm:text-left">
          My main interests are deep learning, programming language
          implementation, and web development. That&apos;s quite an eclectic
          mix, but those are the areas I love.
        </p>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-3xl mt-10 mb-3 text-gray-900">Projects</h2>
        <Link href="/projects">
          <a className="cursor-pointer text-blue-700">
            <h3 className="mt-1 mb-2">view all</h3>
          </a>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ProjectCard
            imgSrc="/../public/projects/thislang.png"
            title="Thislang"
            description="This-lang is a javascript bytecode VM interpreter implemented in javascript. It can run itself making it self-hosting."
            href="/projects/thislang"
          >
            <JavascriptIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/../public/projects/gbemu.png"
            title="GBEmu"
            description="A Gameboy color emulator that runs in the browser. Implemented in Rust and running on WASM."
            href="/"
          >
            <RustIcon />
            <JavascriptIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/../public/projects/giron.png"
            title="Giron"
            description="ECMAScript parser written in Rust which outputs an ESTree compliant JSON abstract syntax tree."
            href="/"
          >
            <RustIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/../public/projects/shuttle.png"
            title="Shuttle"
            description="Shuttle is a screen and webcam recorder. It's a bit like loom but rather free and a webapp instead of an extension."
            href="/"
          >
            <TypescriptIcon />
            <ReactIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/../public/projects/dotados.png"
            title="Dota Degrees of Separation"
            description="A webapp to explore the degrees of separation between pro players of the online game Dota 2."
            href="/"
          >
            <PythonIcon />
            <ReactIcon />
          </ProjectCard>
          <ProjectCard
            imgSrc="/../public/projects/website.png"
            title="Personal website"
            description="Personal website and blog of yours truly."
            href="/"
          >
            <ReactIcon />
            <TailwindIcon />
          </ProjectCard>
        </div>
        <Link href="/projects">
          <a className="cursor-pointer text-blue-700">
            <h3 className="my-2">view all</h3>
          </a>
        </Link>
      </section>
    </Layout>
  );
}
