import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

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
      <div className="mw-screen mh-screen overflow-x-hidden flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
