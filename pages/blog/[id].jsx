import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import H1 from "../../components/headings";

export default function BlogPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="md:w-3/5 w-screen px-4">
        <H1>{postData.title}</H1>
        <MDXRemote {...postData.serializedMdx} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return { props: { postData } };
}
