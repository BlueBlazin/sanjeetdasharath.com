import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </div>
  );
}
