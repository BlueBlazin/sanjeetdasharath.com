import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-4xl text-center mt-12">{"Hello, I'm Sanjeet 👋"}</h1>
    </Layout>
  );
}
