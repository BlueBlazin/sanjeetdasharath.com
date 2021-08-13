import Head from "next/head";

import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="mw-screen mh-screen overflow-x-hidden bg-gray-50 flex flex-col items-center">
        <Header />
        {children}
      </div>
    </>
  );
}
