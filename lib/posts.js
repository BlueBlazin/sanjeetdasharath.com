import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import matter from "gray-matter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkCodeTitles from "remark-code-titles";
import markdown from "remark-parse";

const blogDirectory = path.join(process.cwd(), "blog");

export function getSortedPostsData() {
  const filenames = fs.readdirSync(blogDirectory);

  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.mdx$/, "");

    const fullPath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(blogDirectory);

  return filenames.map((filename) => ({
    params: { id: filename.replace(/\.mdx$/, "") },
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(blogDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { content, data } = matter(fileContents);

  const serializedMdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [markdown, remarkMath, remarkCodeTitles],
      rehypePlugins: [rehypeKatex, mdxPrism],
    },
  });

  return { id, serializedMdx, ...data };
}
