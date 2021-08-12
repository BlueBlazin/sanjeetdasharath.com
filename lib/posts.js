import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";

const blogDirectory = path.join(process.cwd(), "blog");

export function getSortedPostsData() {
  const filenames = fs.readdirSync(blogDirectory);

  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

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

export function getAllPostsIds() {
  const filenames = fs.readdirSync(blogDirectory);

  return filenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, "") },
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(blogDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { content, data } = matter(fileContents);

  const serializedMdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism],
    },
  });

  return { id, serializedMdx, ...data };
}
