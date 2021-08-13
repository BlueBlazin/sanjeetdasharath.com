import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import ProjectCard from "../components/project-card";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-4xl mt-12 text-gray-900">
        {"Hello, I'm Sanjeet 👋"}
      </h1>
      <section className="px-10 mt-10 text-gray-900 flex flex-col items-center max-w-2xl">
        <p className="my-3 max-w-2xl text-center sm:text-left">
          I&apos;m a{" "}
          <span className="font-black text-blue-500">programmer</span> and{" "}
          <span className="font-black text-blue-500">
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
        <h2 className="text-3xl mt-12 text-gray-900">Projects</h2>
        <div>
          <ProjectCard
            imgSrc="https://picsum.photos/seed/picsum/500/350"
            title="example project"
            description="In this example project I made this cool thing."
          />
        </div>
      </section>
    </Layout>
  );
}

// https://picsum.photos/seed/picsum/500/350
