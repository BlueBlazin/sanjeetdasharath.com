import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function ProjectPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
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
