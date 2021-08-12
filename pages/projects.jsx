import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function ProjectsPage({ posts }) {
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>

      <div>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              {console.log(id)}
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <div>{date}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return { props: { posts } };
}
