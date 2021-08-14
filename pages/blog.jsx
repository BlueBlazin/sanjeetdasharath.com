import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <div className="my-12">
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              {console.log(id)}
              <Link href={`/blog/${id}`}>
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
